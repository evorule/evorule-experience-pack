const s=`evorule 规则格式(JSON):

顶层结构: { "transform": [规则1, 规则2, ..., 兜底规则] }

每条规则是一个对象,字段:
  - type: 元指令,取值 "set" | "push" | "branch" | "io_request" | "collect" | "merge"
  - params: 参数对象,因 type 而异

各 type 的 params:
  - set:    { attr: "<payload 路径>", operation: "set" | "add" | "sub", value: <字面量或 __ 路径引用> }
            (attr 三字段全必填;可为相对路径 "data.status" 或全路径 "__exec__.payload.data.status")
  - push:   { instructions: [<指令对象数组>] 或 "__ 路径引用" }
            (指令对象:{ type: <指令层类型>, params: {...} })
  - branch: { domain: <域>, on_true: [子规则数组], on_false: [子规则数组] }
  - io_request: { io_type: "<IO 类型>", ...其他参数 }
            (如 "call_external";I/O 结果按 io_type 隔离写入 __exec__.payload.__io_results__.<io_type>)
  - collect: { from: "<源数组路径>", each: <指令模板> }
  - merge:  { messages: "<消息历史路径>", tool_result 或 tool_results: "<工具结果路径>", next_instruction: <指令模板> }

域(domain)形态: { type: ..., ... } 对象,或 "__ 路径引用" 字符串(动态域)
  - eq:       { type: "eq", path: "<路径>", value: <值> }
  - lt:       { type: "lt", path: "<路径>", value: <值> }
  - exists:   { type: "exists", path: "<路径>" }
  - instruction: { type: "instruction", instruction_type: "<业务指令类型>" }
  - has_fields:  { type: "has_fields", path: "<路径>", fields: ["<字段名>", ...] }
  - all:      { type: "all", inner: [<域数组>] }    (全部满足;嵌套一律用 inner)
  - not:      { type: "not", inner: [<域>] }        (取反;嵌套一律用 inner)

路径规则:
  - __ 前缀字符串必须是合法路径(如 __exec__.payload.<字段> / __exec__.instruction.<字段>)
  - 相对路径直接写(如 data.sensor.temperature);数组索引用 [0]
  - I/O 结果是复数 __io_results__.<io_type>(禁止单数 __io_result__)

硬约束(违反将无法通过校验):
  G1: 必须是合法 JSON
  G2: type 必须是 6 种元指令之一;params 必填字段齐全
      (set: attr/operation/value;branch: domain/on_true;io_request: io_type;collect: from/each;merge: messages/next_instruction+tool_result[s];push: instructions)
  G3: 建议 io_request 包在 exists(__exec__.payload.__io_results__.<io_type>) 双路径分支内
      (已有结果走读取分支,无结果才发起请求)
  G4: domain.type 必须是 7 种之一;域嵌套一律用 inner(禁止 domains/domain 字段)
  G5: __ 前缀字符串必须是合法路径;单数 __io_result__ 会被拒绝
  G6: 建议 transform 末条为 branch + all(inner:[]) 兜底规则(否则未匹配指令产生 Error fact)
  G7: 递归深度 ≤ 64 层

兜底规则示例(建议放 transform 最后一条):
  { "type": "branch", "params": { "domain": { "type": "all", "inner": [] },
    "on_true": [{ "type": "set", "params": { "attr": "data.result", "operation": "set", "value": "未匹配" } }],
    "on_false": [] } }

完整示例(匹配业务指令 equipment_inspection_check,温度 ≥ 80 升级告警):
  {
    "transform": [
      {
        "type": "branch",
        "params": {
          "domain": { "type": "instruction", "instruction_type": "equipment_inspection_check" },
          "on_true": [
            { "type": "set", "params": { "attr": "data", "operation": "set", "value": "__exec__.instruction.params" } },
            {
              "type": "branch",
              "params": {
                "domain": { "type": "lt", "path": "__exec__.payload.data.sensor.temperature", "value": 80 },
                "on_true": [{ "type": "set", "params": { "attr": "__exec__.payload.data.inspection.alarm_level", "operation": "set", "value": "normal" } }],
                "on_false": [{ "type": "set", "params": { "attr": "__exec__.payload.data.inspection.alarm_level", "operation": "set", "value": "escalate" } }]
              }
            }
          ],
          "on_false": []
        }
      },
      {
        "type": "branch",
        "params": {
          "domain": { "type": "all", "inner": [] },
          "on_true": [{ "type": "set", "params": { "attr": "__exec__.payload.data.result", "operation": "set", "value": "未知指令" } }],
          "on_false": []
        }
      }
    ]
  }`;function c(t){return`你是规则设计助手。请把以下自然语言描述转换为 evorule 规则 JSON。

${s}

用户描述:
"""
${t}
"""

要求:
1. 输出严格的 JSON(无注释、无 markdown 代码块包裹、无前后说明文字)
2. 必须满足所有硬约束 G1-G7
3. 最后一条必须是兜底规则(G6)
4. 路径必须使用正确的 __ 前缀(G5)
5. 如果用户描述不明确,按合理默认值填充,不要拒绝

只输出 JSON 本身,不要解释,不要 markdown:`}function m(t){return`你是规则解释助手。请用通俗易懂的中文解释以下 evorule 规则 JSON 做什么。

${s}

规则 JSON:
"""
${t}
"""

要求:
1. 用普通用户能理解的语言(避免术语)
2. 说明这条规则会匹配什么指令、做什么操作
3. 如果有 io_request,说明会等待 IO 输入
4. 如果有兜底规则,说明未匹配时会发生什么
5. 不要输出 JSON,只输出说明文字
6. 简洁清晰,3-5 句话即可

说明:`}function y(t){return`你是测试输入助手。请把以下自然语言描述转换为 evorule 测试输入 JSON。

evorule 测试输入(instruction)是一个 JSON 对象,字段由业务规则匹配。
常见字段:type(指令类型)、payload(数据对象)等。

用户描述:
"""
${t}
"""

要求:
1. 输出严格的 JSON 对象(无注释、无 markdown 代码块包裹)
2. 字段名用蛇形/snake_case(如 user_id 而非 userId)
3. 数值类型用数字,日期用 ISO 8601 字符串
4. 如果描述不明确,按合理默认值填充
5. 不要输出说明文字,只输出 JSON

只输出 JSON 本身:`}function f(){return'请回复"OK"(只输出这两个字符,不要其他内容)。'}const d=["increment","set","branch","push","sequence","conditional","while_loop","noop","call_external","call_service"];function h(t){return`你是命令转译助手。请把以下自然语言描述转换为 evorule 命令指令 JSON 草稿。

evorule 命令(instruction)是一个 JSON 对象:
  { "type": "<指令类型>", "params": { ... } }

指令类型(type)内置白名单(协议标识符,原样使用):
${d.join(" / ")}

常用类型的 params 形状:
  - increment:    { "attr": "<状态路径>", "delta": <数值> }
  - set:          { "attr": "<状态路径>", "operation": "set", "value": <字面量> }
  - sequence:     { "instructions": [<指令对象数组>] }
  - conditional:  { "domain": <域条件>, "then": [<指令数组>], "else": [<指令数组>] }
  - while_loop:   { "condition": <域条件>, "body": [<指令数组>] }
  - noop:         {}
  - branch/push/call_external/call_service: 参数因用途而异,按用户描述填充
    (call_service 常见形状: { "tool_name" 或 "service_name": "<名称>", "arguments": {...} })

域条件(domain)形态: { "type": "eq"|"lt"|"exists"|"has_fields", "path": "<路径>", ... }
路径规则: 业务数据在 __exec__.payload.<字段>;相对路径直接写(如 data.amount)。

用户描述:
"""
${t}
"""

要求:
1. 输出严格的 JSON 对象(无注释、无 markdown 代码块包裹、无前后说明文字)
2. type 只能取白名单中的协议标识符,原样拼写
3. 数值用数字类型,字符串用双引号
4. 如果描述不明确,按合理默认值填充,不要拒绝
5. 只输出 JSON 本身,不要解释

只输出 JSON:`}function u(t,n){const o=n.nodeTypes.length===0?"（当前包未声明 node_types 资产）":n.nodeTypes.map(e=>{const p=e.description?` — ${e.description}`:"",r=(e.params_form??[]).map(a=>{const l=a.scene_ref?`(scene_ref:${a.scene_ref})`:"";return`${a.field_id}:${a.type}${l}`}).join(", ");return`- ${e.node_type}（${e.display_name}）${p}${r?`；params 字段: ${r}`:""}`}).join(`
`),i=n.sceneFields.length===0?"（场景中无已注册 path 的字段）":n.sceneFields.map(e=>`- ${e.scene_id} / ${e.field_id} → path: ${e.path}`).join(`
`),_=!n.existingRules||n.existingRules.length===0?"":`
存量规则参考(执行域已生效规则的 id 与描述,仅供学习结构模式与路径约定;
flow 草稿是独立资产,**不要**在草稿中引用这些规则 id):
${n.existingRules.map(e=>`- ${e.rule_id}${e.description?`：${e.description}`:""}`).join(`
`)}
`;return`你是流程转译助手。请把以下自然语言描述转换为 evorule flow JSON 草稿。

evorule flow 资产(契约 v1.1 §4.6)是一个 JSON 对象:
  {
    "flow_id": "<流程 id>",
    "version": 1,
    "nodes": [ { "node_id": "n1", "node_type": "<节点类型>", "params": {...},
                 "form_ref": { "scene": "<场景 id>", "field": "<字段 id>" },
                 "threshold": <数值> } ],
    "edges": [ { "from": "n1", "to": "n2", "guard": "<守卫,可选>" } ]
  }
  - params/form_ref/threshold 仅在节点需要时出现;guard 仅审批出边需要

结构示例(仅演示 JSON 形状——node_type/场景/字段为虚构占位,**禁止照抄**,
实际输出必须只用下方白名单中的 node_type 与场景字段):
  {
    "flow_id": "expense_approval_flow",
    "version": 1,
    "nodes": [
      { "node_id": "n1", "node_type": "apply",
        "form_ref": { "scene": "expense", "field": "amount" } },
      { "node_id": "n2", "node_type": "approve", "threshold": 5000 },
      { "node_id": "n3", "node_type": "pay" }
    ],
    "edges": [
      { "from": "n1", "to": "n2" },
      { "from": "n2", "to": "n3", "guard": "approved" }
    ]
  }

可用节点类型(node_type 白名单,原样使用):
${o}

场景字段取值域(form_ref.field 只能取下列已注册 path 字段,R2):
${i}
${_}
硬约束(违反无法通过编译校验):
  1. 输出严格的 JSON 对象(无注释、无 markdown 包裹、无说明文字)
  2. node_type 只能取上方白名单;form_ref.field 只能取上方场景字段;
     禁止使用结构示例中的虚构类型(apply/approve/pay 仅为占位)
  3. 节点 id 用 n1/n2/… 顺序编号;flow_id 用小写 snake_case 英文
  4. v0 线性链:每个节点至多 1 条出边、1 条入边;edges 顺序与节点链顺序一致
  5. 审批类节点的出边加 "guard": "approved"
  6. 数值参数用数字类型,字符串用双引号
  7. 描述不明确时按合理默认值填充,不要拒绝

工具提示(可选能力,按需使用):若系统消息列出了可用的只读工具白名单,
可先调用其中规则/资产/审计查询类工具了解存量规则模式与系统实态,再输出
最终草稿;没有工具或认为不需要时,直接输出草稿即可,不要询问。

用户描述:
"""
${t}
"""

只输出 flow JSON:`}function v(t,n){return`注意:这是对前述对话中流程草稿的**修订请求**(历史对话含上一版草稿)。
请基于修订指令调整草稿,仍输出**完整修订后的 flow JSON**(不是差异、不是说明),
并继续遵守下方全部格式说明与硬约束。

${u(t,n)}`}export{d as C,s as E,v as a,u as b,c,m as d,y as e,h as f,f as p};
