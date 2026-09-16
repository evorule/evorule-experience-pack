# EvoRule 本地体验包・7 分钟快速上手（QUICKSTART）

本包是 **EvoRule 规则引擎** 的零依赖本地体验版：双击即用，内置财务 / 医疗 / 等保三个业务域共 **16 条业务规则**、**6 个规则 bundle**、**20 条脱敏预置数据**，以及 append-only + BLAKE3 哈希审计链。

> 仅监听 
>
> `127.0.0.1`
>
>  回环地址，
>
> **请勿绑定到非本机地址**
>
> 。



***

## 🌐 想先快速体验？直接打开在线 Demo（无需下载）

如果只是想快速感受 evorule 核心能力，可以**先不开本地服务**，直接在浏览器里跑：

- **GitHub Pages**：https://evorule.github.io/evorule-console-cloud/

打开即用，evorule 引擎以 **WebAssembly 在浏览器内运行**，零后端、零下载、零安装；首次访问后 Service Worker 缓存，可离线使用。

**在线体验已支持**：

- 16 条业务规则全部可在线执行（财务 6 + 医疗 6 + 等保 4）
- 审计链 BLAKE3 哈希在浏览器中验证通过
- 时间旅行（回放历史版本）
- 7 步交互式引导教学

**在线体验的限制**（想深入使用再下载本本地体验包）：

- ❌ 无规则热重载（在线模式不能编辑规则）
- ❌ 无 Bundle 管理
- ❌ 无持久化（刷新页面后会话重置）
- ❌ `role13_demo` 的 `io_request` 场景不收敛，需本地体验
- ❌ cloud 专属写操作（部署审批 / 回滚 / 插件审批）在线不可用

> 在线体验觉得不错、想继续玩热重载 / Bundle / 持久化，再回到本文档下方下载本本地体验包即可。

***

## 0. 启动

**Windows**：双击 `start.bat`

**Linux/macOS**：`bash start.sh`

启动后脚本会自动：



1. 检测 18080 / 18081 端口是否被占用；

2. 先后拉起治理服务（18081）与主服务（18080）；

3. 轮询健康检查直到就绪，自动打开浏览器。

浏览器访问 [http://localhost:18080](http://localhost:18080) 即可看到控制台。



| 服务                      | 地址                                               | 作用                             |
| ----------------------- | ------------------------------------------------ | ------------------------------ |
| 主服务 evorule-server      | [http://127.0.0.1:18080](http://127.0.0.1:18080) | 规则引擎 + 前端 + 审计                 |
| 治理服务 evorule-rule-serve | [http://127.0.0.1:18081](http://127.0.0.1:18081) | 规则版本 / 治理（admin /evorule-demo） |



***

## Step 1・确认服务起来了

**操作**：浏览器打开 [http://localhost:18080](http://localhost:18080) ，应看到深色控制台首页。

**验证点**：



* `GET http://127.0.0.1:18080/api/health` → `{"success":true,...}`

* `GET http://127.0.0.1:18080/api/rules` → `count = 49`（其中 L1 宪法层 1 条、L3 业务层 24 条；含本包新增 16 条）

* `GET http://127.0.0.1:18080/` → 返回 `index.html`



***

## Step 2・查看已加载的规则

**操作**：控制台进入「规则 / Rules」面板，或访问 `GET /api/rules`。

**验证点**：下列 16 个业务 `instruction_type` 全部存在（见文末《规则清单》）。核心宪法层（increment/decrement/sequence/conditional 等）另有约 25 条，合计 49 条。



***

## Step 3・改规则并热重载（版本演进）

**操作**：直接编辑 `rules/` 目录下的 JSON（例如改 `rules/20_finance_rules.json` 里差旅限额 3000 → 5000），然后：



```
Invoke-RestMethod -Method Post -Uri http://127.0.0.1:18080/api/rules/reload -Body '{}' -ContentType 'application/json'
```

**预期**：返回 `{"reload_ok":true,"previous_rules":49,"current_rules":49}`，无需重启进程即生效。

**进阶**：治理服务（18081）提供规则版本管理；`GET /api/workspaces/{id}/rules/{rule_id}/versions` 可查版本历史。



***

## Step 4・查看 / 导入规则 Bundle

**操作**：`GET /api/bundles/active` 查看当前生效 bundle。

**预期**：返回 6 个 bundle，其中 `bundle-djbh-crosscut-v1`（等保横切，entry\_count=4）已激活，对应磁盘目录 `rules/bundles/bundle-djbh-crosscut-v1/`。

**导入新 bundle**（如有 bundle JSON）：



```
Invoke-RestMethod -Method Post -Uri http://127.0.0.1:18080/api/bundles/import \`

&#x20; -ContentType 'application/json' -Body (Get-Content -Raw your-bundle.json)
```



***

## Step 5・导出规则 / 审计记录

本包支持两种导出：



1. **文件级导出**：`rules/` 目录即全部规则源文件（规则集 + bundles），可直接复制、纳入 Git 版本管理。

2. **审计链导出**（API）：`GET /api/sessions/{id}/audit/export`（另有 `/audit/export/compressed` 压缩版），返回该会话完整 append-only 审计链 JSON，可离线核验 BLAKE3 哈希。



***

## Step 6・跑业务场景（门禁阻断）

> 💡 **在线模式也可操作**：下方 7 个核心场景（门禁阻断）在 [在线 Demo](https://evorule.github.io/evorule-console-cloud/) 的执行台里同样可提交、可看 `result.decision`；下表命令行示例（`Invoke-RestMethod`）仅本地体验包可用。

在控制台「会话 / Session」里新建会话，依次提交下表指令；每次提交后看 `result.decision`。

也可用命令行（PowerShell）一键跑：



```
\# 建会话

\$s = Invoke-RestMethod -Method Post -Uri http://127.0.0.1:18080/api/sessions -Body '{}'

\$sid = \$s.session\_id

\# 提交一条指令（差旅 2000 应放行）

\$cmd = '{"instruction":{"type":"finance\_expense\_limit\_check","params":{"expense":{"type":"travel","amount":2000}}}}'

Invoke-RestMethod -Method Post -Uri "http://127.0.0.1:18080/api/sessions/\$sid/command" -ContentType 'application/json' -Body \$cmd

Start-Sleep -Milliseconds 500

Invoke-RestMethod -Uri "http://127.0.0.1:18080/api/sessions/\$sid/state"
```

**7 个核心场景（均已验证）**：



| # | 场景          | instruction\_type                 | 关键入参                                        | 预期 decision        |
| - | ----------- | --------------------------------- | ------------------------------------------- | ------------------ |
| 1 | 差旅 2000 限额内 | `finance_expense_limit_check`     | travel amount=2000                          | `allowed`          |
| 2 | 差旅 5000 超限  | `finance_expense_limit_check`     | travel amount=5000                          | `blocked`          |
| 3 | 拆单检测        | `finance_expense_split_check`     | split\_suspected=true，多笔                    | `split_detected`\* |
| 4 | 特殊级抗菌药门诊    | `medical_antibiotic_tier_check`   | tier=special + 门诊                           | `blocked`          |
| 5 | 青霉素过敏       | `medical_drug_allergy_check`      | has\_penicillin\_allergy=true + penicillin  | `blocked`          |
| 6 | 未加密存身份证     | `finance_storage_encryption_gate` | id\_card + encryption=none                  | `blocked`          |
| 7 | 读病历未双因子     | `medical_mfa_gate`                | read\_medical\_record + mfa\_verified=false | `blocked`          |

> \* 关于拆单（#3）：规则检查预计算字段 
>
> `split_suspected`
>
> （布尔值）。引擎无循环 / 聚合原语，同供应商同日多笔的分组合计由上游预算 / 报销服务完成后传入 
>
> `split_suspected`
>
> ，本规则只编码处置策略（阻断 + 留痕）。



***

## Step 7・查证：审计链 + 时间旅行

> 💡 **在线模式也可操作**：BLAKE3 审计链验证、因果链追溯、时间旅行回看与版本 diff 在 [在线 Demo](https://evorule.github.io/evorule-console-cloud/) 的审计 / 时间旅行视图中均可操作；下方 `Invoke-RestMethod` 命令行示例仅本地体验包可用。

沿用 Step 6 的会话，提交两条指令后（版本 1 = 放行，版本 2 = 阻断）：



```
\# 7a. 校验整段 BLAKE3 审计链是否完整未被篡改

Invoke-RestMethod http://127.0.0.1:18080/api/sessions/\$sid/audit/verify

\#   -> {"verified":true, "fact\_count":8, ...}

\# 7b. 看审计链条目（每条含 prev\_hash / content\_hash / cause 因果指针）

Invoke-RestMethod http://127.0.0.1:18080/api/sessions/\$sid/audit

\# 7c. 顺着某条 fact\_id 追因果链

Invoke-RestMethod http://127.0.0.1:18080/api/sessions/\$sid/audit/causal/{fact\_id}

\# 7d. 时间旅行：只读回看历史版本（不改动当前状态）

Invoke-RestMethod "http://127.0.0.1:18080/api/sessions/\$sid/rewind?version=1"

\# 7e. 两个版本间 diff

Invoke-RestMethod "http://127.0.0.1:18080/api/sessions/\$sid/diff?a=1\&b=2"
```

**预期**：`verified=true`；StateTransition 条目的 `cause` 指回触发它的 Command fact\_id；`rewind` 返回版本 1 时的快照（decision=allowed）；`diff` 显示 `data.result` 由 allowed→blocked 的变化。



***

## 预置数据（20 条，全脱敏）

种子脚本：`scripts/seed-demo-data.ps1`（Windows）/ `seed-demo-data.sh`（Linux）。数据在 `data/seed/`：



| 文件                           | 条数     | 内容                               |
| ---------------------------- | ------ | -------------------------------- |
| `finance_expenses.json`      | 6      | 差旅超限额、餐饮限额内、分级审批、拆单、超预算、未加密门禁    |
| `finance_invoices.json`      | 4      | 合规发票、缺税号、空税号、合规发票                |
| `medical_patients.json`      | 6      | 患者档案 P-001\~P-006（含 P-003 青霉素过敏） |
| `medical_prescriptions.json` | 4      | 特殊级抗菌药、病毒感染、过敏、越级 36h            |
| **合计**                       | **20** |                                  |



***

## 常见问题排查



| 现象             | 排查                                                                                 |
| -------------- | ---------------------------------------------------------------------------------- |
| 浏览器打不开         | 看任务栏是否有 `evorule-server` / `evorule-rule-serve` 两个最小化窗口；查 `data/server-stderr.log` |
| 提示端口被占用        | 18080/18081 已被占用，说明服务可能已在跑；直接访问 [http://localhost:18080](http://localhost:18080)   |
| 改了规则没生效        | 确认编辑的是本目录 `rules/` 下文件，再调 `POST /api/rules/reload`                                 |
| 指令返回空 / 不决策    | 确认 `instruction_type` 拼写与规则清单一致；`params` 结构与规则文件里的路径一致                             |
| 拆单返回 no\_split | 见 Step 6 备注：`expenses` 需传 map `{"0":..,"1":..}` 而非数组                               |
| 长时间无响应         | 关闭两个最小化服务窗口后重新 `start.bat`；本演示为单反应器，避免高频新建会话                                       |
| 如何停止           | 关闭任务栏上 `evorule-server` 与 `evorule-rule-serve` 两个窗口（Linux: `pkill -f evorule`）     |



***

## 规则清单（16 条业务规则）



| #  | instruction\_type                   | 名称       | 合规依据                             | 触发场景 / 处置                             |
| -- | ----------------------------------- | -------- | -------------------------------- | ------------------------------------- |
| 1  | `finance_expense_limit_check`       | 报销限额     | 财会〔2008〕7 号《企业内部控制基本规范》第 20/22 条 | 差旅≥3000、餐饮≥1500、办公≥800 阻断             |
| 2  | `finance_approval_routing_check`    | 分级审批路由   | 同上                               | <500 自动 / <5000 经理 / <30000 副总 / 否则集体 |
| 3  | `finance_invoice_compliance_check`  | 发票合规     | 《发票管理办法》(2023 修订) 第 20/21 条      | 缺必填字段或税号为空 → rejected                 |
| 4  | `finance_expense_split_check`       | 拆单检测     | 《企业内部控制基本规范》                     | 同供应商同日多笔疑似拆分 → split\_detected        |
| 5  | `finance_budget_check`              | 预算占用     | 同上                               | 科目余额不足 → blocked                      |
| 6  | `finance_storage_encryption_gate`   | 存储加密门禁   | GB/T 22239-2019 §8.1.4.8.b       | 敏感字段未加密存储 → blocked                   |
| 7  | `medical_antibiotic_tier_check`     | 抗菌药物分级   | 卫生部令 84 号 第 27/24 条              | 特殊使用级门诊 / 限制级无处方权 → blocked           |
| 8  | `medical_drug_indication_check`     | 用药指征     | 2015 抗菌药物指导原则 / 令 84 号第 31 条     | 病毒性感染开抗菌药 → blocked；无药敏 → warning     |
| 9  | `medical_drug_allergy_check`        | 过敏禁忌     | 药品说明书禁忌                          | 青霉素过敏 + 青霉素类 → blocked                |
| 10 | `medical_antibiotic_override_check` | 越级使用补办   | 卫生部令 84 号 第 28 条                 | 越级 >24h 未补办手续 → blocked               |
| 11 | `medical_triage_check`              | 分诊阈值     | 临床经验阈值示例                         | 高龄高热 / 高热≥39.5℃ / 感染指标高 → urgent      |
| 12 | `medical_mfa_gate`                  | 病历读取 MFA | GB/T 22239-2019 §8.1.4.1.d       | 读病历未双因子认证 → blocked                   |
| 13 | `djbh_mfa_check`                    | 双因子认证    | GB/T 22239-2019 §8.1.4.1.d       | 高风险操作 <2 因子 → blocked                 |
| 14 | `djbh_access_control_check`         | 最小权限     | GB/T 22239-2019 §8.1.4.2.d       | 非 admin 请求 admin 权限 → blocked         |
| 15 | `djbh_audit_check`                  | 安全审计覆盖   | GB/T 22239-2019 §8.1.4.3.a,c     | 审计未启用 → blocked；日志未保护 → warning       |
| 16 | `djbh_confidentiality_check`        | 数据保密性    | GB/T 22239-2019 §8.1.4.8.b       | 敏感数据未加密存储 → blocked                   |