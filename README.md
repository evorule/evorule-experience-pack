# EvoRule 本地体验包

> **仓库角色**：本仓库是 **GitHub 镜像**。权威源（primary repo）在 **Gitee**：[https://gitee.com/evorule/evorule-experience-pack](https://gitee.com/evorule/evorule-experience-pack)。
> Issue / PR 请提交到 Gitee，GitHub 侧仅供镜像与推广展示。

## ⬇️ 下载（两种方式任选）

- **方式一（推荐）**：在 [Gitee Releases](https://gitee.com/evorule/evorule-experience-pack/releases) 或 [GitHub Releases](https://github.com/evorule/evorule-experience-pack/releases) 下载 `evorule-experience-pack.zip`（附 SHA256 校验和）
- **方式二**：`git clone https://gitee.com/evorule/evorule-experience-pack.git` 后直接双击 `start.bat`

解压/克隆后**无需安装 Rust/Node**，Windows 双击 `start.bat`、Linux 执行 `bash start.sh` 即启动双服务并打开浏览器。7 分钟上手见 [QUICKSTART.md](./QUICKSTART.md)。


> 把合规策略变成可执行、可审计、可回溯的规则。双击启动，7 分钟走完「规则加载 → 门禁阻断 → 审计查证」全链路。

EvoRule 是一个**确定性规则引擎**：业务/合规策略以声明式 JSON 编码，在单反应器上顺序执行，每次决策通过 **append-only + BLAKE3 哈希链**留痕，支持完整性校验、因果追溯、版本 diff 与时间旅行回看。

本包是**自包含本地体验版**：内置真实引擎（非 Mock）、16 条跨领域规则、20 条脱敏预置数据，解压即用，无需安装 Rust/Node，无需联网。

---

## 你能亲手验证什么

以下每一项都对应 [QUICKSTART.md](./QUICKSTART.md) 中的具体操作步骤，不是宣传话术：

| 能力 | 验证路径 | 预期结果 |
|---|---|---|
| **规则即代码** | Step 2：查看 16 条规则的 JSON 源文件 | 每条规则含 `instruction_type`、分支逻辑、合规依据标注 |
| **热重载生效** | Step 3：改 `rules/20_finance_rules.json` 限额 3000→5000，调 `/api/rules/reload` | `reload_ok:true`，不重启进程即生效 |
| **合规门禁阻断** | Step 6：提交「特殊级抗菌药+门诊」指令 | `decision=blocked`，reason 引用卫生部令84号第二十七条 |
| **超额阻断** | Step 6：提交「差旅 5000 元」指令 | `decision=blocked`，reason="差旅报销超限额3000元" |
| **过敏禁忌阻断** | Step 6：提交「青霉素过敏+阿莫西林」指令 | `decision=blocked`，reason 引用药品说明书禁忌 |
| **等保门禁** | Step 6：提交「身份证号未加密存储」指令 | `decision=blocked`，reason 引用 GB/T 22239-2019 §8.1.4.8.b |
| **BLAKE3 审计链** | Step 7：调 `/api/sessions/{id}/audit/verify` | `verified:true`，整链哈希连续可验证 |
| **因果追溯** | Step 7：调 `/api/sessions/{id}/audit/causal/{fact_id}` | 返回从 Command → StateTransition 的因果链 |
| **时间旅行** | Step 7：调 `/api/sessions/{id}/rewind?version=1` | 只读回看历史版本快照，不改动当前状态 |
| **版本 diff** | Step 7：调 `/api/sessions/{id}/diff?a=1&b=2` | 显示两版本间 payload 字段变化 |
| **Bundle 导入导出** | Step 4/5：查看 6 个激活 bundle，导出审计链 JSON | `bundle-djbh-crosscut-v1` 含 4 条等保规则 |

---

## 内置规则集（16 条，均标注权威来源）

### 财务域（6 条）

| ID | 规则 | 合规依据 | 触发场景 |
|---|---|---|---|
| F1 | 报销限额校验 | 财会〔2008〕7号《企业内部控制基本规范》第二十/二十二条 | 差旅≥3000 / 餐饮≥1500 / 办公≥800 阻断 |
| F2 | 分级审批路由 | 同上 | <500 自动 / <5000 部门经理 / <30000 分管副总 / 否则集体审批 |
| F3 | 发票合规校验 | 《发票管理办法》(2023修订) 第二十/二十一条 | 缺必填字段或纳税人识别号为空 → rejected |
| F4 | 超额拆分检测 | 《企业内部控制基本规范》预算控制 | 同供应商同日多笔疑似拆单 → split_detected |
| F5 | 预算占用校验 | 同上 | 科目余额不足 → blocked |
| F6 | 数据保密性门禁 | GB/T 22239-2019 §8.1.4.8.b | 身份证号未加密存储 → blocked |

### 医疗域（6 条，全脱敏演示）

| ID | 规则 | 合规依据 | 触发场景 |
|---|---|---|---|
| M1 | 抗菌药物分级门禁 | 卫生部令84号第六/二十七条 | 特殊使用级门诊使用 / 限制级无处方权 → blocked |
| M2 | 用药指征校验 | 《抗菌药物临床应用指导原则(2015)》/ 令84号第三十一条 | 病毒性感染开抗菌药 → blocked；无药敏 → warning |
| M3 | 过敏禁忌 | 药品说明书禁忌 | 青霉素过敏 + 青霉素类药物 → blocked |
| M4 | 越级使用补办 | 卫生部令84号第二十八条 | 急诊越级 >24h 未补办手续 → blocked |
| M5 | 分诊阈值 | 临床经验阈值示例（非法规） | 高龄高热 / ≥39.5℃ / 感染指标高 → urgent |
| M6 | 双因子认证门禁 | GB/T 22239-2019 §8.1.4.1.d | 读取病历未双因子认证 → blocked |

### 等保 2.0 横切（4 条，独立 bundle 可导入）

| ID | 规则 | 合规依据 | 触发场景 |
|---|---|---|---|
| D1 | 双因子认证 | GB/T 22239-2019 §8.1.4.1.d | 高风险操作认证因子<2 → blocked |
| D2 | 最小权限 | GB/T 22239-2019 §8.1.4.2.d | 非管理员请求管理员权限 → blocked |
| D3 | 安全审计覆盖 | GB/T 22239-2019 §8.1.4.3.a/c | 审计未启用 → blocked；日志未保护 → warning |
| D4 | 数据保密性 | GB/T 22239-2019 §8.1.4.8.b | 敏感数据未加密存储 → blocked |

> 等保横切 4 条同时打包为 `bundle-djbh-crosscut-v1`，可独立导入任意业务场景。

---

## 快速开始

**Windows**：双击 `start.bat`
**Linux**：`bash start.sh`

脚本自动检测端口 → 启动双服务 → 等待就绪 → 打开浏览器 http://localhost:18080

详细 7 步教学见 [QUICKSTART.md](./QUICKSTART.md)。

### 系统要求

- Windows 10/11 或 Linux x86_64
- 约 100MB 磁盘空间
- 端口 18080（主服务）、18081（治理服务）空闲

---

## 目录结构

```
evorule-experience-pack/
├── evorule-server.exe          # 主服务：规则引擎 + 前端 + 审计链
├── evorule-rule-serve.exe       # 治理服务：规则版本管理
├── start.bat / start.sh         # 一键启动
├── QUICKSTART.md                # 7 步上手教学（先读这个）
├── README.md                    # 本文件
├── web/                         # 前端控制台（SvelteKit 静态构建）
├── rules/                       # 规则集
│   ├── 20_finance_rules.json    #   财务 6 条
│   ├── 21_medical_rules.json    #   医疗 6 条
│   ├── 22_djbh_rules.json       #   等保横切 4 条
│   ├── 10_role13_demo.json      #   引擎自带演示
│   └── bundles/                 #   6 个 bundle（含等保横切包）
├── resources/server_eval.json   # 核心宪法层规则
├── service_registry.json        # 外部服务注册表
├── data/seed/                   # 20 条脱敏预置数据
│   ├── finance_expenses.json    #   6 条报销单
│   ├── finance_invoices.json    #   4 条发票
│   ├── medical_patients.json    #   6 条患者档案
│   └── medical_prescriptions.json # 4 条处方
└── scripts/
    ├── seed-demo-data.ps1       # 播种演示数据（Windows）
    └── seed-demo-data.sh        # 播种演示数据（Linux）
```

---

## 安全说明

- 主服务以 `--insecure-serve` 启动，**仅监听 127.0.0.1 回环地址**，请勿改绑外部地址。
- 治理服务默认账号：`admin` / `evorule-demo`（仅本机演示用）。
- 所有医疗/财务数据为**虚构脱敏数据**：姓名以张某/李某代替，身份证号打码（`310101********1234`），不包含任何真实可识别信息。
- 本包为演示/工具性质，**不构成正式合规背书或临床决策依据**。等保条款引用仅供技术演示，正式等保测评请以权威机构为准。

---

## 技术诚实声明

- **引擎无循环/聚合原语**：F4 拆单检测的分组合计由上游服务预计算为 `split_suspected` 布尔值传入，规则只编码处置策略。F5 预算校验同理使用预计算的 `within_budget` 字段。
- **TCB 无 Float**：金额以整数表达，M5 体温以摄氏十分之几整数（`temperature_tenths`）表达。
- **单反应器**：本演示为单会话反应器设计，避免高频新建会话（见 QUICKSTART 排错表）。
- **domain 比较符仅 `eq`/`lt`**："大于等于"用 `not(lt)` 嵌套表达，规则文件中可见此模式。

---

## 许可

规则与源码遵循 AGPL-3.0-or-later（见各规则集 `metadata.license`）。核心宪法 `server_eval.json` 以 CC0-1.0 公共领域奉献。商业许可见上游项目 `COMMERCIAL_LICENSE.md`。
