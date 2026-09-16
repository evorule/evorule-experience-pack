var Os=Object.defineProperty;var Bs=(l,e,n)=>e in l?Os(l,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[e]=n;var Rt=(l,e,n)=>Bs(l,typeof e!="symbol"?e+"":e,n);import{R as Fs,g as ct}from"../chunks/DYfkCfLC.js";import"../chunks/DTnjDBBh.js";import{av as Us,b as Ks,aw as Hs,bp as Vs,h as Ta,C as Gs,l as za,e as Za,c as Ya,f as Ws,i as Xs,g as dt,Z as gt,J as Et,a1 as s,a2 as a,a0 as r,O as t,t as I,$ as bt,a7 as qe,a3 as St,a6 as z,a4 as u,aa as us,a8 as He,a9 as Ke,bk as Ua,a5 as Qa,_ as Js,bq as zs,br as Zs}from"../chunks/Cq92TY1P.js";import{s as ca}from"../chunks/CS_sACQn.js";import{c as Ys,a as es}from"../chunks/DSv83NJp.js";import{z as Qs,A as vs,d as ts,e as Ka,C as en,D as tn,a as an,E as sn,P as nn,o as ps}from"../chunks/DqSW2exv.js";import{a as ht,d as rn,e as on,t as Ma,b as qa}from"../chunks/D64tBC6c.js";import{b as m,f as h,c as Jt,t as ga}from"../chunks/jPfANYDL.js";import{s as o}from"../chunks/DNvxv4im.js";import{i as C}from"../chunks/By-MIdQl.js";import{s as ie,r as Ye,a as ln,e as ut,c as ka,b as Xt,d as as,i as ms}from"../chunks/DNQUG_5x.js";import{s as cn}from"../chunks/CfdQbssm.js";import{s as Me}from"../chunks/Dox6p1PE.js";import{d as yt,a as E,e as ua}from"../chunks/US4OiPqK.js";import{s as Pa}from"../chunks/DY-3j5aW.js";import{p as _s}from"../chunks/BheBLdxl.js";import{CONSOLE_VERSION as dn}from"../chunks/QipFVdOl.js";import{C as fs}from"../chunks/Bc5ul9LA.js";import{M as un,C as vn,s as pn}from"../chunks/Bjs2G25G.js";import{D as da,a as d,i as mn,l as _n,s as fn}from"../chunks/B9oYBuMH.js";import{r as hn}from"../chunks/lDTd4BB3.js";import{a as gn,v as hs,N as gs,n as bn}from"../chunks/BNR2qzFN.js";import{d as yn,s as wn}from"../chunks/CylPEaH4.js";import{n as va,a as kn,s as xn,b as En,t as bs}from"../chunks/0AA-zzSW.js";import{l as pa,a as ss,b as Sn,u as la,r as An,P as Ln,s as Cn,c as Pn,d as $n,i as $a}from"../chunks/BKrbT3jH.js";import{aw as In,Q as Tn,P as Mn,a4 as qn,c as Dn,C as Rn,ab as jn,a0 as Nn,V as On}from"../chunks/LPfRGylq.js";import"../chunks/ChvUscq5.js";import{R as Bn}from"../chunks/DJq_XXm5.js";import{p as Fn,a as Un,b as Kn,c as Hn,d as Vn,e as Gn,f as Wn,E as Xn}from"../chunks/i31_udrp.js";import{p as Jn,b as ys}from"../chunks/C-eL2LEc.js";import{i as Da,s as Ra}from"../chunks/89pIWgt5.js";import{h as zn}from"../chunks/BphzwEqH.js";import{e as ws,f as ks,b as xs,g as Zn,h as Yn,i as Qn,o as Es,T as Ea,j as er,p as tr,k as ar,n as sr,l as nr}from"../chunks/Cjc77DWU.js";import{a as rr,f as or}from"../chunks/BUClWben.js";import{u as ir,n as lr,m as cr,a as dr}from"../chunks/DwuiM0So.js";import{a as Ba,s as Ss,b as ur,d as vr,j as pr,p as mr,e as _r,f as fr,n as ns}from"../chunks/4YgBIWBA.js";import{s as hr,G as gr}from"../chunks/CYaWOdbX.js";import{p as br}from"../chunks/Cdvep56o.js";function yr(l,e){let n=null,i=Ta;var p;if(Ta){n=Ws;for(var v=Xs(document.head);v!==null&&(v.nodeType!==Gs||v.data!==l);)v=za(v);if(v===null)Za(!1);else{var c=za(v);v.remove(),Ya(c)}}Ta||(p=document.head.appendChild(Us()));try{Ks(()=>{var x=Hs(()=>e(p));x.f|=Vs})}finally{i&&(Za(!0),Ya(n))}}function Ut(l,e){throw new Fs(l,e.toString())}const wr=({url:l})=>{Qs()&&vs();const e=dt(ca),n=Ys();if(l.pathname==="/onboarding"&&(!e.loggedIn||!n))throw Ut(307,"/");if((l.pathname==="/runtime"||l.pathname==="/workspace"||l.pathname==="/export"||l.pathname==="/import-export"||l.pathname==="/marketplace"||l.pathname==="/flow"||l.pathname.startsWith("/view/"))&&!e.loggedIn)throw Ut(307,"/login");if(l.pathname==="/publish-queue"){if(!e.loggedIn)throw Ut(307,"/login");if(!ts("view_publish_queue"))throw Ut(307,"/")}if(l.pathname==="/version-history"&&!e.loggedIn)throw Ut(307,"/login");if(l.pathname==="/audit"){if(!e.loggedIn)throw ht("审计员工作台属治理侧,需治理角色登录(auditor/admin 等)。本地免登录的审计链视图在工作台「审计」入口。","登录墙"),Ut(307,"/login");if(!ts("view_audit_chain"))throw ht("当前账号无 view_audit_chain 权限(需 auditor/admin 等治理角色)。请用具备相应角色的治理账号登录。","权限不足"),Ut(307,"/")}if(l.pathname==="/users"&&!e.loggedIn||l.pathname==="/roles"&&!e.loggedIn||l.pathname==="/apps"&&!e.loggedIn)throw Ut(307,"/login");return{}},mc=Object.freeze(Object.defineProperty({__proto__:null,load:wr},Symbol.toStringTag,{value:"Module"})),Ha=[{type:"patient_visit",id:1,logical_time:1,timestamp:"2026-08-07T09:00:00Z",payload:{patient_id:"P-1283",patient_name:"张三",age:68,department:"呼吸科",symptoms:["发热","咳嗽","乏力"],temperature:38.6,blood_pressure:"128/82"}},{type:"lab_result",id:2,logical_time:2,timestamp:"2026-08-07T09:15:00Z",payload:{patient_id:"P-1283",test_type:"血常规",white_blood_cell:12.5,neutrophil_ratio:.82,crp:45,result_flag:"abnormal"}},{type:"rule_triggered",id:3,logical_time:3,timestamp:"2026-08-07T09:16:00Z",rule_id:"R-DEMO-001",rule_name:"发热+感染指标告警",trigger:{temperature:38.6,white_blood_cell:12.5,crp:45},result:"warning",message:"体温≥38.5℃ 且白细胞>10 且 CRP>40,疑似细菌感染,建议抗生素治疗"},{type:"drug_prescribe",id:4,logical_time:4,timestamp:"2026-08-07T09:20:00Z",payload:{patient_id:"P-1283",drug_name:"头孢克洛",dosage:"0.25g",frequency:"每日 3 次",duration:"7 天",prescribed_by:"李医生"}},{type:"rule_triggered",id:5,logical_time:5,timestamp:"2026-08-07T09:21:00Z",rule_id:"r_drug_interaction",rule_name:"药物相互作用检查",trigger:{drug_name:"头孢克洛",patient_allergies:["青霉素"]},result:"allowed",message:"头孢克洛与患者无禁忌,青霉素过敏非交叉禁忌,可开具"},{type:"decision",id:6,logical_time:6,timestamp:"2026-08-07T09:22:00Z",payload:{patient_id:"P-1283",final_decision:"allowed",summary:"允许开具头孢克洛,3 天后复查血常规",precautions:"用药期间禁酒,出现皮疹立即停药"}}],aa=["a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2","b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3","c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4","d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5","e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6","f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1"],kr={entries:Ha.map((l,e)=>({fact_id:l.id,fact_type:l.type,logical_time:l.logical_time,prev_hash:e===0?"0000000000000000000000000000000000000000000000000000000000000000":aa[e-1],content_hash:aa[e]})),fact_count:6,verified:!0,last_hash:aa[5]},xr={verified:!0,detail:"BLAKE3 哈希链验证通过:6 条 Fact,链完整无篡改"},Er={chain:[{fact_id:3,fact_type:"rule_triggered",logical_time:3,cause:2,content_hash:aa[2],prev_hash:aa[1]},{fact_id:2,fact_type:"lab_result",logical_time:2,cause:1,content_hash:aa[1],prev_hash:aa[0]},{fact_id:1,fact_type:"patient_visit",logical_time:1,cause:null,content_hash:aa[0],prev_hash:"0000000000000000000000000000000000000000000000000000000000000000"}]},Sr={payload:{patient_id:"P-1283",current_status:"用药观察中",temperature:38.6,prescribed_drug:"头孢克洛"},queue:[],reactor:{phase:"stable",causal_depth:6,current_step:6,pending_io_count:0,structural_invariant_violations:0},version:6},Ar={payload:{patient_id:"P-1283",current_status:"等待检验结果",temperature:38.6},queue:[],version:3},Lr={items:[["current_status","等待检验结果","用药观察中"],["prescribed_drug",void 0,"头孢克洛"],["white_blood_cell",void 0,12.5]],removed:[]},Cr=Ha.map(l=>{const e=l.payload??{};return{fact_id:l.id,version:Number(l.logical_time),path:`patient.${e.patient_id??"unknown"}.${l.type}`,value:l.payload??l}}),Pr=[{type:"tool_call",id:101,logical_time:1,timestamp:"2026-08-07T10:00:00Z",payload:{tool_name:"transfer_money",category:"finance",amount:5e4,caller:"ai_agent_v2",auth_factors:["password"],auth_count:1}},{type:"gate_blocked",id:102,logical_time:2,timestamp:"2026-08-07T10:00:01Z",rule_id:"djbh.identity.mfa_required",rule_name:"管理类工具双因子认证门禁",trigger:{tool_category:"finance",auth_count:1},result:"blocked",message:"等保 §8.1.4.1.d:管理类操作必须双因子认证(当前仅 1 因子:password)",clause:"8.1.4.1.d",risk_level:"high"}],Va=[{type:"expense_submit",id:1,logical_time:1,timestamp:"2026-08-07T09:00:00Z",payload:{invoice_id:"INV-2024-0183",submitter:"王五",department:"市场部",category:"差旅费",amount:6800,currency:"CNY",description:"客户拜访差旅"}},{type:"rule_triggered",id:2,logical_time:2,timestamp:"2026-08-07T09:00:05Z",rule_id:"R-DEMO-F-001",rule_name:"报销上限校验",trigger:{category:"差旅费",amount:6800},result:"blocked",message:"差旅费报销上限 5000 元,当前 6800 元超标,需总监审批"},{type:"approval_request",id:3,logical_time:3,timestamp:"2026-08-07T09:00:10Z",payload:{invoice_id:"INV-2024-0183",approver:"赵总监",reason:"超额报销需总监审批",amount:6800,over_limit:1800}},{type:"rule_triggered",id:4,logical_time:4,timestamp:"2026-08-07T09:30:00Z",rule_id:"r_expense_split",rule_name:"超额拆分检测",trigger:{submitter:"王五",category:"差旅费",month:"2024-08"},result:"warning",message:"本月王五已有 2 笔差旅费报销,累计 9200 元,注意拆分报销风险"},{type:"approval_decision",id:5,logical_time:5,timestamp:"2026-08-07T10:00:00Z",payload:{invoice_id:"INV-2024-0183",approver:"赵总监",decision:"approved",condition:"附客户拜访证明后报销"}},{type:"decision",id:6,logical_time:6,timestamp:"2026-08-07T10:01:00Z",payload:{invoice_id:"INV-2024-0183",final_decision:"approved_with_condition",summary:"批准报销 6800 元,需附客户拜访证明",precautions:"下月差旅费预算已用 85%"}}],ba=["1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b","2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c","3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d","4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e","5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f","6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a"],$r={entries:Va.map((l,e)=>({fact_id:l.id,fact_type:l.type,logical_time:l.logical_time,prev_hash:e===0?"0000000000000000000000000000000000000000000000000000000000000000":ba[e-1],content_hash:ba[e]})),fact_count:6,verified:!0,last_hash:ba[5]},Ir={verified:!0,detail:"BLAKE3 哈希链验证通过:6 条 Fact,链完整无篡改"},Tr={chain:[{fact_id:2,fact_type:"rule_triggered",logical_time:2,cause:1,content_hash:ba[1],prev_hash:ba[0]},{fact_id:1,fact_type:"expense_submit",logical_time:1,cause:null,content_hash:ba[0],prev_hash:"0000000000000000000000000000000000000000000000000000000000000000"}]},Mr={payload:{invoice_id:"INV-2024-0183",current_status:"已批准(附条件)",amount:6800,approver:"赵总监"},queue:[],reactor:{phase:"stable",causal_depth:6,current_step:6,pending_io_count:0,structural_invariant_violations:0},version:6},qr={payload:{invoice_id:"INV-2024-0183",current_status:"已拦截(超额)",amount:6800},queue:[],version:2},Dr={items:[["current_status","已拦截(超额)","已批准(附条件)"],["approver",void 0,"赵总监"],["final_decision",void 0,"approved_with_condition"]],removed:[]},Rr=Va.map(l=>{const e=l.payload??{};return{fact_id:l.id,version:Number(l.logical_time),path:`invoice.${e.invoice_id??"unknown"}.${l.type}`,value:l.payload??l}}),jr=[{type:"tool_call",id:201,logical_time:1,timestamp:"2026-08-07T10:00:00Z",payload:{tool_name:"db_write",fields:{id_card:"310101199001011234"},caller:"ai_agent_v3",encryption:"none"}},{type:"gate_blocked",id:202,logical_time:2,timestamp:"2026-08-07T10:00:01Z",rule_id:"djbh.confidentiality.storage_encryption",rule_name:"敏感数据存储加密门禁",trigger:{field:"id_card",encryption:"none"},result:"blocked",message:"等保 §8.1.4.7.b:身份信息存储必须加密(当前 encryption=none)",clause:"8.1.4.7.b",risk_level:"high"}],Ga=[{type:"task_received",id:1,logical_time:1,timestamp:"2026-08-25T10:00:00Z",payload:{agent:"code-review",task:"审查并批准部署脚本 deploy.sh",requester:"ci-pipeline"}},{type:"analysis",id:2,logical_time:2,timestamp:"2026-08-25T10:00:01Z",payload:{script:"deploy.sh",line:14,detected_command:"rm -rf /tmp/build",risk_class:"destructive"}},{type:"rule_triggered",id:3,logical_time:3,timestamp:"2026-08-25T10:00:02Z",rule_id:"agent.auto_approve",rule_name:"AI 自动批准(无人工)",trigger:{command:"rm -rf /tmp/build"},result:"allowed",message:"agent 直接放行 rm -rf /tmp/build,未触发人工确认"},{type:"rule_triggered",id:4,logical_time:4,timestamp:"2026-08-25T10:00:03Z",rule_id:"guardrail.destructive_cmd",rule_name:"破坏性命令护栏",trigger:{command:"rm -rf /tmp/build"},result:"blocked",message:"确定性审计拦截:检测到破坏性命令,需人工审批"},{type:"decision",id:5,logical_time:5,timestamp:"2026-08-25T10:00:04Z",payload:{action:"rewind_and_fork",from_version:3,fix:"将自动放行改为转人工审批",mode:"human-approval-required"}},{type:"guardrail_activated",id:6,logical_time:6,timestamp:"2026-08-25T10:00:05Z",payload:{rule_id:"guard_shell_risky",status:"active",effect:"任何 rm -rf 开头命令 → 转人工审批",loaded_via:"bundle import + rules/reload (零停机热加载)"}}],ft=["k1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2","k2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3","k3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4","k4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5","k5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6","k6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7"],Nr={entries:Ga.map((l,e)=>({fact_id:l.id,fact_type:l.type,logical_time:l.logical_time,prev_hash:e===0?"0000000000000000000000000000000000000000000000000000000000000000":ft[e-1],content_hash:ft[e]})),fact_count:6,verified:!0,last_hash:ft[5]},Or={verified:!0,detail:"BLAKE3 哈希链验证通过:6 条 Fact,链完整无篡改;ed25519 签名锚点已校验"},Br={chain:[{fact_id:6,fact_type:"guardrail_activated",logical_time:6,cause:5,content_hash:ft[5],prev_hash:ft[4]},{fact_id:5,fact_type:"decision",logical_time:5,cause:4,content_hash:ft[4],prev_hash:ft[3]},{fact_id:4,fact_type:"rule_triggered",logical_time:4,cause:3,content_hash:ft[3],prev_hash:ft[2]},{fact_id:3,fact_type:"rule_triggered",logical_time:3,cause:2,content_hash:ft[2],prev_hash:ft[1]},{fact_id:2,fact_type:"analysis",logical_time:2,cause:1,content_hash:ft[1],prev_hash:ft[0]},{fact_id:1,fact_type:"task_received",logical_time:1,cause:null,content_hash:ft[0],prev_hash:"0000000000000000000000000000000000000000000000000000000000000000"}]},Fr={payload:{agent:"code-review",status:"已护栏化(稳定)",enforced_guardrail:"guard_shell_risky"},queue:[],reactor:{phase:"stable",causal_depth:6,current_step:6,pending_io_count:0,structural_invariant_violations:0},version:6},Ur={payload:{agent:"code-review",status:"AI 自动放行(危险步骤)",command:"rm -rf /tmp/build",risk:"high"},queue:[],version:3},Kr={items:[["decision.mode","auto-approved (no human)","human-approval-required"],["decision.command","rm -rf /tmp/build","rm -rf /tmp/build (routed to approval)"],["guardrail.active","guard_shell_risky"]],removed:[]},Hr=Ga.map(l=>{const e=l.payload??{};return{fact_id:l.id,version:Number(l.logical_time),path:`agent.${e.agent??"unknown"}.${l.type}`,value:l.payload??l}}),Vr=[],lt=class lt{constructor(){Rt(this,"sessions",new Map);Rt(this,"nextSessionId",6);Rt(this,"autoVerifyBySession",new Map);Rt(this,"permissionEntries",lt.PERMISSIONS_DEMO_SEED.map(e=>structuredClone(e)));Rt(this,"permissionVersion",9);const e=new Date().toISOString();this.sessions.set(1,{id:1,dataset:"medical",isCompliance:!1,createdAt:e}),this.sessions.set(2,{id:2,dataset:"finance",isCompliance:!1,createdAt:e}),this.sessions.set(3,{id:3,dataset:"medical",isCompliance:!0,createdAt:e}),this.sessions.set(4,{id:4,dataset:"finance",isCompliance:!0,createdAt:e}),this.sessions.set(5,{id:5,dataset:"agent",isCompliance:!1,createdAt:e})}currentDataset(){return dt(yn)}factsForDataset(e,n){return n?e==="medical"?Pr:e==="finance"?jr:Vr:e==="medical"?Ha:e==="finance"?Va:Ga}getFactsForSession(e){const n=this.sessions.get(e);return n?this.factsForDataset(n.dataset,n.isCompliance):[]}getAuditForSession(e){const n=this.sessions.get(e);return n?n.dataset==="medical"?kr:n.dataset==="finance"?$r:Nr:{entries:[],fact_count:0,verified:!1}}sessionStateForDataset(e){return e==="medical"?Sr:e==="finance"?Mr:Fr}historicalStateForDataset(e){return e==="medical"?Ar:e==="finance"?qr:Ur}factRecordsForDataset(e){return e==="medical"?Cr:e==="finance"?Rr:Hr}verifyForDataset(e){return e==="medical"?xr:e==="finance"?Ir:Or}causalChainForDataset(e){return e==="medical"?Er:e==="finance"?Tr:Br}diffForDataset(e){return e==="medical"?Lr:e==="finance"?Dr:Kr}requireState(e){const n=this.sessions.get(e);if(!n)throw new Error(`MockBackend: session ${e} 不存在`);return this.sessionStateForDataset(n.dataset)}requireSession(e){const n=this.sessions.get(e);if(!n)throw new Error(`MockBackend: session ${e} 不存在`);return n}async health(e){return!0}async createSession(){const e=this.nextSessionId++,n=this.currentDataset();return this.sessions.set(e,{id:e,dataset:n,isCompliance:!1,createdAt:new Date().toISOString()}),e}async listSessions(){return Array.from(this.sessions.keys()).sort((e,n)=>e-n)}async closeSession(e){this.sessions.delete(e)}async getSessionState(e){const n=this.sessions.get(e);if(!n)throw new Error(`MockBackend: session ${e} 不存在`);return this.sessionStateForDataset(n.dataset)}async submitCommand(e,n){return{accepted:!0,version:6}}async getHistory(e){const n=this.getFactsForSession(e);return{session_id:e,fact_count:n.length,facts:n}}async getReplay(e,n,i){let p=this.getFactsForSession(e);return n!==void 0&&(p=p.filter(v=>Number(v.logical_time??0)>=n)),i!=null&&(p=p.filter(v=>Number(v.logical_time??0)<=i)),p}async getFacts(e,n){const i=this.sessions.get(e);if(!i)return[];let p=this.factRecordsForDataset(i.dataset);return n&&(p=p.filter(v=>v.path.startsWith(n))),p}async getAudit(e){return this.getAuditForSession(e)}async verifyAudit(e){const n=this.sessions.get(e);return n?this.verifyForDataset(n.dataset):{verified:!1,detail:"session 不存在"}}async getCausalChain(e,n){const i=this.sessions.get(e);return i?this.causalChainForDataset(i.dataset):{chain:[]}}async getStateAtVersion(e,n){const i=this.sessions.get(e);if(!i)throw new Error(`MockBackend: session ${e} 不存在`);return this.historicalStateForDataset(i.dataset)}async getDiff(e,n,i){const p=this.sessions.get(e);return p?this.diffForDataset(p.dataset):{items:[],removed:[]}}async forkSession(e,n){const i=this.sessions.get(e),p=this.nextSessionId++;return this.sessions.set(p,{id:p,dataset:(i==null?void 0:i.dataset)??this.currentDataset(),isCompliance:(i==null?void 0:i.isCompliance)??!1,createdAt:new Date().toISOString()}),p}async interruptSession(e){if(!this.sessions.has(e))throw new Error(`MockBackend: session ${e} 不存在`);return{session_id:e,success:!0,message:"Interrupt requested, reactor will respond at next checkpoint"}}async abortSession(e){if(!this.sessions.has(e))throw new Error(`MockBackend: session ${e} 不存在`);return{session_id:e,success:!0,message:"Session aborted"}}async exportAudit(e){if(!this.sessions.get(e))throw new Error(`MockBackend: session ${e} 不存在`);const i=this.getAuditForSession(e);return{session_id:e,fact_count:i.fact_count,verified:i.verified,last_hash:i.last_hash??null,entries:i.entries}}async exportAuditCompressed(e){const n=await this.exportAudit(e);if(typeof CompressionStream>"u")throw new Error("MockBackend: 当前环境无 CompressionStream,压缩导出未实现(请用 JSON 导出)");const i=new Blob([JSON.stringify(n)]).stream().pipeThrough(new CompressionStream("gzip"));return await new Response(i).blob()}async getAutoVerify(e){if(!this.sessions.has(e))throw new Error(`MockBackend: session ${e} 不存在`);return{session_id:e,auto_verify:this.autoVerifyBySession.get(e)??!1}}async setAutoVerify(e,n,i,p){if(!this.sessions.has(e))throw new Error(`MockBackend: session ${e} 不存在`);return this.autoVerifyBySession.set(e,n),{session_id:e,success:!0,auto_verify:n,threshold:i??0,interval:p===void 0?1:Math.max(1,p),message:`Auto-verify ${n?"enabled":"disabled"}`}}async getStep(e){return{session_id:e,current_step:this.requireState(e).reactor.current_step}}async getSessionSnapshot(e){const n=this.requireState(e);return{session_id:e,finished:!1,phase:n.reactor.phase,version:n.version,steps:n.reactor.current_step,pending_io_count:n.reactor.pending_io_count,structural_invariant_violations:n.reactor.structural_invariant_violations}}async getDebugPhase(e){return{session_id:e,phase:this.requireState(e).reactor.phase}}async getDebugQueue(e){return this.requireState(e),{session_id:e,queue:[]}}async getDebugPendingIo(e){const n=this.requireState(e);return{session_id:e,pending_io_count:n.reactor.pending_io_count,pending_io:[]}}async getPendingIoCount(e){return{session_id:e,pending_io_count:this.requireState(e).reactor.pending_io_count}}async getCausalDepth(e){return{session_id:e,causal_depth:this.requireState(e).reactor.causal_depth}}async importAudit(e,n){return this.requireSession(e),{session_id:e,imported:!0,verify_ok:!0,status:"ok"}}async importAuditCompressed(e,n){return this.requireSession(e),{session_id:e,imported:!0,verify_ok:!0,status:"ok"}}async createSessionFrom(e,n){const i=this.requireSession(e),p=this.nextSessionId++;return this.sessions.set(p,{id:p,dataset:i.dataset,isCompliance:i.isCompliance,createdAt:new Date().toISOString()}),p}async reapSessions(){return{finished:0,expired:0,total:0}}async updatePayload(e,n,i){return this.requireSession(e),{success:!0,message:"PayloadUpdate submitted (mock)",fact_id:null}}async getSharedFacts(e){const n=lt.SHARED_FACTS_DEMO;return e?n.filter(i=>i.path.startsWith(e)):[...n]}async getSharedFactsVersion(){return{version:lt.SHARED_FACTS_VERSION,history_len:lt.SHARED_FACTS_DEMO.length}}async listPermissions(){return{success:!0,version:this.permissionVersion,count:this.permissionEntries.length,entries:this.permissionEntries.map(e=>structuredClone(e))}}async getPermission(e){const n=this.permissionEntries.find(i=>i.id===e);if(!n)throw new Error(`permission entry not found: ${e}`);return structuredClone(n)}async createPermission(e){if(!e.id.trim())throw new Error("permission id must not be empty");if(this.permissionEntries.some(i=>i.id===e.id))throw new Error(`duplicate permission id: ${e.id}`);const n={...structuredClone(e),state:"draft",version:0};return this.permissionEntries.push(n),this.permissionVersion+=1,{success:!0,id:n.id,state:"draft",version:this.permissionVersion}}async updatePermission(e,n){if(n.id!==e)throw new Error("path id and body id mismatch");const i=this.permissionEntries.findIndex(v=>v.id===e),p={...structuredClone(n),version:0};return i>=0?(p.state=this.permissionEntries[i].state,this.permissionEntries[i]=p):this.permissionEntries.push(p),this.permissionVersion+=1,{success:!0,id:e,version:this.permissionVersion}}async deletePermission(e){const n=this.permissionEntries.findIndex(i=>i.id===e);if(n<0)throw new Error(`permission entry not found: ${e}`);return this.permissionEntries.splice(n,1),this.permissionVersion+=1,{success:!0,id:e}}async submitPermission(e){const n=this.permissionEntries.find(i=>i.id===e);if(!n)throw new Error(`permission entry not found: ${e}`);if(n.state!=="draft")throw new Error(`only Draft can be submitted, current = ${n.state}`);return n.state="candidate",this.permissionVersion+=1,{success:!0,id:e,state:"candidate",version:this.permissionVersion}}async reviewPermission(e,n){const i=this.permissionEntries.find(p=>p.id===e);if(!i)throw new Error(`permission entry not found: ${e}`);if(i.state!=="candidate")throw new Error(`only Candidate can be reviewed, current = ${i.state}`);return i.state=n?"active":"rejected",this.permissionVersion+=1,{success:!0,id:e,state:i.state,version:this.permissionVersion}}async getPermissionsVersion(){return{success:!0,version:this.permissionVersion,count:this.permissionEntries.length}}async evaluatePermission(e){const n=e.caller_role??"unknown",i=e.action??"*";let p=!1,v=!1;for(const x of this.permissionEntries){const L=x.subject.subject_type==="any"||x.subject.id===n,y=x.action==="*"||x.action===i,b=x.resource.path,N=b!==""&&(b.endsWith("*")?e.resource.startsWith(b.slice(0,-1)):b===e.resource);if(!(!L||!y||!N)){if(x.state==="candidate"){p=!0;continue}if(x.state==="active"){if(x.effect==="deny")return this.mockEvaluateResult(e,n,i,"deny");v=!0}}}if(v)return this.mockEvaluateResult(e,n,i,"allow");if(p)return this.mockEvaluateResult(e,n,i,"candidate");const c=n==="human"?"allow":"deny";return this.mockEvaluateResult(e,n,i,c)}mockEvaluateResult(e,n,i,p){return{success:!0,caller_role:n,resource:e.resource,action:i,v_trigger:e.v_trigger??this.permissionVersion,verdict:p}}knowledgeFilter(e,n){var v;const i=((v=n==null?void 0:n.q)==null?void 0:v.trim().toLowerCase())??"",p=((n==null?void 0:n.tags)??"").split(",").map(c=>c.trim()).filter(c=>c.length>0);return lt.KNOWLEDGE_DEMO.filter(c=>!(c.dataset_id!==e||n!=null&&n.domain&&c.domain!==n.domain||p.length>0&&!p.some(x=>c.tags.includes(x))||i.length>0&&!`${c.entry_id} ${JSON.stringify(c.payload)}`.toLowerCase().includes(i)))}async listKnowledgeDatasets(){const e=[...new Set(lt.KNOWLEDGE_DEMO.map(n=>n.dataset_id))].map(n=>{const i=lt.KNOWLEDGE_DEMO.filter(p=>p.dataset_id===n);return{dataset_id:n,bundle_ids:[...new Set(i.map(p=>p.bundle_id))],entry_count:i.length,schema_refs:[...new Set(i.map(p=>p.schema_ref).filter(p=>!!p))]}});return{datasets:e,count:e.length}}async listKnowledgeEntries(e,n){if(!lt.KNOWLEDGE_DEMO.some(i=>i.dataset_id===e))throw new Error(`knowledge dataset not found: ${e}`);return this.knowledgeFilter(e,n)}async getKnowledgeEntry(e,n){const i=lt.KNOWLEDGE_DEMO.find(p=>p.dataset_id===e&&p.entry_id===n);if(!i)throw new Error(`knowledge entry not found: ${e}/${n}`);return i}async getProductionState(){const e=this.currentDataset();return{currentSessionId:e==="medical"?1:e==="finance"?2:5,rulesetVersion:6,rulesetHash:e==="medical"?"f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1":e==="finance"?"6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a2b3c4d5e6f1a":"k6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7",status:"running",updatedAt:new Date().toISOString()}}async getPublishQueue(){return[]}async reviewPublishRequest(e,n,i){return{ok:!0}}async emergencyRollbackRequest(e,n){return{ok:!0}}async getProductionAudit(){return[]}};Rt(lt,"SHARED_FACTS_DEMO",[{fact_id:9101,path:"shared.platform.last_login.username",value:"demo-user",source_session_id:1,version:3},{fact_id:9102,path:"shared.platform.last_login.ts_ms",value:17599712e5,source_session_id:1,version:3},{fact_id:9103,path:"shared.tenant.quota.remaining",value:42,source_session_id:2,version:6}]),Rt(lt,"SHARED_FACTS_VERSION",9),Rt(lt,"PERMISSIONS_DEMO_SEED",[{id:"demo-allow-shared-read",version:2,state:"active",subject:{subject_type:"any",id:""},resource:{resource_type:"shared",path:"shared.platform.*"},action:"*",effect:"allow",scope:{},updated_by:"demo-admin"},{id:"demo-deny-llm-write",version:3,state:"active",subject:{subject_type:"user",id:"llm"},resource:{resource_type:"fact",path:"db.users.*"},action:"write",effect:"deny",scope:{},updated_by:"demo-admin"},{id:"demo-candidate-api-export",version:1,state:"candidate",subject:{subject_type:"role",id:"human"},resource:{resource_type:"api",path:"/api/audit/export"},action:"*",effect:"allow",scope:{},updated_by:"demo-auditor"}]),Rt(lt,"KNOWLEDGE_DEMO",[{dataset_id:"medical_guidelines",entry_id:"triage_level_definition",payload:{title:"分诊级别定义",levels:["一级(濒危)","二级(危重)","三级(急症)","四级(非急症)"],source:"急诊预检分诊专家共识"},schema_ref:"https://evorule.dev/schemas/medical/triage-level.json",bundle_id:"demo-bundle-medical-001",source_version:"2.1.0",domain:"medical",tags:["分诊","急诊"]},{dataset_id:"medical_guidelines",entry_id:"djbh_threshold",payload:{title:"等级保护阈值",critical_asset_availability:.9999,audit_retention_months:6},schema_ref:"https://evorule.dev/schemas/medical/djbh-threshold.json",bundle_id:"demo-bundle-medical-001",source_version:"2.1.0",domain:"medical",tags:["等保","合规"]},{dataset_id:"medical_guidelines",entry_id:"antibiotic_stewardship",payload:{title:"抗菌药物分级管理",classes:["非限制使用级","限制使用级","特殊使用级"]},schema_ref:null,bundle_id:"demo-bundle-medical-002",source_version:"1.4.2",domain:"medical",tags:["用药"]},{dataset_id:"finance_limits",entry_id:"single_payment_limit",payload:{title:"单笔支付限额",retail:5e4,corporate:5e6,currency:"CNY"},schema_ref:"https://evorule.dev/schemas/finance/payment-limit.json",bundle_id:"demo-bundle-finance-001",source_version:"3.0.1",domain:"finance",tags:["支付","限额"]}]);let Fa=lt;class sa extends Error{constructor(e,n,i){super(e),this.kind=n,this.status=i,this.name="LlmError"}}class rs extends sa{constructor(e){super(e,"network",0),this.name="LlmNetworkError"}}class Gr extends sa{constructor(e){super(e,"auth",401),this.name="LlmAuthError"}}class Wr extends sa{constructor(e){super(e,"rate_limit",429),this.name="LlmRateLimitError"}}class ja extends sa{constructor(e,n){super(e,"api",n),this.name="LlmApiError"}}class Xr extends sa{constructor(e){super(e,"parse",200),this.name="LlmParseError"}}class Jr extends sa{constructor(e){super(e,"response",200),this.name="LlmResponseError"}}function Wa(l){const e=[];if(l.systemMessage&&e.push({role:"system",content:l.systemMessage}),l.history&&l.history.length>0)for(const n of l.history)e.push({role:n.role,content:n.content});return e.push({role:"user",content:l.userMessage}),e}async function As(l){var S,q;const{apiEndpoint:e,apiKey:n,model:i,userMessage:p,systemMessage:v,history:c,temperature:x=.2,timeoutMs:L=3e4}=l,y=Wa({userMessage:p,systemMessage:v,history:c}),b=JSON.stringify({model:i,messages:y,temperature:x,stream:!1}),N=new AbortController,M=setTimeout(()=>N.abort(),L);let O;try{O=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:b,signal:N.signal})}catch(R){if(clearTimeout(M),R.name==="AbortError")throw new rs(`LLM 请求超时(${L}ms)`);const w=zr(e);throw new rs(`无法连接 LLM 服务(网络错误)${w?`,端点 ${w}`:""}。请检查网络连接与 apiEndpoint 地址`)}if(clearTimeout(M),!O.ok){const R=await O.text().catch(()=>""),re=Zr(R),w=Na(re||R,n).slice(0,300);throw O.status===401?new Gr("LLM 鉴权失败(401): apiKey 无效或已失效"):O.status===429?new Wr("LLM 限流(429): 请求过于频繁,请稍后重试"):new ja(`LLM API 错误(${O.status}): ${w||"无响应体"}`,O.status)}let te;try{te=await O.json()}catch(R){throw new Xr(`LLM 响应 JSON 解析失败: ${R.message}`)}const B=te;if(B&&B.error!==void 0){const R=Ls(B.error);throw new ja(`LLM 返回错误: ${Na(R,n).slice(0,300)}`,O.status)}const P=B==null?void 0:B.base_resp;if(P&&typeof P=="object"&&typeof P.status_code=="number"&&P.status_code!==0){const R=typeof P.status_msg=="string"&&P.status_msg.length>0?P.status_msg:"未知错误(厂商未返回 status_msg)";throw new ja(`LLM 返回错误(MiniMax status_code=${P.status_code}): ${Na(R,n).slice(0,300)}`,O.status)}if(!B||!Array.isArray(B.choices)||B.choices.length===0||!((q=(S=B.choices[0])==null?void 0:S.message)!=null&&q.content))throw new Jr("LLM 响应结构异常: 无 choices[0].message.content");return B.choices[0].message.content}function Na(l,e){if(!e||e.length===0)return l;const n=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return l.replace(new RegExp(n,"g"),"***REDACTED***")}function zr(l){try{return new URL(l).host}catch{return""}}function Zr(l){if(!l)return"";try{const e=JSON.parse(l);return e.error!==void 0?Ls(e.error):typeof e.message=="string"?e.message:typeof e.msg=="string"?e.msg:""}catch{return""}}function Ls(l){if(typeof l=="string")return l;if(l&&typeof l=="object"){const e=l;if(typeof e.message=="string")return e.message;if(typeof e.msg=="string")return e.msg;try{return JSON.stringify(l)}catch{return String(l)}}return String(l)}const Yr=9e4;class Ze extends Error{constructor(e,n,i){super(e),this.kind=n,this.sessionId=i,this.name="AuditedBridgeError"}}async function Sa(l,e,n,i){const p=new AbortController,v=setTimeout(()=>p.abort(),n),c=e.signal,x=()=>p.abort();c&&(c.aborted?p.abort():c.addEventListener("abort",x));try{return await fetch(l,{...e,signal:p.signal})}catch(L){throw L.name==="AbortError"?new Ze(c!=null&&c.aborted?`审计桥 ${i} 被调用方中止`:`审计桥超时(${i},${n}ms)`,"protocol"):new Ze(`无法连接 evorule-server(审计桥 ${i}),请确认服务已启动:${l}`,"server_unreachable")}finally{clearTimeout(v)}}async function Oa(l,e,n){if(l.ok)return;let i="";try{i=(await l.text()).slice(0,200)}catch{}throw new Ze(`evorule-server ${e} 失败(HTTP ${l.status})${i?`: ${i}`:""}`,"protocol",n)}function Cs(){const l=dt(va);return(l.mode==="online"?l.remoteBaseUrl:da).replace(/\/+$/,"")}function Ps(){const l=dt(va),e={"Content-Type":"application/json"};return l.authToken&&(e.Authorization=`Bearer ${l.authToken}`),e}async function Xa(l){const{auditPurpose:e,...n}=l,i=Cs(),p=Ps(),v=Yr;let c="";try{const y=await Sa(`${i}/api/sessions`,{method:"POST",headers:p,body:"{}"},v,"create_session"),b=await y.json().catch(()=>null);if(!y.ok||!b||typeof b.session_id!="number")throw c=b&&typeof b.session_id=="number"?String(b.session_id):"",new Ze(`evorule-server create_session 失败(HTTP ${y.status})`,"protocol");c=String(b.session_id)}catch(y){throw y instanceof Ze?y:new Ze(`无法连接 evorule-server(审计桥 create_session),请确认服务已启动:${i}`,"server_unreachable")}const x=new AbortController;try{const y=await Sa(`${i}/api/sessions/${c}/events`,{headers:p,signal:x.signal},v,"subscribe_events");if(await Oa(y,"subscribe_events",c),!y.body)throw new Ze("SSE 响应无 body(协议异常)","protocol",c);const b=y.body.getReader(),N={model:n.model,temperature:n.temperature??.2,messages:Wa({userMessage:n.userMessage,systemMessage:n.systemMessage,history:n.history}),audit_purpose:e},M=await Sa(`${i}/api/sessions/${c}/command`,{method:"POST",headers:p,body:JSON.stringify({instruction:{type:"call_external",params:N}})},v,"submit_command");await Oa(M,"submit_command",c);let O=null,te="";const B=new TextDecoder;async function P(){for(;;){const q=te.indexOf(`

`);if(q!==-1){const re=te.slice(0,q);te=te.slice(q+2);const w=re.split(`
`).find(Q=>Q.startsWith("data:"));if(!w)continue;const X=w.slice(5).trim();if(!X)continue;try{return JSON.parse(X)}catch{throw new Ze(`SSE 事件 JSON 解析失败:${X.slice(0,100)}`,"protocol",c)}}const R=await S(b.read());if(R.done)return null;te+=B.decode(R.value,{stream:!0})}}async function S(q){q.catch(()=>{});let R;try{return await Promise.race([q,new Promise((re,w)=>{R=setTimeout(()=>w(new Ze(`审计桥等待 SSE 事件超时(${v}ms)`,"protocol",c)),v)})])}finally{R!==void 0&&clearTimeout(R)}}for(;;){const q=await P();if(q===null)throw new Ze("SSE 流在 Stable 前关闭(审计回路未完成)","protocol",c);const R=typeof q.type=="string"?q.type:"";if(R==="IoRequest"){const re=q.id;if(typeof re!="number")throw new Ze("IoRequest 事件缺少 id","protocol",c);try{const w=await As(n);O=w,await L(re,{content:w},null)}catch(w){const X=w.message;throw await L(re,{error:X},X).catch(()=>{console.error("[audited-llm] io_response 回写失败(LLM 错误原样上抛)")}),w}}else if(R==="Stable"){if(O===null)throw new Ze("Stable 到达但未执行 LLM(审计回路异常)","protocol",c);return O}else if(R==="Error"){const re=typeof q.message=="string"?q.message:"evorule 引擎报 Error 事件";throw new Ze(`evorule 引擎错误: ${re}`,"engine",c)}}}finally{x.abort(),Qr(i,p,c)}async function L(y,b,N){const M=await Sa(`${i}/api/sessions/${c}/io_response`,{method:"POST",headers:p,body:JSON.stringify({request_id:y,result:b,error:N})},v,"submit_io_response");await Oa(M,"submit_io_response",c)}}async function Qr(l,e,n){if(n)try{await fetch(`${l}/api/sessions/${n}`,{method:"DELETE",headers:e,signal:AbortSignal.timeout(5e3),keepalive:!0})}catch{}}const eo=12e4;async function os(l){var N;const{auditPurpose:e,apiEndpoint:n,apiKey:i,...p}=l,v=Cs(),c=Ps(),x={messages:Wa({userMessage:p.userMessage,systemMessage:p.systemMessage,history:p.history}),...(N=p.model)!=null&&N.trim()?{model:p.model.trim()}:{},temperature:p.temperature??.2,audit_purpose:e};let L;try{L=await fetch(`${v}/api/services/ai_plugin_chat/invoke`,{method:"POST",headers:c,body:JSON.stringify(x),signal:AbortSignal.timeout(eo)})}catch{throw new Ze(`无法连接 evorule-server(server 通道 invoke),请确认服务已启动:${v}`,"server_unreachable")}if(!L.ok){let M="";try{M=(await L.text()).slice(0,200)}catch{}throw new Ze(`server 通道 invoke 失败(HTTP ${L.status})${M?`: ${M}`:""}`,"protocol")}let y=null;try{y=await L.json()}catch{y=null}if(typeof y=="string")try{y=JSON.parse(y)}catch{y=null}const b=y;if(!b||typeof b.reply!="string")throw new Ze("server 通道响应结构异常: 无 reply 字段(协议失败,无静默兜底)","protocol");return b.reply}class $s{constructor(e){Rt(this,"snapshot");e&&(this.snapshot={...e})}get config(){return this.snapshot??dt(pa)}isConfigured(){const e=this.config;return e.channel==="server"?e.enabled:e.enabled&&e.apiEndpoint.trim().length>0&&e.apiKey.trim().length>0&&e.model.trim().length>0}async testConnection(){if(!this.isConfigured())return{ok:!1,message:this.config.channel==="server"?"配置不完备: 请启用 LLM(server 通道凭据由 ai-plugin 服务端配置)":"配置不完备: 请填写 apiEndpoint + apiKey + model 并启用"};const e=this.config;if(e.channel==="server")try{return{ok:!0,message:`连接成功(server 通道经 ai-plugin,回复 ${(await os({userMessage:"ping",temperature:0,auditPurpose:"chat",apiEndpoint:"",apiKey:"",model:e.model})).length} 字符)`}}catch(n){const i=n instanceof Ze&&n.kind==="server_unreachable";return{ok:!1,message:`连接失败: ${n.message}`,serverUnreachable:i}}try{const n=await As({apiEndpoint:e.apiEndpoint,apiKey:e.apiKey,model:e.model,userMessage:Fn(),temperature:0,timeoutMs:1e4});return{ok:!0,message:`连接成功(model=${e.model},回复 ${n.length} 字符)`}}catch(n){return{ok:!1,message:`连接失败: ${n.message}`}}}auditedChat(e){const n=this.config;return n.enabled?n.channel==="server"?os({apiEndpoint:"",apiKey:"",model:n.model.trim(),...e}):!n.apiEndpoint.trim()||!n.apiKey.trim()||!n.model.trim()?Promise.reject(new sa("LLM 未配置或已停用:请到 设置 → LLM 配置 完成配置后再试","api")):Xa({apiEndpoint:n.apiEndpoint,apiKey:n.apiKey,model:n.model,...e}):Promise.reject(new sa("LLM 未配置或已停用:请到 设置 → LLM 配置 完成配置后再试","api"))}async generateRuleDraft(e){const n=Hn(e),i=await this.auditedChat({userMessage:n,temperature:.2,auditPurpose:"draft_rule"}),p=Aa(i);let v;try{v=JSON.parse(p)}catch(x){return{rule:{_error:"LLM 草案 JSON 解析失败,请人工修改",_raw:i.slice(0,500),_parseError:x.message},confidence:0}}const c=Bn.validate(p);return c.valid?{rule:v,confidence:.7}:{rule:{...v,_validationErrors:c.errors},confidence:.3}}async explainRule(e){const n=typeof e=="string"?e:JSON.stringify(e,null,2),i=Vn(n);return(await this.auditedChat({userMessage:i,temperature:.3,auditPurpose:"explain_rule"})).trim()}async generateInput(e){const n=Gn(e),i=await this.auditedChat({userMessage:n,temperature:.2,auditPurpose:"gen_tests"}),p=Aa(i);try{return JSON.parse(p)}catch(v){return{_error:"LLM 测试输入 JSON 解析失败,请人工修改",_raw:i.slice(0,500),_parseError:v.message}}}async transpileCommand(e){const n=Wn(e),i=await this.auditedChat({userMessage:n,temperature:.1,auditPurpose:"transpile_command"}),p=Aa(i);try{return JSON.parse(p)}catch(v){return{_error:"LLM 命令草稿 JSON 解析失败,请人工修改",_raw:i.slice(0,500),_parseError:v.message}}}async transpileFlow(e,n,i){const p=Array.isArray(i)&&i.length>0,v=p?Un(e,n):Kn(e,n),c=await this.auditedChat({userMessage:v,...p?{history:i}:{},temperature:.1,auditPurpose:"transpile_flow"}),x=Aa(c);try{return JSON.parse(x)}catch(L){return{_error:"LLM 流程草稿 JSON 解析失败,请人工修改",_raw:c.slice(0,500),_parseError:L.message}}}}function Aa(l){const e=l.trim(),n=e.match(/```json\s*([\s\S]*?)```/);if(n)return n[1].trim();const i=e.match(/```\s*([\s\S]*?)```/);if(i)return i[1].trim();const p=e.indexOf("{"),v=e.lastIndexOf("}"),c=e.indexOf("["),x=e.lastIndexOf("]"),L=p!==-1&&v!==-1&&v>p,y=c!==-1&&x!==-1&&x>c;return L&&(!y||p<c)?e.slice(p,v+1):y?e.slice(c,x+1):e}const Is=[{provider:"glm",label:"智谱 GLM(推荐,有免费额度)",apiEndpoint:"https://open.bigmodel.cn/api/paas/v4/chat/completions",defaultModel:"glm-4-flash",models:["glm-4-flash","glm-4","glm-4-air","glm-4-long"],helpUrl:"https://open.bigmodel.cn/usercenter/apikeys"},{provider:"qwen",label:"通义千问(阿里云)",apiEndpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",defaultModel:"qwen-plus",models:["qwen-plus","qwen-turbo","qwen-max","qwen-long"],helpUrl:"https://dashscope.console.aliyun.com/apiKey"},{provider:"deepseek",label:"DeepSeek(性价比高)",apiEndpoint:"https://api.deepseek.com/v1/chat/completions",defaultModel:"deepseek-chat",models:["deepseek-chat","deepseek-reasoner"],helpUrl:"https://platform.deepseek.com/api_keys"},{provider:"minimax",label:"MiniMax(海螺AI)",apiEndpoint:"https://api.minimax.cn/v1/chat/completions",defaultModel:"MiniMax-Text-01",models:["MiniMax-Text-01","MiniMax-M2.5"],helpUrl:"https://platform.minimaxi.com/user-center/basic-information/interface-key"},{provider:"kimi",label:"Kimi(Moonshot)",apiEndpoint:"https://api.moonshot.cn/v1/chat/completions",defaultModel:"kimi-k2-0905-preview",models:["kimi-k2-0905-preview","moonshot-v1-8k","moonshot-v1-32k","moonshot-v1-128k"],helpUrl:"https://platform.moonshot.cn/console/api-keys"},{provider:"openai",label:"OpenAI(国际标准,需代理)",apiEndpoint:"https://api.openai.com/v1/chat/completions",defaultModel:"gpt-4o-mini",models:["gpt-4o-mini","gpt-4o","gpt-4-turbo","gpt-3.5-turbo"],helpUrl:"https://platform.openai.com/api-keys"},{provider:"ollama",label:"Ollama(本机,无需联网/Key)",apiEndpoint:"http://127.0.0.1:11434/v1/chat/completions",defaultModel:"qwen3:8b",models:["qwen3:8b","qwen3:4b","deepseek-r1:8b","llama3.1:8b","glm4:9b"],helpUrl:"https://ollama.com/download",presetApiKey:"ollama"},{provider:"ernie",label:"文心一言(百度,暂不兼容,待适配)",apiEndpoint:"",defaultModel:"",models:[],needsAdapter:!0,adapterNote:"文心一言原生 API 与 OpenAI 协议有差异,大众版 v0.1.0 暂不支持。后续版本会增加适配层。"},{provider:"custom",label:"自定义(填 endpoint)",apiEndpoint:"",defaultModel:"",models:[]}];function is(l){return Is.find(e=>e.provider===l)}function to(){return Is.map(l=>({value:l.provider,label:l.label,disabled:l.needsAdapter===!0}))}const ao="ai-plugin";function so(l){if(typeof l!="object"||l===null)return{state:"unknown"};const e=l.plugins;if(typeof e!="object"||e===null)return{state:"unknown"};const n=e[ao];if(n===void 0)return{state:"disabled"};if(typeof n!="object"||n===null)return{state:"unknown"};const i=n;if(i.enabled!==!0)return{state:"disabled"};const p=typeof i.status=="string"?i.status:void 0;return p==="online"?{state:"ready"}:p==="no_probe"?{state:"no_probe"}:{state:"unreachable",lastError:typeof i.last_error=="string"&&i.last_error.length>0?i.last_error:void 0}}async function no(l,e,n){try{const i={};e&&e.trim().length>0&&(i.Authorization=`Bearer ${e.trim()}`);const p=await fetch(`${l.replace(/\/+$/,"")}/api/health`,{headers:i,signal:n});return p.ok?so(await p.json()):{state:"unknown"}}catch{return{state:"unknown"}}}var ro=h('<p class="aa-state checking svelte-1a2dwij"> </p>'),oo=h('<div class="aa-state ready svelte-1a2dwij"><p class="aa-title svelte-1a2dwij"> </p> <p class="aa-desc svelte-1a2dwij"> </p></div>'),io=h('<p class="aa-error svelte-1a2dwij"> </p>'),lo=h('<div class="aa-state warn svelte-1a2dwij"><p class="aa-title svelte-1a2dwij"> </p> <p class="aa-desc svelte-1a2dwij"> </p> <pre class="aa-snippet svelte-1a2dwij"><code> </code></pre> <button type="button" class="aa-copy svelte-1a2dwij"> </button> <!> <p class="aa-note svelte-1a2dwij"> </p></div>'),co=h('<div class="aa-state warn svelte-1a2dwij"><p class="aa-title svelte-1a2dwij"> </p> <p class="aa-desc svelte-1a2dwij"> </p></div>'),uo=h('<div class="aa-state disabled svelte-1a2dwij"><p class="aa-title svelte-1a2dwij"> </p> <p class="aa-desc svelte-1a2dwij"> </p> <div class="aa-step svelte-1a2dwij"><p class="aa-step-title svelte-1a2dwij"> </p> <p class="aa-desc svelte-1a2dwij"> </p> <pre class="aa-snippet svelte-1a2dwij"><code></code></pre> <button type="button" class="aa-copy svelte-1a2dwij"> </button></div> <div class="aa-step svelte-1a2dwij"><p class="aa-step-title svelte-1a2dwij"> </p> <p class="aa-desc svelte-1a2dwij"> </p> <pre class="aa-snippet svelte-1a2dwij"><code> </code></pre> <button type="button" class="aa-copy svelte-1a2dwij"> </button> <pre class="aa-snippet svelte-1a2dwij"><code></code></pre> <button type="button" class="aa-copy svelte-1a2dwij"> </button></div> <div class="aa-step svelte-1a2dwij"><p class="aa-step-title svelte-1a2dwij"> </p> <p class="aa-desc svelte-1a2dwij"> </p> <pre class="aa-snippet svelte-1a2dwij"><code> </code></pre> <button type="button" class="aa-copy svelte-1a2dwij"> </button></div> <p class="aa-note svelte-1a2dwij"> </p></div>'),vo=h('<div class="aa-state unknown svelte-1a2dwij"><p class="aa-title svelte-1a2dwij"> </p> <p class="aa-desc svelte-1a2dwij"> </p></div>'),po=h('<section class="ai-activation svelte-1a2dwij"><header class="aa-header svelte-1a2dwij"><h3 class="svelte-1a2dwij"> </h3> <button type="button" class="aa-refresh svelte-1a2dwij"> </button></header> <!></section>');function mo(l,e){gt(e,!0);const n=()=>qe(va,"$netConfig",i),[i,p]=St();let v=z(null),c=z(null),x;function L(){return n().mode==="online"?n().remoteBaseUrl:da}async function y(){u(v,null),u(v,await no(L(),n().authToken||void 0),!0)}Et(()=>{n().mode,n().remoteBaseUrl,y()});function b(D,f){navigator.clipboard.writeText(f).then(()=>{u(c,D,!0),x&&clearTimeout(x),x=setTimeout(()=>u(c,null),2e3)}).catch(()=>{})}const N='"ai-plugin": { "enabled": true, "manifest": "plugins/ai-plugin/plugin.json" }',M="cp plugins/ai-plugin/config.example.json plugins/ai-plugin/ai-plugin.json",O=["# Windows (PowerShell,当前会话)",'$env:EVORULE_AI_PLUGIN_LLM_API_KEY="sk-..."',"# Windows (持久化到用户环境,新终端生效)",'setx EVORULE_AI_PLUGIN_LLM_API_KEY "sk-..."',"# Linux / macOS",'export EVORULE_AI_PLUGIN_LLM_API_KEY="sk-..."'].join(`
`),te=["# 分发版(包内已内置 exe;在 evorule 所在目录执行)","cd plugins\\ai-plugin",".\\evorule-ai-plugin.exe --config ai-plugin.json","# 源码版:先在 plugins/ai-plugin 目录 cargo build --release,","#   再运行 .\\target\\release\\evorule-ai-plugin.exe --config ai-plugin.json"].join(`
`);var B=po(),P=s(B),S=s(P),q=s(S,!0);a(S);var R=r(S,2),re=s(R,!0);a(R),a(P);var w=r(P,2);{var X=D=>{var f=ro(),k=s(f,!0);a(f),I(K=>o(k,K),[()=>d("llm.aiPlugin.checking")]),m(D,f)},Q=D=>{var f=oo(),k=s(f),K=s(k,!0);a(k);var le=r(k,2),ae=s(le,!0);a(le),a(f),I((oe,Z)=>{o(K,oe),o(ae,Z)},[()=>d("llm.aiPlugin.state.ready.title"),()=>d("llm.aiPlugin.state.ready.desc")]),m(D,f)},me=D=>{var f=lo(),k=s(f),K=s(k,!0);a(k);var le=r(k,2),ae=s(le,!0);a(le);var oe=r(le,2),Z=s(oe),T=s(Z,!0);a(Z),a(oe);var g=r(oe,2),U=s(g,!0);a(g);var Y=r(g,2);{var j=he=>{var ue=io(),Ae=s(ue,!0);a(ue),I(Le=>o(Ae,Le),[()=>d("llm.aiPlugin.lastError",{error:t(v).lastError})]),m(he,ue)};C(Y,he=>{t(v).lastError&&he(j)})}var W=r(Y,2),_e=s(W,!0);a(W),a(f),I((he,ue,Ae,Le)=>{o(K,he),o(ae,ue),o(T,te),o(U,Ae),o(_e,Le)},[()=>d("llm.aiPlugin.state.unreachable.title"),()=>d("llm.aiPlugin.state.unreachable.desc"),()=>t(c)==="run"?d("llm.aiPlugin.copied"):d("llm.aiPlugin.copyBtn"),()=>d("llm.aiPlugin.distNote")]),E("click",g,()=>b("run",te)),m(D,f)},$=D=>{var f=co(),k=s(f),K=s(k,!0);a(k);var le=r(k,2),ae=s(le,!0);a(le),a(f),I((oe,Z)=>{o(K,oe),o(ae,Z)},[()=>d("llm.aiPlugin.state.noProbe.title"),()=>d("llm.aiPlugin.state.noProbe.desc")]),m(D,f)},H=D=>{var f=uo(),k=s(f),K=s(k,!0);a(k);var le=r(k,2),ae=s(le,!0);a(le);var oe=r(le,2),Z=s(oe),T=s(Z,!0);a(Z);var g=r(Z,2),U=s(g,!0);a(g);var Y=r(g,2),j=s(Y);j.textContent='"ai-plugin": { "enabled": true, "manifest": "plugins/ai-plugin/plugin.json" }',a(Y);var W=r(Y,2),_e=s(W,!0);a(W),a(oe);var he=r(oe,2),ue=s(he),Ae=s(ue,!0);a(ue);var Le=r(ue,2),Be=s(Le,!0);a(Le);var se=r(Le,2),ne=s(se),fe=s(ne,!0);a(ne),a(se);var pe=r(se,2),Ce=s(pe,!0);a(pe);var De=r(pe,2),Se=s(De);Se.textContent="cp plugins/ai-plugin/config.example.json plugins/ai-plugin/ai-plugin.json",a(De);var G=r(De,2),V=s(G,!0);a(G),a(he);var J=r(he,2),ce=s(J),we=s(ce,!0);a(ce);var ke=r(ce,2),$e=s(ke,!0);a(ke);var xe=r(ke,2),Ve=s(xe),Ge=s(Ve,!0);a(Ve),a(xe);var je=r(xe,2),We=s(je,!0);a(je),a(J);var Fe=r(J,2),st=s(Fe,!0);a(Fe),a(f),I((At,Ne,Lt,vt,pt,Ct,nt,Pt,Kt,rt,Qe,$t,Ue)=>{o(K,At),o(ae,Ne),o(T,Lt),o(U,vt),o(_e,pt),o(Ae,Ct),o(Be,nt),o(fe,O),o(Ce,Pt),o(V,Kt),o(we,rt),o($e,Qe),o(Ge,te),o(We,$t),o(st,Ue)},[()=>d("llm.aiPlugin.state.disabled.title"),()=>d("llm.aiPlugin.state.disabled.desc"),()=>d("llm.aiPlugin.step1.title"),()=>d("llm.aiPlugin.step1.desc"),()=>t(c)==="manifest"?d("llm.aiPlugin.copied"):d("llm.aiPlugin.copyBtn"),()=>d("llm.aiPlugin.step2.title"),()=>d("llm.aiPlugin.step2.desc"),()=>t(c)==="env"?d("llm.aiPlugin.copied"):d("llm.aiPlugin.copyBtn"),()=>t(c)==="cfg"?d("llm.aiPlugin.copied"):d("llm.aiPlugin.copyBtn"),()=>d("llm.aiPlugin.step3.title"),()=>d("llm.aiPlugin.step3.desc"),()=>t(c)==="run"?d("llm.aiPlugin.copied"):d("llm.aiPlugin.copyBtn"),()=>d("llm.aiPlugin.distNote")]),E("click",W,()=>b("manifest",N)),E("click",pe,()=>b("env",O)),E("click",G,()=>b("cfg",M)),E("click",je,()=>b("run",te)),m(D,f)},ee=D=>{var f=vo(),k=s(f),K=s(k,!0);a(k);var le=r(k,2),ae=s(le,!0);a(le),a(f),I((oe,Z)=>{o(K,oe),o(ae,Z)},[()=>d("llm.aiPlugin.state.unknown.title"),()=>d("llm.aiPlugin.state.unknown.desc")]),m(D,f)};C(w,D=>{t(v)===null?D(X):t(v).state==="ready"?D(Q,1):t(v).state==="unreachable"?D(me,2):t(v).state==="no_probe"?D($,3):t(v).state==="disabled"?D(H,4):D(ee,-1)})}a(B),I((D,f,k)=>{ie(B,"aria-label",D),o(q,f),o(re,k)},[()=>d("llm.aiPlugin.title"),()=>d("llm.aiPlugin.title"),()=>d("llm.aiPlugin.refresh")]),E("click",R,()=>void y()),m(l,B),bt(),p()}yt(["click"]);var _o=h('<div class="onboard-row svelte-94203o"><small class="hint svelte-94203o"> </small> <button type="button" class="onboard-btn svelte-94203o"> </button></div>'),ls=h('<small class="hint svelte-94203o"> </small>'),cs=h("<option> </option>"),fo=h('<a target="_blank" rel="noopener noreferrer" class="help-link svelte-94203o"> </a>'),La=h('<div class="alert alert-info svelte-94203o"> </div>'),ds=h('<small class="err svelte-94203o"> </small>'),ho=h('<div class="form-row unlock-box svelte-94203o"><label for="llm-unlock" class="svelte-94203o"> </label> <div class="api-key-row svelte-94203o"><input id="llm-unlock" type="password" autocomplete="off" class="svelte-94203o"/> <button type="button" class="toggle-visibility svelte-94203o"> </button></div> <!> <small class="hint svelte-94203o"> </small> <button type="button" class="forgot-link svelte-94203o"> </button></div>'),go=h('<small class="hint warn svelte-94203o"> </small>'),bo=h('<div class="sec-pass-row svelte-94203o"><input type="password" autocomplete="new-password" class="svelte-94203o"/> <input type="password" autocomplete="new-password" class="svelte-94203o"/></div> <small class="hint svelte-94203o"> </small>',1),yo=h('<div class="form-row svelte-94203o"><label for="llm-apikey" class="svelte-94203o"> </label> <div class="api-key-row svelte-94203o"><input id="llm-apikey" placeholder="sk-..." autocomplete="off" class="svelte-94203o"/> <button type="button" class="toggle-visibility svelte-94203o" tabindex="0"> </button></div> <div class="sec-mode svelte-94203o" role="radiogroup"><span class="sec-mode-label svelte-94203o"> </span> <label class="radio-label svelte-94203o"><input type="radio" class="svelte-94203o"/> </label> <label class="radio-label svelte-94203o"><input type="radio" class="svelte-94203o"/> </label></div> <!> <!> <!> <!> <small class="hint svelte-94203o"> </small></div>'),wo=h('<div class="form-row svelte-94203o"><label for="llm-provider" class="svelte-94203o"> </label> <select id="llm-provider" class="svelte-94203o"></select> <!></div> <!> <div class="form-row svelte-94203o"><label for="llm-endpoint" class="svelte-94203o"> </label> <input id="llm-endpoint" type="text" placeholder="https://api.example.com/v1/chat/completions" class="svelte-94203o"/></div> <!>',1),ko=h('<select id="llm-model" class="svelte-94203o"></select>'),xo=h('<input id="llm-model" type="text" placeholder="model-name" class="svelte-94203o"/>'),Eo=h("<div> </div>"),So=h('<div class="form-row svelte-94203o"><label for="llm-channel" class="svelte-94203o"> </label> <select id="llm-channel" class="svelte-94203o"><option> </option><option> </option></select> <!></div> <!> <!> <div class="form-row svelte-94203o"><label for="llm-model" class="svelte-94203o"> </label> <!></div> <div class="form-actions svelte-94203o"><button class="btn btn-secondary svelte-94203o"> </button> <button class="btn btn-secondary svelte-94203o"> </button> <button class="btn btn-primary svelte-94203o"> </button></div> <!> <!> <!>',1),Ao=h('<section class="llm-settings svelte-94203o"><header class="section-header svelte-94203o"><h2 class="svelte-94203o"> </h2> <p class="section-desc svelte-94203o"> </p></header> <div class="form-row svelte-94203o"><label class="switch-label svelte-94203o"><input type="checkbox" class="svelte-94203o"/> <span> </span></label> <small class="hint svelte-94203o"> </small></div> <!> <!> <hr class="divider svelte-94203o"/> <div class="l2-placeholder svelte-94203o"><h3 class="svelte-94203o"> </h3> <p class="hint svelte-94203o"> <code>ollama serve</code> </p> <p class="hint muted svelte-94203o"> </p></div></section>');function Lo(l,e){gt(e,!0);const n=()=>qe(pa,"$llmConfig",i),[i,p]=St(),v=[];let c=z(""),x=z(!1),L=z(!1),y=z(null),b=z(!1),N=z(!1),M=z(us(n().keyStorage==="plain"?"plain":"encrypted")),O=z(""),te=z(""),B=z(""),P=z(""),S=z("");const q=zn();Et(()=>{u(c,n().apiKey,!0)});function R(G){const J=G.target.value,ce=is(J);ce&&(ce.needsAdapter||(la({provider:ce.provider,apiEndpoint:ce.apiEndpoint,model:ce.defaultModel}),ce.presetApiKey&&!t(c).trim()&&la({apiKey:ce.presetApiKey}),u(y,null)))}function re(G){const V=G.target;la({apiEndpoint:V.value.trim()})}function w(G){const V=G.target;u(c,V.value,!0),la({apiKey:t(c)})}function X(G){const V=G.target;la({model:V.value})}function Q(G){const V=G.target;ss(V.checked)}async function me(){const G=n();if(G.channel!=="server"&&(!G.apiEndpoint||!G.apiKey||!G.model)){u(y,{ok:!1,message:d("llm.err.incompleteConfig")},!0);return}u(L,!0),u(y,null);try{const J=await new $s(G).testConnection();u(y,J,!0)}catch(V){u(y,{ok:!1,message:d("llm.err.testFail",{message:V.message})},!0)}finally{u(L,!1)}}async function $(){u(S,"");const G=await $n(t(P));G.ok?(u(P,""),confirm(d("llm.confirmSave"))&&location.reload()):u(S,G.error,!0)}async function H(){if(u(B,""),n().channel==="browser"){const G=t(c),V=G!==n().apiKey||n().keyStorage!=="encrypted"||n().locked;if(t(M)==="encrypted"){if(V){if(!q){u(B,"no-crypto");return}if(!G.trim()){u(B,"key-empty");return}if(t(O).trim().length<Ln){u(B,"passphrase-short");return}if(t(O)!==t(te)){u(B,"passphrase-mismatch");return}u(b,!0);const J=await Cn(G,t(O));if(u(b,!1),!J.ok){u(B,J.error,!0);return}u(O,""),u(te,"")}}else Pn(G)}u(b,!0),u(N,!0),setTimeout(()=>{u(b,!1),confirm(d("llm.confirmSave"))?location.reload():u(N,!1)},500)}function ee(){confirm(d("llm.confirmReset"))&&(An(),u(c,""),u(O,""),u(te,""),u(P,""),u(B,""),u(S,""),u(M,"encrypted"),u(y,null))}let D=Ke(()=>is(n().provider));var f=Ao(),k=s(f),K=s(k),le=s(K,!0);a(K);var ae=r(K,2),oe=s(ae,!0);a(ae),a(k);var Z=r(k,2),T=s(Z),g=s(T);Ye(g);var U=r(g,2),Y=s(U,!0);a(U),a(T);var j=r(T,2),W=s(j,!0);a(j),a(Z);var _e=r(Z,2);{var he=G=>{var V=_o(),J=s(V),ce=s(J,!0);a(J);var we=r(J,2),ke=s(we);a(we),a(V),I(($e,xe)=>{o(ce,$e),o(ke,`${xe??""} →`)},[()=>d("llm.onboardHint"),()=>d("llm.onboardBtn")]),E("click",we,()=>{ss(!0),Sn("server")}),m(G,V)};C(_e,G=>{n().enabled||G(he)})}var ue=r(_e,2);{var Ae=G=>{var V=So(),J=He(V),ce=s(J),we=s(ce,!0);a(ce);var ke=r(ce,2),$e=s(ke),xe=s($e,!0);a($e),$e.value=$e.__value="browser";var Ve=r($e),Ge=s(Ve,!0);a(Ve),Ve.value=Ve.__value="server",a(ke);var je;Da(ke);var We=r(ke,2);{var Fe=ve=>{var de=ls(),be=s(de,!0);a(de),I(ye=>o(be,ye),[()=>d("llm.channelServerHint")]),m(ve,de)};C(We,ve=>{n().channel==="server"&&ve(Fe)})}a(J);var st=r(J,2);{var At=ve=>{mo(ve,{})};C(st,ve=>{n().channel==="server"&&ve(At)})}var Ne=r(st,2);{var Lt=ve=>{var de=wo(),be=He(de),ye=s(be),mt=s(ye,!0);a(ye);var Re=r(ye,2);ut(Re,21,to,Ie=>Ie.value,(Ie,ge)=>{var Te=cs(),Mt=s(Te,!0);a(Te);var kt={};I(()=>{Te.disabled=t(ge).disabled,o(Mt,t(ge).label),kt!==(kt=t(ge).value)&&(Te.value=(Te.__value=t(ge).value)??"")}),m(Ie,Te)}),a(Re);var Ot;Da(Re);var It=r(Re,2);{var ya=Ie=>{var ge=fo(),Te=s(ge,!0);a(ge),I(Mt=>{ie(ge,"href",t(D).helpUrl),o(Te,Mt)},[()=>d("llm.helpLink")]),m(Ie,ge)};C(It,Ie=>{var ge;(ge=t(D))!=null&&ge.helpUrl&&Ie(ya)})}a(be);var zt=r(be,2);{var ma=Ie=>{var ge=La(),Te=s(ge);a(ge),I(()=>o(Te,`ℹ️ ${t(D).adapterNote??""}`)),m(Ie,ge)};C(zt,Ie=>{var ge;(ge=t(D))!=null&&ge.needsAdapter&&Ie(ma)})}var Ht=r(zt,2),na=s(Ht),wa=s(na,!0);a(na);var Zt=r(na,2);Ye(Zt),a(Ht);var ra=r(Ht,2);{var _a=Ie=>{var ge=ho(),Te=s(ge),Mt=s(Te,!0);a(Te);var kt=r(Te,2),_t=s(kt);Ye(_t);var qt=r(_t,2),fa=s(qt,!0);a(qt),a(kt);var Vt=r(kt,2);{var Qt=F=>{var Ee=ds(),Pe=s(Ee,!0);a(Ee),I(tt=>o(Pe,tt),[()=>d(`llm.sec.err.${t(S)}`)]),m(F,Ee)};C(Vt,F=>{t(S)&&F(Qt)})}var oa=r(Vt,2),ia=s(oa,!0);a(oa);var _=r(oa,2),A=s(_,!0);a(_),a(ge),I((F,Ee,Pe,tt,it)=>{o(Mt,F),ie(_t,"placeholder",Ee),o(fa,Pe),o(ia,tt),o(A,it)},[()=>d("llm.sec.unlockTitle"),()=>d("llm.sec.passphrasePlaceholder"),()=>d("llm.sec.unlockBtn"),()=>d("llm.sec.unlockHint"),()=>d("llm.sec.forgotBtn")]),E("keydown",_t,F=>{F.key==="Enter"&&$()}),Xt(_t,()=>t(P),F=>u(P,F)),E("click",qt,()=>void $()),E("click",_,ee),m(Ie,ge)},Yt=Ie=>{var ge=yo(),Te=s(ge),Mt=s(Te,!0);a(Te);var kt=r(Te,2),_t=s(kt);Ye(_t);var qt=r(_t,2),fa=s(qt,!0);a(qt),a(kt);var Vt=r(kt,2),Qt=s(Vt),oa=s(Qt,!0);a(Qt);var ia=r(Qt,2),_=s(ia);Ye(_),_.value=_.__value="encrypted";var A=r(_);a(ia);var F=r(ia,2),Ee=s(F);Ye(Ee),Ee.value=Ee.__value="plain";var Pe=r(Ee);a(F),a(Vt);var tt=r(Vt,2);{var it=Oe=>{var at=ls(),Dt=s(at,!0);a(at),I(xt=>o(Dt,xt),[()=>d("llm.sec.noCrypto")]),m(Oe,at)};C(tt,Oe=>{q||Oe(it)})}var Bt=r(tt,2);{var Gt=Oe=>{var at=go(),Dt=s(at,!0);a(at),I(xt=>o(Dt,xt),[()=>d("llm.sec.plainHint")]),m(Oe,at)};C(Bt,Oe=>{n().keyStorage==="plain"&&Oe(Gt)})}var Ft=r(Bt,2);{var Wt=Oe=>{var at=bo(),Dt=He(at),xt=s(Dt);Ye(xt);var ha=r(xt,2);Ye(ha),a(Dt);var xa=r(Dt,2),Ia=s(xa,!0);a(xa),I((ta,Ds,Rs,js,Ns)=>{ie(xt,"placeholder",ta),ie(xt,"aria-label",Ds),ie(ha,"placeholder",Rs),ie(ha,"aria-label",js),o(Ia,Ns)},[()=>d("llm.sec.passphraseLabel"),()=>d("llm.sec.passphraseLabel"),()=>d("llm.sec.passphraseConfirm"),()=>d("llm.sec.passphraseConfirm"),()=>d("llm.sec.passphraseNote")]),Xt(xt,()=>t(O),ta=>u(O,ta)),Xt(ha,()=>t(te),ta=>u(te,ta)),m(Oe,at)};C(Ft,Oe=>{t(M)==="encrypted"&&Oe(Wt)})}var ea=r(Ft,2);{var Ms=Oe=>{var at=ds(),Dt=s(at,!0);a(at),I(xt=>o(Dt,xt),[()=>d(`llm.sec.err.${t(B)}`)]),m(Oe,at)};C(ea,Oe=>{t(B)&&Oe(Ms)})}var Ja=r(ea,2),qs=s(Ja,!0);a(Ja),a(ge),I((Oe,at,Dt,xt,ha,xa,Ia)=>{var ta;o(Mt,Oe),ie(_t,"type",t(x)?"text":"password"),ka(_t,t(c)),_t.disabled=(ta=t(D))==null?void 0:ta.needsAdapter,ie(qt,"aria-label",at),o(fa,t(x)?"🙈":"👁️"),ie(Vt,"aria-label",Dt),o(oa,xt),_.disabled=!q,o(A,` ${ha??""}`),o(Pe,` ${xa??""}`),o(qs,Ia)},[()=>d("llm.apikeyLabel"),()=>t(x)?d("llm.hideKey"):d("llm.showKey"),()=>d("llm.sec.storageLabel"),()=>d("llm.sec.storageLabel"),()=>d("llm.sec.storageEncrypted"),()=>d("llm.sec.storagePlain"),()=>d("llm.keyHint")]),E("input",_t,w),E("click",qt,()=>u(x,!t(x))),as(v,[],_,()=>t(M),Oe=>u(M,Oe)),as(v,[],Ee,()=>t(M),Oe=>u(M,Oe)),m(Ie,ge)};C(ra,Ie=>{n().locked?Ie(_a):Ie(Yt,-1)})}I((Ie,ge)=>{var Te;o(mt,Ie),Ot!==(Ot=n().provider)&&(Re.value=(Re.__value=n().provider)??"",Ra(Re,n().provider)),o(wa,ge),ka(Zt,n().apiEndpoint),Zt.disabled=(Te=t(D))==null?void 0:Te.needsAdapter},[()=>d("llm.providerLabel"),()=>d("llm.endpointLabel")]),E("change",Re,R),E("input",Zt,re),m(ve,de)};C(Ne,ve=>{n().channel==="browser"&&ve(Lt)})}var vt=r(Ne,2),pt=s(vt),Ct=s(pt,!0);a(pt);var nt=r(pt,2);{var Pt=ve=>{var de=ko();ut(de,20,()=>t(D).models,ye=>ye,(ye,mt)=>{var Re=cs(),Ot=s(Re,!0);a(Re);var It={};I(()=>{o(Ot,mt),It!==(It=mt)&&(Re.value=(Re.__value=mt)??"")}),m(ye,Re)}),a(de);var be;Da(de),I(()=>{be!==(be=n().model)&&(de.value=(de.__value=n().model)??"",Ra(de,n().model))}),E("change",de,X),m(ve,de)},Kt=ve=>{var de=xo();Ye(de),I(()=>{var be;ka(de,n().model),de.disabled=(be=t(D))==null?void 0:be.needsAdapter}),E("input",de,be=>la({model:be.target.value.trim()})),m(ve,de)};C(nt,ve=>{t(D)&&t(D).models.length>0?ve(Pt):ve(Kt,-1)})}a(vt);var rt=r(vt,2),Qe=s(rt),$t=s(Qe,!0);a(Qe);var Ue=r(Qe,2),jt=s(Ue,!0);a(Ue);var wt=r(Ue,2),Tt=s(wt,!0);a(wt),a(rt);var Nt=r(rt,2);{var Xe=ve=>{var de=Eo();let be;var ye=s(de);a(de),I(()=>{be=Me(de,1,"alert svelte-94203o",null,be,{"alert-success":t(y).ok,"alert-error":!t(y).ok}),o(ye,`${t(y).ok?"✅":"❌"} ${t(y).message??""}`)}),m(ve,de)};C(Nt,ve=>{t(y)&&ve(Xe)})}var Je=r(Nt,2);{var ze=ve=>{var de=La(),be=s(de,!0);a(de),I(ye=>o(be,ye),[()=>d("llm.err.aiPluginHint")]),m(ve,de)};C(Je,ve=>{t(y)&&!t(y).ok&&t(y).serverUnreachable&&ve(ze)})}var ot=r(Je,2);{var et=ve=>{var de=La(),be=s(de,!0);a(de),I(ye=>o(be,ye),[()=>d("llm.savedNotice")]),m(ve,de)};C(ot,ve=>{t(N)&&ve(et)})}I((ve,de,be,ye,mt,Re,Ot)=>{var It;o(we,ve),o(xe,de),o(Ge,be),je!==(je=n().channel)&&(ke.value=(ke.__value=n().channel)??"",Ra(ke,n().channel)),o(Ct,ye),Qe.disabled=t(L)||((It=t(D))==null?void 0:It.needsAdapter),o($t,mt),o(jt,Re),wt.disabled=t(b),o(Tt,Ot)},[()=>d("llm.channelLabel"),()=>d("llm.channelBrowser"),()=>d("llm.channelServer"),()=>d("llm.modelLabel"),()=>t(L)?d("common.testing"):d("llm.testBtn"),()=>d("llm.reset"),()=>t(b)?d("llm.saving"):d("llm.saveApply")]),E("change",ke,ve=>la({channel:ve.target.value})),E("click",Qe,me),E("click",Ue,ee),E("click",wt,H),m(G,V)},Le=G=>{var V=La(),J=s(V,!0);a(V),I(ce=>o(J,ce),[()=>d("llm.disabledNotice")]),m(G,V)};C(ue,G=>{n().enabled?G(Ae):G(Le,-1)})}var Be=r(ue,4),se=s(Be),ne=s(se,!0);a(se);var fe=r(se,2),pe=s(fe),Ce=r(pe,2);a(fe);var De=r(fe,2),Se=s(De,!0);a(De),a(Be),a(f),I((G,V,J,ce,we,ke,$e,xe)=>{o(le,G),o(oe,V),ln(g,n().enabled),o(Y,J),o(W,ce),o(ne,we),o(pe,`${ke??""} `),o(Ce,` ${$e??""}`),o(Se,xe)},[()=>d("llm.title"),()=>d("llm.desc"),()=>d("llm.enableLabel"),()=>d("llm.disableHint"),()=>d("llm.localTitle"),()=>d("llm.localSupport"),()=>d("llm.localSupport2"),()=>d("llm.localDeep")]),E("change",g,Q),m(l,f),bt(),p()}yt(["change","click","input","keydown"]);var Co=h('<button class="btn-close svelte-d2xhpt"> </button>'),Po=h('<div class="form-row svelte-d2xhpt"><label for="remote-url" class="svelte-d2xhpt"> </label> <input id="remote-url" type="text" placeholder="https://your-server.example.com" class="svelte-d2xhpt"/> <small class="hint svelte-d2xhpt"> </small></div>'),$o=h("<div> </div>"),Io=h('<section class="network-settings"><header class="section-header svelte-d2xhpt"><h2 class="svelte-d2xhpt"> </h2> <p class="section-desc svelte-d2xhpt"> </p></header> <div class="mode-toggle svelte-d2xhpt"><button> </button> <button> </button></div> <!> <div class="form-row svelte-d2xhpt"><label for="auth-token" class="svelte-d2xhpt"> </label> <input id="auth-token" type="password" autocomplete="off" class="svelte-d2xhpt"/> <small class="hint svelte-d2xhpt"> </small></div> <div class="form-actions svelte-d2xhpt"><button class="btn btn-secondary svelte-d2xhpt"> </button></div> <!> <div class="current-status svelte-d2xhpt"><h3 class="svelte-d2xhpt"> </h3> <dl class="svelte-d2xhpt"><dt class="svelte-d2xhpt"> </dt> <dd class="svelte-d2xhpt"> </dd> <dt class="svelte-d2xhpt">baseUrl</dt> <dd class="svelte-d2xhpt"><code class="svelte-d2xhpt"> </code></dd></dl></div></section>'),To=h('<section class="onboarding-settings"><header class="section-header svelte-d2xhpt"><h2 class="svelte-d2xhpt"> </h2> <p class="section-desc svelte-d2xhpt"> </p></header> <div class="ob-reshow-list svelte-d2xhpt"><div class="ob-reshow-row svelte-d2xhpt"><div class="ob-reshow-info svelte-d2xhpt"><h4 class="svelte-d2xhpt"> </h4> <p class="svelte-d2xhpt"> </p></div> <button class="btn btn-secondary svelte-d2xhpt"> </button></div> <div class="ob-reshow-row svelte-d2xhpt"><div class="ob-reshow-info svelte-d2xhpt"><h4 class="svelte-d2xhpt"> </h4> <p class="svelte-d2xhpt"> </p></div> <button class="btn btn-secondary svelte-d2xhpt"> </button></div> <div class="ob-reshow-row svelte-d2xhpt"><div class="ob-reshow-info svelte-d2xhpt"><h4 class="svelte-d2xhpt"> </h4> <p class="svelte-d2xhpt"> </p></div> <button class="btn btn-secondary svelte-d2xhpt"> </button></div> <div class="ob-reshow-row svelte-d2xhpt"><div class="ob-reshow-info svelte-d2xhpt"><h4 class="svelte-d2xhpt"> </h4> <p class="svelte-d2xhpt"> </p></div> <button class="btn btn-secondary svelte-d2xhpt"> </button></div></div> <div class="ob-danger svelte-d2xhpt"><div class="ob-reshow-info svelte-d2xhpt"><h4 class="svelte-d2xhpt"> </h4> <p class="svelte-d2xhpt"> </p></div> <button class="btn btn-danger svelte-d2xhpt"> </button></div></section>'),Mo=h('<div class="settings-page svelte-d2xhpt"><header class="settings-header svelte-d2xhpt"><div class="header-row svelte-d2xhpt"><div><h1 class="svelte-d2xhpt"> </h1> <p class="subtitle svelte-d2xhpt"> </p></div> <!></div></header> <div class="settings-tabs svelte-d2xhpt" role="tablist"><button role="tab"> </button> <button role="tab"> </button> <button role="tab"> </button></div> <main class="settings-content svelte-d2xhpt"><!></main></div>');function qo(l,e){gt(e,!0);const n=()=>qe(va,"$netConfig",i),[i,p]=St();let v=Jn(e,"initialTab",3,"network"),c=z("network");Et(()=>{u(c,v())});let x=z(""),L=z(""),y=z(!1),b=z(null);Et(()=>{u(x,n().remoteBaseUrl,!0)}),Et(()=>{u(L,n().authToken,!0)});function N(se){kn(se),u(b,null)}function M(se){u(x,se.target.value,!0)}function O(){En(t(x))}function te(se){u(L,se.target.value,!0)}function B(){xn(t(L))}async function P(){const se=n(),ne=se.mode==="online"?se.remoteBaseUrl:da;u(y,!0),u(b,null);try{const pe=await new fs({mode:"online",remoteBaseUrl:ne,localBaseUrl:ne,authToken:t(L).trim()||void 0}).health();u(b,{ok:pe,message:pe?d("settings.network.testSuccess",{url:ne}):d("settings.network.testFail",{url:ne})},!0)}catch(fe){u(b,{ok:!1,message:d("settings.network.testError",{message:fe.message})},!0)}finally{u(y,!1)}}function S(){try{const se="evorule-console-cloud:guided-hint:";for(let ne=localStorage.length-1;ne>=0;ne--){const fe=localStorage.key(ne);fe&&fe.startsWith(se)&&localStorage.removeItem(fe)}}catch{}}function q(){ws(),ht(d("settings.toast.bannerReset"),d("settings.onboarding.title"))}function R(){ks(),xs()}function re(){Zn(),ht(d("settings.toast.checklistReset"),d("settings.onboarding.title"))}function w(){Yn(),S(),ht(d("settings.toast.viewHintsReset"),d("settings.onboarding.title"))}function X(){window.confirm(d("settings.confirm.resetAll"))&&(Qn(),S(),ht(d("settings.toast.allOnboardingReset"),d("settings.onboarding.title")))}var Q=Mo(),me=s(Q),$=s(me),H=s($),ee=s(H),D=s(ee,!0);a(ee);var f=r(ee,2),k=s(f,!0);a(f),a(H);var K=r(H,2);{var le=se=>{var ne=Co(),fe=s(ne,!0);a(ne),I((pe,Ce,De)=>{ie(ne,"aria-label",pe),ie(ne,"title",Ce),o(fe,De)},[()=>d("settings.backLabel"),()=>d("settings.backLabel"),()=>d("settings.back")]),E("click",ne,function(...pe){var Ce;(Ce=e.onclose)==null||Ce.apply(this,pe)}),m(se,ne)};C(K,se=>{e.onclose&&se(le)})}a($),a(me);var ae=r(me,2),oe=s(ae);let Z;var T=s(oe,!0);a(oe);var g=r(oe,2);let U;var Y=s(g,!0);a(g);var j=r(g,2);let W;var _e=s(j,!0);a(j),a(ae);var he=r(ae,2),ue=s(he);{var Ae=se=>{var ne=Io(),fe=s(ne),pe=s(fe),Ce=s(pe,!0);a(pe);var De=r(pe,2),Se=s(De,!0);a(De),a(fe);var G=r(fe,2),V=s(G);let J;var ce=s(V,!0);a(V);var we=r(V,2);let ke;var $e=s(we,!0);a(we),a(G);var xe=r(G,2);{var Ve=Xe=>{var Je=Po(),ze=s(Je),ot=s(ze,!0);a(ze);var et=r(ze,2);Ye(et);var ve=r(et,2),de=s(ve,!0);a(ve),a(Je),I((be,ye)=>{o(ot,be),ka(et,t(x)),o(de,ye)},[()=>d("settings.network.remoteUrlLabel"),()=>d("settings.network.remoteUrlHint")]),E("input",et,M),ua("blur",et,O),m(Xe,Je)};C(xe,Xe=>{n().mode==="online"&&Xe(Ve)})}var Ge=r(xe,2),je=s(Ge),We=s(je,!0);a(je);var Fe=r(je,2);Ye(Fe);var st=r(Fe,2),At=s(st,!0);a(st),a(Ge);var Ne=r(Ge,2),Lt=s(Ne),vt=s(Lt,!0);a(Lt),a(Ne);var pt=r(Ne,2);{var Ct=Xe=>{var Je=$o();let ze;var ot=s(Je);a(Je),I(()=>{ze=Me(Je,1,"alert svelte-d2xhpt",null,ze,{"alert-success":t(b).ok,"alert-error":!t(b).ok}),o(ot,`${t(b).ok?"✅":"❌"} ${t(b).message??""}`)}),m(Xe,Je)};C(pt,Xe=>{t(b)&&Xe(Ct)})}var nt=r(pt,2),Pt=s(nt),Kt=s(Pt,!0);a(Pt);var rt=r(Pt,2),Qe=s(rt),$t=s(Qe,!0);a(Qe);var Ue=r(Qe,2),jt=s(Ue,!0);a(Ue);var wt=r(Ue,4),Tt=s(wt),Nt=s(Tt,!0);a(Tt),a(wt),a(rt),a(nt),a(ne),I((Xe,Je,ze,ot,et,ve,de,be,ye,mt,Re)=>{o(Ce,Xe),o(Se,Je),J=Me(V,1,"mode-btn svelte-d2xhpt",null,J,{active:n().mode==="offline"}),o(ce,ze),ke=Me(we,1,"mode-btn svelte-d2xhpt",null,ke,{active:n().mode==="online"}),o($e,ot),o(We,et),ka(Fe,t(L)),ie(Fe,"placeholder",ve),o(At,de),Lt.disabled=t(y),o(vt,be),o(Kt,ye),o($t,mt),o(jt,Re),o(Nt,n().mode==="online"?n().remoteBaseUrl:da)},[()=>d("settings.network.title"),()=>d("settings.network.desc"),()=>d("settings.network.localMode"),()=>d("settings.network.onlineMode"),()=>d("settings.network.tokenLabel"),()=>d("settings.network.tokenPlaceholder"),()=>d("settings.network.tokenHint"),()=>t(y)?d("common.testing"):d("settings.network.testBtn"),()=>d("settings.network.currentStatus"),()=>d("settings.network.mode"),()=>n().mode==="online"?d("settings.network.modeOnline"):d("settings.network.modeLocal")]),E("click",V,()=>N("offline")),E("click",we,()=>N("online")),E("input",Fe,te),ua("blur",Fe,B),E("click",Lt,P),m(se,ne)},Le=se=>{Lo(se,{})},Be=se=>{var ne=To(),fe=s(ne),pe=s(fe),Ce=s(pe,!0);a(pe);var De=r(pe,2),Se=s(De,!0);a(De),a(fe);var G=r(fe,2),V=s(G),J=s(V),ce=s(J),we=s(ce,!0);a(ce);var ke=r(ce,2),$e=s(ke,!0);a(ke),a(J);var xe=r(J,2),Ve=s(xe,!0);a(xe),a(V);var Ge=r(V,2),je=s(Ge),We=s(je),Fe=s(We,!0);a(We);var st=r(We,2),At=s(st,!0);a(st),a(je);var Ne=r(je,2),Lt=s(Ne,!0);a(Ne),a(Ge);var vt=r(Ge,2),pt=s(vt),Ct=s(pt),nt=s(Ct,!0);a(Ct);var Pt=r(Ct,2),Kt=s(Pt,!0);a(Pt),a(pt);var rt=r(pt,2),Qe=s(rt,!0);a(rt),a(vt);var $t=r(vt,2),Ue=s($t),jt=s(Ue),wt=s(jt,!0);a(jt);var Tt=r(jt,2),Nt=s(Tt,!0);a(Tt),a(Ue);var Xe=r(Ue,2),Je=s(Xe,!0);a(Xe),a($t),a(G);var ze=r(G,2),ot=s(ze),et=s(ot),ve=s(et,!0);a(et);var de=r(et,2),be=s(de,!0);a(de),a(ot);var ye=r(ot,2),mt=s(ye,!0);a(ye),a(ze),a(ne),I((Re,Ot,It,ya,zt,ma,Ht,na,wa,Zt,ra,_a,Yt,Ie,ge,Te,Mt)=>{o(Ce,Re),o(Se,Ot),o(we,It),o($e,ya),o(Ve,zt),o(Fe,ma),o(At,Ht),o(Lt,na),o(nt,wa),o(Kt,Zt),o(Qe,ra),o(wt,_a),o(Nt,Yt),o(Je,Ie),o(ve,ge),o(be,Te),o(mt,Mt)},[()=>d("settings.onboarding.pageTitle"),()=>d("settings.onboarding.desc"),()=>d("settings.onboarding.banner"),()=>d("settings.onboarding.bannerDesc"),()=>d("settings.onboarding.reshow"),()=>d("settings.onboarding.tour"),()=>d("settings.onboarding.tourDesc"),()=>d("settings.onboarding.replay"),()=>d("settings.onboarding.checklist"),()=>d("settings.onboarding.checklistDesc"),()=>d("settings.onboarding.resetChecklist"),()=>d("settings.onboarding.viewHints"),()=>d("settings.onboarding.viewHintsDesc"),()=>d("settings.onboarding.resetHints"),()=>d("settings.onboarding.resetAll"),()=>d("settings.onboarding.resetAllDesc"),()=>d("settings.onboarding.resetAllBtn")]),E("click",xe,q),E("click",Ne,R),E("click",rt,re),E("click",Xe,w),E("click",ye,X),m(se,ne)};C(ue,se=>{t(c)==="network"?se(Ae):t(c)==="llm"?se(Le,1):t(c)==="onboarding"&&se(Be,2)})}a(he),a(Q),I((se,ne,fe,pe,Ce)=>{o(D,se),o(k,ne),Z=Me(oe,1,"settings-tab svelte-d2xhpt",null,Z,{active:t(c)==="network"}),ie(oe,"aria-selected",t(c)==="network"),o(T,fe),U=Me(g,1,"settings-tab svelte-d2xhpt",null,U,{active:t(c)==="llm"}),ie(g,"aria-selected",t(c)==="llm"),o(Y,pe),W=Me(j,1,"settings-tab svelte-d2xhpt",null,W,{active:t(c)==="onboarding"}),ie(j,"aria-selected",t(c)==="onboarding"),o(_e,Ce)},[()=>d("settings.title"),()=>d("settings.subtitle"),()=>d("settings.tab.network"),()=>d("settings.tab.llm"),()=>d("settings.tab.onboarding")]),E("click",oe,()=>u(c,"network")),E("click",g,()=>u(c,"llm")),E("click",j,()=>u(c,"onboarding")),m(l,Q),bt(),p()}yt(["click","input"]);var Do=h('<div class="toast-title svelte-19y9ob7"> </div>'),Ro=h('<div role="alert"><span class="toast-icon svelte-19y9ob7"><!> <!> <!> <!></span> <div class="toast-content svelte-19y9ob7"><!> <div class="toast-message svelte-19y9ob7"> </div></div> <button class="toast-close svelte-19y9ob7" aria-label="关闭">×</button></div>'),jo=h('<div class="toast-container svelte-19y9ob7" role="region" aria-label="通知"></div>');function No(l,e){gt(e,!0);const n=()=>qe(rn,"$toastStore",i),[i,p]=St(),v=Ke(n);var c=Jt(),x=He(c);{var L=y=>{var b=jo();ut(b,21,()=>t(v),N=>N.id,(N,M)=>{var O=Ro(),te=s(O),B=s(te);{var P=f=>{var k=ga("✅");m(f,k)};C(B,f=>{t(M).type==="success"&&f(P)})}var S=r(B,2);{var q=f=>{var k=ga("❌");m(f,k)};C(S,f=>{t(M).type==="error"&&f(q)})}var R=r(S,2);{var re=f=>{var k=ga("⚠️");m(f,k)};C(R,f=>{t(M).type==="warning"&&f(re)})}var w=r(R,2);{var X=f=>{var k=ga("ℹ️");m(f,k)};C(w,f=>{t(M).type==="info"&&f(X)})}a(te);var Q=r(te,2),me=s(Q);{var $=f=>{var k=Do(),K=s(k,!0);a(k),I(()=>o(K,t(M).title)),m(f,k)};C(me,f=>{t(M).title&&f($)})}var H=r(me,2),ee=s(H,!0);a(H),a(Q);var D=r(Q,2);a(O),I(()=>{Me(O,1,`toast toast-${t(M).type}`,"svelte-19y9ob7"),o(ee,t(M).message)}),E("click",D,()=>on(t(M).id)),m(N,O)}),a(b),m(y,b)};C(x,y=>{t(v).length>0&&y(L)})}m(l,c),bt(),p()}yt(["click"]);var Oo=h('<div class="profile-row svelte-1uqluxl"><span class="k svelte-1uqluxl">邮箱</span><span class="v svelte-1uqluxl"> </span></div>'),Bo=h('<div class="profile-row svelte-1uqluxl"><span class="k svelte-1uqluxl">部门</span><span class="v svelte-1uqluxl"> </span></div>'),Fo=h('<div class="profile-row svelte-1uqluxl"><span class="k svelte-1uqluxl">权限点</span> <span class="v svelte-1uqluxl"> </span></div>'),Uo=h('<form class="pw-form svelte-1uqluxl"><input type="password" placeholder="当前密码" autocomplete="current-password" required="" class="svelte-1uqluxl"/> <input type="password" placeholder="新密码(至少 8 位)" autocomplete="new-password" required="" class="svelte-1uqluxl"/> <input type="password" placeholder="确认新密码" autocomplete="new-password" required="" class="svelte-1uqluxl"/> <div class="pw-actions svelte-1uqluxl"><button class="menu-item svelte-1uqluxl" type="submit"> </button> <button class="menu-item svelte-1uqluxl" type="button">取消</button></div></form>'),Ko=h('<button class="menu-item svelte-1uqluxl" role="menuitem">🔑 修改密码</button>'),Ho=h('<button class="menu-item svelte-1uqluxl" role="menuitem">💼 我的工作台</button> <button class="menu-item svelte-1uqluxl" role="menuitem">📋 看 demo</button>',1),Vo=h('<div class="menu-dropdown svelte-1uqluxl" role="menu"><div class="profile-section svelte-1uqluxl"><div class="profile-row svelte-1uqluxl"><span class="k svelte-1uqluxl">账号</span><span class="v svelte-1uqluxl"> </span></div> <!> <!> <div class="profile-row svelte-1uqluxl"><span class="k svelte-1uqluxl">角色</span><span class="v svelte-1uqluxl"> </span></div> <!></div> <!> <div class="menu-divider svelte-1uqluxl"></div> <button class="menu-item menu-danger svelte-1uqluxl" role="menuitem">🚪 登出</button></div>'),Go=h('<div class="user-menu svelte-1uqluxl"><button class="user-trigger svelte-1uqluxl" aria-label="用户菜单"><span class="user-avatar svelte-1uqluxl"> </span> <span class="user-meta svelte-1uqluxl"><span class="user-name svelte-1uqluxl"> </span> <span class="user-role svelte-1uqluxl"> </span></span> <span>▾</span></button> <!></div>'),Wo=h('<button class="login-btn svelte-1uqluxl">🔐 登录</button>');function Xo(l,e){gt(e,!0);const n=()=>qe(Ka,"$currentUser",c),i=()=>qe(va,"$netConfig",c),p=()=>qe(en,"$displayName",c),v=()=>qe(tn,"$roleLabel",c),[c,x]=St();let L=z(!1),y=z(!1),b=z(""),N=z(""),M=z(""),O=z(!1);function te(){u(L,!t(L)),t(L)||(u(y,!1),u(b,u(N,u(M,""),!0),!0))}function B(){an(),u(L,!1),Ma("已登出","再见"),ct("/")}function P(){u(L,!1),or(),Ma("已切换到 demo 模式","查看演示"),ct("/")}function S(){u(L,!1),rr(),ct("/")}async function q(Q){if(Q.preventDefault(),!(!n()||t(O))){if(t(N).length<8){qa("新密码长度至少 8 位","密码不合规");return}if(t(N)!==t(M)){qa("两次输入的新密码不一致","密码不合规");return}u(O,!0);try{await sn(i().remoteBaseUrl,i().authToken,t(b),t(N)),Ma("密码已更新,下次登录请使用新密码","修改成功"),u(y,!1),u(b,u(N,u(M,""),!0),!0),vs(!0)}catch($){const H=($ instanceof nn,$.message);qa(H,"修改密码失败")}finally{u(O,!1)}}}var R=Jt(),re=He(R);{var w=Q=>{var me=Go(),$=s(me),H=s($),ee=s(H,!0);a(H);var D=r(H,2),f=s(D),k=s(f,!0);a(f);var K=r(f,2),le=s(K,!0);a(K),a(D);var ae=r(D,2);let oe;a($);var Z=r($,2);{var T=g=>{var U=Vo(),Y=s(U),j=s(Y),W=r(s(j)),_e=s(W,!0);a(W),a(j);var he=r(j,2);{var ue=V=>{var J=Oo(),ce=r(s(J)),we=s(ce,!0);a(ce),a(J),I(()=>o(we,n().email)),m(V,J)};C(he,V=>{n().email&&V(ue)})}var Ae=r(he,2);{var Le=V=>{var J=Bo(),ce=r(s(J)),we=s(ce,!0);a(ce),a(J),I(()=>o(we,n().department)),m(V,J)};C(Ae,V=>{n().department&&V(Le)})}var Be=r(Ae,2),se=r(s(Be)),ne=s(se,!0);a(se),a(Be);var fe=r(Be,2);{var pe=V=>{var J=Fo(),ce=r(s(J),2),we=s(ce);a(ce),a(J),I(()=>{var ke;return o(we,`${((ke=n().permissions)==null?void 0:ke.length)??0??""} 项(服务端下发)`)}),m(V,J)};C(fe,V=>{n().authKind==="platform"&&V(pe)})}a(Y);var Ce=r(Y,2);{var De=V=>{var J=Jt(),ce=He(J);{var we=$e=>{var xe=Uo(),Ve=s(xe);Ye(Ve);var Ge=r(Ve,2);Ye(Ge),ie(Ge,"minlength",8);var je=r(Ge,2);Ye(je);var We=r(je,2),Fe=s(We),st=s(Fe,!0);a(Fe);var At=r(Fe,2);a(We),a(xe),I(()=>{Fe.disabled=t(O),o(st,t(O)?"提交中…":"保存新密码")}),ua("submit",xe,q),Xt(Ve,()=>t(b),Ne=>u(b,Ne)),Xt(Ge,()=>t(N),Ne=>u(N,Ne)),Xt(je,()=>t(M),Ne=>u(M,Ne)),E("click",At,()=>u(y,!1)),m($e,xe)},ke=$e=>{var xe=Ko();E("click",xe,()=>u(y,!0)),m($e,xe)};C(ce,$e=>{t(y)?$e(we):$e(ke,-1)})}m(V,J)},Se=V=>{var J=Ho(),ce=He(J),we=r(ce,2);E("click",ce,S),E("click",we,P),m(V,J)};C(Ce,V=>{n().authKind==="platform"?V(De):V(Se,-1)})}var G=r(Ce,4);a(U),I(()=>{o(_e,n().username),o(ne,v())}),E("click",G,B),m(g,U)};C(Z,g=>{t(L)&&g(T)})}a(me),I(g=>{ie($,"aria-expanded",t(L)),o(ee,g),o(k,p()),o(le,v()),oe=Me(ae,1,"caret svelte-1uqluxl",null,oe,{open:t(L)})},[()=>p().charAt(0)]),E("click",$,te),m(Q,me)},X=Q=>{var me=Wo();E("click",me,()=>ct("/login")),m(Q,me)};C(re,Q=>{n()?Q(w):Q(X,-1)})}m(l,R),bt(),x()}yt(["click"]);var Jo=h('<span class="unread-badge svelte-17zslpn"> </span>'),zo=h('<button class="mark-all-btn svelte-17zslpn">全部标记已读</button>'),Zo=h('<div class="bell-empty svelte-17zslpn">📭 暂无通知</div>'),Yo=h('<span class="unread-dot svelte-17zslpn"></span>'),Qo=h('<button role="menuitem"><span class="item-icon svelte-17zslpn"> </span> <div class="item-content svelte-17zslpn"><div class="item-title svelte-17zslpn"> </div> <div class="item-body svelte-17zslpn"> </div> <div class="item-time svelte-17zslpn"> </div></div> <!></button>'),ei=h('<div class="bell-dropdown svelte-17zslpn" role="menu"><div class="bell-header svelte-17zslpn"><span class="bell-title svelte-17zslpn">通知</span> <!></div> <div class="bell-list svelte-17zslpn"><!></div></div>'),ti=h('<div class="notification-bell svelte-17zslpn"><button class="bell-trigger svelte-17zslpn"><span class="bell-icon">🔔</span> <!></button> <!></div>');function ai(l,e){gt(e,!0);const n=()=>qe(ir,"$unreadCount",p),i=()=>qe(lr,"$notificationsStore",p),[p,v]=St();let c=z(!1);function x(){u(c,!t(c))}function L(S){dr(S)}function y(){cr()}function b(S){switch(S){case"mention":return"💬";case"review_request":return"🔍";case"publish_status":return"📤";case"system":return"⚙️";default:return"🔔"}}var N=ti(),M=s(N),O=r(s(M),2);{var te=S=>{var q=Jo(),R=s(q,!0);a(q),I(()=>o(R,n()>99?"99+":n())),m(S,q)};C(O,S=>{n()>0&&S(te)})}a(M);var B=r(M,2);{var P=S=>{var q=ei(),R=s(q),re=r(s(R),2);{var w=H=>{var ee=zo();E("click",ee,y),m(H,ee)};C(re,H=>{n()>0&&H(w)})}a(R);var X=r(R,2),Q=s(X);{var me=H=>{var ee=Zo();m(H,ee)},$=H=>{var ee=Jt(),D=He(ee);ut(D,1,()=>i().slice(0,10),f=>f.id,(f,k)=>{var K=Qo();let le;var ae=s(K),oe=s(ae,!0);a(ae);var Z=r(ae,2),T=s(Z),g=s(T,!0);a(T);var U=r(T,2),Y=s(U,!0);a(U);var j=r(U,2),W=s(j,!0);a(j),a(Z);var _e=r(Z,2);{var he=ue=>{var Ae=Yo();m(ue,Ae)};C(_e,ue=>{t(k).read||ue(he)})}a(K),I((ue,Ae)=>{le=Me(K,1,"bell-item svelte-17zslpn",null,le,{unread:!t(k).read}),o(oe,ue),o(g,t(k).title),o(Y,t(k).body),o(W,Ae)},[()=>b(t(k).type),()=>In(t(k).createdAt)]),E("click",K,()=>L(t(k).id)),m(f,K)}),m(H,ee)};C(Q,H=>{i().length===0?H(me):H($,-1)})}a(X),a(q),m(S,q)};C(B,S=>{t(c)&&S(P)})}a(N),I(()=>{ie(M,"aria-expanded",t(c)),ie(M,"aria-label",`通知(${n()} 条未读)`)}),E("click",M,x),m(l,N),bt(),v()}yt(["click"]);var si=h('<button class="tf-item svelte-opiocs" role="menuitem"><span class="tf-item-icon svelte-opiocs"> </span> <div class="tf-item-body svelte-opiocs"><div class="tf-item-name svelte-opiocs"> </div> <div class="tf-item-desc svelte-opiocs"> </div></div> <span class="tf-item-time svelte-opiocs"> </span></button>'),ni=h('<span class="tf-mode-tag svelte-opiocs">决策者视图</span>'),ri=h('<span class="tf-demo-tag svelte-opiocs">未登录将以 demo 模式启动(只读)</span>'),oi=h('<div class="tf-menu svelte-opiocs" role="menu"><div class="tf-menu-header svelte-opiocs"><span>选择任务类型</span> <span class="tf-hint svelte-opiocs">6 任务流 · 4 步骤/流</span></div> <!> <div class="tf-menu-footer svelte-opiocs"><!> <!></div></div>'),ii=h('<div class="tf-dropdown svelte-opiocs"><button class="tf-trigger svelte-opiocs" aria-haspopup="menu" title="任务流 — 以任务为主线跨视图完成业务目标"><span class="tf-icon svelte-opiocs">🎯</span> <span class="tf-label svelte-opiocs">任务流</span> <span> </span></button> <!></div>');function li(l,e){gt(e,!0);const n=()=>qe(ca,"$sessionStore",p),i=()=>qe(gn,"$viewModeStore",p),[p,v]=St();let c=z(!1);function x(){u(c,!t(c))}function L(S){const q=n().loggedIn;Ss(S,!q),u(c,!1);const R=Ba.find(re=>re.id===S);ht(`已启动任务流: ${(R==null?void 0:R.name)??S}`,"任务流")}function y(S){S.target.closest(".tf-dropdown")||u(c,!1)}Et(()=>(t(c)&&document.addEventListener("click",y),()=>document.removeEventListener("click",y)));var b=ii(),N=s(b),M=r(s(N),4);let O;var te=s(M,!0);a(M),a(N);var B=r(N,2);{var P=S=>{var q=oi(),R=r(s(q),2);ut(R,17,()=>Ba,$=>$.id,($,H)=>{var ee=si(),D=s(ee),f=s(D,!0);a(D);var k=r(D,2),K=s(k),le=s(K,!0);a(K);var ae=r(K,2),oe=s(ae,!0);a(ae),a(k);var Z=r(k,2),T=s(Z);a(Z),a(ee),I(()=>{o(f,t(H).icon),o(le,t(H).name),o(oe,t(H).description),o(T,`~${t(H).estimatedMinutes??""}分钟`)}),E("click",ee,()=>L(t(H).id)),m($,ee)});var re=r(R,2),w=s(re);{var X=$=>{var H=ni();m($,H)};C(w,$=>{i()==="decision_maker"&&$(X)})}var Q=r(w,2);{var me=$=>{var H=ri();m($,H)};C(Q,$=>{n().loggedIn||$(me)})}a(re),a(q),m(S,q)};C(B,S=>{t(c)&&S(P)})}a(b),I(()=>{ie(N,"aria-expanded",t(c)),O=Me(M,1,"tf-caret svelte-opiocs",null,O,{open:t(c)}),o(te,t(c)?"▲":"▼")}),E("click",N,x),m(l,b),bt(),v()}yt(["click"]);var ci=h('<span class="tfw-demo-badge svelte-1myhquy">demo</span>'),di=h("<span></span>"),ui=h('<button><span class="tfw-step-num svelte-1myhquy"> </span> <span class="tfw-step-name svelte-1myhquy"> </span></button> <!>',1),vi=h('<button class="tfw-btn primary svelte-1myhquy">下一步 →</button>'),pi=h('<button class="tfw-btn success svelte-1myhquy">✓ 完成</button>'),mi=h('<div class="tfw-bar svelte-1myhquy" role="region" aria-label="任务流进度"><div class="tfw-info svelte-1myhquy"><span class="tfw-icon svelte-1myhquy"> </span> <div class="tfw-text svelte-1myhquy"><div class="tfw-title svelte-1myhquy"> <!></div> <div class="tfw-instruction svelte-1myhquy"> </div></div></div> <div class="tfw-progress svelte-1myhquy"></div> <div class="tfw-actions svelte-1myhquy"><button class="tfw-btn svelte-1myhquy" title="上一步">← 上一步</button> <!> <button class="tfw-btn ghost svelte-1myhquy" title="取消任务流">✕</button></div></div> <div class="tfw-hint-bar svelte-1myhquy"><span class="tfw-hint-icon svelte-1myhquy">💡</span> <span class="tfw-hint-text svelte-1myhquy"> </span> <span class="tfw-hint-goal svelte-1myhquy"> </span></div>',1);function _i(l,e){gt(e,!0);const n=()=>qe(vr,"$taskFlowStore",i),[i,p]=St(),v=Ke(n),c=Ke(ur),x=Ke(_r),L={add_rule:"try_add",query_issue:"try_query",edit_rule:"try_edit",compliance_gate:"try_compliance"};function y(){if(!t(v))return;const B=t(v).isDemo?L[t(v).flowId]:void 0;ns({},B)}function b(){if(!t(v))return;const B=t(v).isDemo?L[t(v).flowId]:void 0;ns({},B),ht("任务流已完成!","🎉")}function N(){fr(!1),ht("任务流已取消","任务流")}var M=Jt(),O=He(M);{var te=B=>{var P=mi(),S=He(P),q=s(S),R=s(q),re=s(R,!0);a(R);var w=r(R,2),X=s(w),Q=s(X),me=r(Q);{var $=j=>{var W=ci();m(j,W)};C(me,j=>{t(v).isDemo&&j($)})}a(X);var H=r(X,2),ee=s(H);a(H),a(w),a(q);var D=r(q,2);ut(D,23,()=>t(c).steps,j=>j.id,(j,W,_e)=>{var he=ui(),ue=He(he);let Ae;var Le=s(ue),Be=s(Le,!0);a(Le);var se=r(Le,2),ne=s(se,!0);a(se),a(ue);var fe=r(ue,2);{var pe=Ce=>{var De=di();let Se;I(()=>Se=Me(De,1,"tfw-step-line svelte-1myhquy",null,Se,{done:t(_e)+1<t(v).currentStep})),m(Ce,De)};C(fe,Ce=>{t(_e)<t(c).steps.length-1&&Ce(pe)})}I(()=>{Ae=Me(ue,1,"tfw-step svelte-1myhquy",null,Ae,{active:t(_e)+1===t(v).currentStep,done:t(_e)+1<t(v).currentStep}),ie(ue,"title",t(W).instruction),ie(ue,"aria-label",`跳转到步骤 ${t(_e)+1}: ${t(W).name}`),o(Be,t(_e)+1<t(v).currentStep?"✓":t(_e)+1),o(ne,t(W).name)}),E("click",ue,()=>pr(t(_e)+1)),m(j,he)}),a(D);var f=r(D,2),k=s(f),K=r(k,2);{var le=j=>{var W=vi();E("click",W,y),m(j,W)},ae=j=>{var W=pi();E("click",W,b),m(j,W)};C(K,j=>{t(v).currentStep<t(c).steps.length?j(le):j(ae,-1)})}var oe=r(K,2);a(f),a(S);var Z=r(S,2),T=r(s(Z),2),g=s(T,!0);a(T);var U=r(T,2),Y=s(U);a(U),a(Z),I(()=>{var j,W,_e;o(re,t(c).icon),o(Q,`${t(c).name??""} `),o(ee,`步骤 ${t(v).currentStep??""}/${t(c).steps.length??""}:${((j=t(x))==null?void 0:j.name)??""??""}`),k.disabled=t(v).currentStep===1,o(g,((W=t(x))==null?void 0:W.instruction)??""),o(Y,`完成条件:${((_e=t(x))==null?void 0:_e.completionHint)??""??""}`)}),E("click",k,function(...j){var W;(W=mr)==null||W.apply(this,j)}),E("click",oe,N),m(B,P)};C(O,B=>{t(v)&&t(v).status==="running"&&t(c)&&B(te)})}m(l,M),bt(),p()}yt(["click"]);var fi=h('<div class="llm-empty svelte-31w5ly"><p class="empty-title svelte-31w5ly">LLM 尚未配置</p> <p class="empty-hint svelte-31w5ly">请在「设置 → LLM 配置」中填写接口信息后使用。</p></div>'),hi=h('<div class="llm-empty svelte-31w5ly"><p class="empty-title svelte-31w5ly">有什么可以帮你？</p> <p class="empty-hint svelte-31w5ly">你可以询问 evorule 规则编写、解释、测试等问题。</p></div>'),gi=h('<div><div class="bubble svelte-31w5ly"> </div></div>'),bi=h('<div class="msg assistant svelte-31w5ly"><div class="bubble typing svelte-31w5ly">思考中…</div></div>'),yi=h("<!> <!>",1),wi=h('<div class="llm-error svelte-31w5ly"> </div>'),ki=h('<aside class="llm-sidebar svelte-31w5ly"><header class="llm-header svelte-31w5ly"><span class="llm-title svelte-31w5ly">LLM 助手</span> <button class="llm-clear svelte-31w5ly" title="清空对话">清空</button></header> <div class="llm-messages svelte-31w5ly"><!> <!></div> <footer class="llm-input svelte-31w5ly"><input type="text" placeholder="输入消息，Enter 发送" aria-label="LLM 对话输入" class="svelte-31w5ly"/> <button class="llm-send svelte-31w5ly">发送</button></footer></aside>');function xi(l,e){gt(e,!0);const n=()=>qe(pa,"$llmConfig",i),[i,p]=St(),v=`你是 evorule 规则工程工作台的智能助手，帮助用户编写、解释、测试 evorule JSON 规则集。

${Xn}

请用中文回答，言简意赅。回答规则相关问题时优先依据上述规范。`;let c=z(us([])),x=z(""),L=z(!1),y=z(null),b;Et(()=>{t(c),b&&requestAnimationFrame(()=>{b&&(b.scrollTop=b.scrollHeight)})});function N(){return $a(n())}async function M(){const f=t(x).trim();if(!f||t(L))return;if(!N()){u(y,"LLM 未配置，请在「设置 → LLM 配置」中填写 apiEndpoint + apiKey + model");return}const k=t(c).map(K=>({role:K.role,content:K.content}));u(c,[...t(c),{role:"user",content:f}],!0),u(x,""),u(L,!0),u(y,null);try{const K=n(),le=await Xa({apiEndpoint:K.apiEndpoint,apiKey:K.apiKey,model:K.model,userMessage:f,systemMessage:v,history:k,temperature:.4,auditPurpose:"chat"});u(c,[...t(c),{role:"assistant",content:le}],!0)}catch(K){u(y,K.message,!0)}finally{u(L,!1)}}function O(){u(c,[],!0),u(y,null)}function te(f){f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),M())}var B=ki(),P=s(B),S=r(s(P),2);a(P);var q=r(P,2),R=s(q);{var re=f=>{var k=fi();m(f,k)},w=Ke(()=>!N()),X=f=>{var k=hi();m(f,k)},Q=f=>{var k=yi(),K=He(k);ut(K,17,()=>t(c),ms,(oe,Z)=>{var T=gi();let g;var U=s(T),Y=s(U,!0);a(U),a(T),I(()=>{g=Me(T,1,"msg svelte-31w5ly",null,g,{user:t(Z).role==="user",assistant:t(Z).role==="assistant"}),o(Y,t(Z).content)}),m(oe,T)});var le=r(K,2);{var ae=oe=>{var Z=bi();m(oe,Z)};C(le,oe=>{t(L)&&oe(ae)})}m(f,k)};C(R,f=>{t(w)?f(re):t(c).length===0?f(X,1):f(Q,-1)})}var me=r(R,2);{var $=f=>{var k=wi(),K=s(k,!0);a(k),I(()=>o(K,t(y))),m(f,k)};C(me,f=>{t(y)&&f($)})}a(q),ys(q,f=>b=f,()=>b);var H=r(q,2),ee=s(H);Ye(ee);var D=r(ee,2);a(H),a(B),I((f,k)=>{ee.disabled=f,D.disabled=k},[()=>!N(),()=>t(L)||!t(x).trim()||!N()]),E("click",S,O),E("keydown",ee,te),Xt(ee,()=>t(x),f=>u(x,f)),E("click",D,()=>void M()),m(l,B),bt(),p()}yt(["click","keydown"]);const Ei=`<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- Copyright (C) 2026 EvoRule Project -->

# 架构决策记录（ADR）

> 记录 evorule-console-cloud 项目中**重要的架构决策**及其历史。

## 什么是 ADR

ADR（Architecture Decision Record）是一种轻量级文档，记录：

- 我们面临什么问题
- 考虑了哪些方案
- 最终选了哪个、为什么
- 选完后带来哪些后果

每一份 ADR 都是**不可变的历史快照**。决策若变更，写新 ADR 并 supersede 旧的，**不要回头改旧文件**。

## 写作规范

- **文件名**：\`NNNN-kebab-case-title.md\`，序号单调递增，不重用
- **模板**：复制 [template.md](./template.md) 开始写
- **状态**：Proposed → Accepted → （Deprecated | Superseded by ADR-XXXX）
- **完成后**：把新 ADR 链接加进下方目录

## 目录

（暂无，等第一个 ADR 落地后补）

## 何时写 ADR

- 选了某个框架 / 库 / 语言版本（如“为什么用 SvelteKit 5 runes”）
- 引入或修改了**架构层面**的设计（如“LLM 只生成草案 + 人工确认”）
- 改变了产品边界或外部接口（如“增加 L2 本地 LLM 模式”）
- 拒绝了某个看似合理的方案（如“不做实时协作编辑，理由是 …”）

**不要**为琐碎的实现细节写 ADR（变量命名、内部重构不算）。
`,Si=`<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- Copyright (C) 2026 EvoRule Project -->

# ADR-XXXX：<决策标题，一句话说清>

- **状态**：Proposed | Accepted | Deprecated | Superseded by ADR-YYYY
- **日期**：YYYY-MM-DD
- **决策者**：<谁拍板>
- **知情人**：<谁被通知，可选>

## 背景与问题

<用 2-3 句话或一个具体场景描述：我们遇到什么问题、为什么要现在决定。>

## 决策驱动力

- <驱动力 1，如：性能、复杂度、合规、用户体验、依赖锁定>
- <驱动力 2>
- …

## 候选方案

1. <方案 A>
2. <方案 B>
3. <方案 C>

## 决策结果

**选择方案 <X>**，因为 <核心理由，1-2 句话>。

### 后果

- 好的方面：<…>
- 不好的方面：<…>
- 如何缓解负面影响：<…>

### 验证方式

<上线后怎么验证这个决策是对的？>

- 指标：<…>
- 复盘时间点：<…>
- 触发回滚的条件：<…>

## 各方案利弊

### 方案 A

- 优点：<…>
- 缺点：<…>

### 方案 B

- 优点：<…>
- 缺点：<…>

### 方案 C（可选）

- 优点：<…>
- 缺点：<…>

## 更多信息

<相关链接、参考、commit hash、issue 链接等>
`,Ai="# 单发桥接协议契约说明（audit-bridge / demo-svc）\n\n> 性质：**契约说明文档**，非可装载规则集（2026-09-03，处置）。\n> 背景：`call_external` / `call_service` **单发桥接协议已归引擎单一权威**（server 业务规则集 `resources/server_eval.json`（v0.4.1 前旧名 `core_eval.json`），为系统规则，不容退让）。此前 console-cloud 自持的同名 transform（`assets/evorule-rules/llm-audit-bridge.json`、`demo-svc.json`）与引擎桥接重复注册，导致双规则顺序执行、LLM 调用循环 / 服务自治循环（）。本文件仅记录协议语义与消费范式，供接入方与教学参考，**不进入 --rules-dir 装载路径**。\n\n## 一、单发桥接协议（系统规则，归引擎 core_eval）\n\n适用指令：`call_external`（LLM 调用）、`call_service`（内置/注册服务调用）。\n\n执行形态（无→有 两段，单个桥接）：\n1. **无结果**：`exists(__exec__.payload.__io_results__.<io_type>)` 为 false → 发射 `io_request`（`io_type` 透传，call_external 透传 `messages`/`tools`，call_service 透传 `service_name`/`args`），反应器置 pending，等待外部/内部应答。\n2. **有结果**：收到 `io_response` 后引擎注入结果到 `__io_results__.<io_type>` → 重推原指令，执行 `on_true` 分支消费结果到业务字段（call_external→`llm_response`，call_service→`service_result`）→ **清除 `__io_results__.<io_type>`**（JSON null，exists 视为不存在）→ push `noop` 收敛 Stable。\n\n关键纪律（防止重影/循环）：\n- **单一权威**：单发桥接只由引擎 core_eval 定义；消费方不得再自持同名桥接 transform。\n- **消费方职责**：仅做协议客户端——发命令 → 订阅 SSE 收 `io_request` → 本地执行 → `POST /api/sessions/{id}/io_response` 应答 → 等 `Stable`。\n- 应答必须使用引擎返回的 `io_request.id`；失败也要回写 error 形态的 io_response，不留悬空 IoRequest。\n\n## 二、消费范式（console-cloud 参考实现）\n\n- LLM 审计桥：`src/lib/assistant/audited-llm.ts`（发 `call_external` 命令 → 收 IoRequest → 本地调 LLM → 回 io_response，结果入 `payload.llm_response`）。\n- 服务调用示例：原 `demo-svc.json` 演示的 `call_service`（`service_name=inverse_kinematics_solver` 等原生 demo 服务）由引擎桥接 + IoSubscriber 应答，命令见示例仓库 scenarios。\n\n## 三、验收\n\n- 端到端验收脚本 `scripts/validate-audit-bridge.mjs`（10 项）现锚定**引擎桥接**：create_session → IoRequest(messages 透传) → io_response → Stable 收敛 → llm_response 落 payload → 审计链（Command 事实 / IoResponse 事实）完整。\n- 运行前置：`evorule-server --rules-dir <仅含 scenario-*> rules/`（不含重复桥接 transform）。\n",Li=`<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- Copyright (C) 2026 EvoRule Project -->

# evorule-console-cloud 开发者指南

> **读者**：要参与本仓开发的新人（人或 LLM 协作者）。
> **范围**：架构、启动、一次完整产品流程、核心概念、代码地图、坑表。
> **不属于这里**：终端用户上手看 [tutorial/](./tutorial/)；启停细节看仓库根 [README-STARTUP.md](../../README-STARTUP.md)。

---

## 一、这套系统是什么

evorule-console-cloud 是 evorule 生态的**大众版前端 + 联调编排层**。它自己不是引擎，而是把两个 Rust 后端的服务组织成一个产品：

\`\`\`
                    浏览器 http://localhost:5174
                            │
             ┌──────────────┴──────────────┐
             │   console-cloud (Vite dev)  │   SvelteKit SPA
             └──────┬───────────────┬──────┘
                    │ REST          │ REST
        ┌───────────▼──┐      ┌─────▼─────────────┐
        │ evorule-rule │      │ evorule-server    │
        │   :18081     │      │   :18080          │
        │  治理域       │      │  执行域            │
        └──────────────┘      └───────────────────┘
        evorule-rule\\data\\       rules/ + core_eval
        rule.db                  会话执行 + WAL 审计链
        数据集/条目/生命周期
\`\`\`

| 进程 | 端口 | 职责 | 仓 |
|---|---|---|---|
| console-cloud dev | 5174 | 前端 SPA（工作台/治理/审计视图） | 本仓 |
| evorule-rule-serve | 18081 | **治理域**：规则数据集、条目、版本、生命周期、快照导出 | evorule-rule 仓 |
| evorule-server | 18080 | **执行域**：会话执行引擎、bundle 导入、事实链/审计 | evorule-server 仓 |

**铁律**：上层应用（含本前端）禁止直连 evorule 核心仓（D:\\evorule 的 crate），一切调用必须过 server 层或 rule-serve 的 HTTP 门禁。

**三个仓的目录约定**（start-all.ps1 按兄弟目录推导 binary 路径）：

\`\`\`
<父目录>/
├── evorule-console-cloud/   ← 本仓
├── evorule-server/          ← target/(debug|release)/evorule-server.exe
└── evorule-rule/            ← target/(debug|release)/evorule-rule-serve.exe
\`\`\`

---

## 二、首次跑起来

### 前置条件

- Node.js（npm install 可用）
- Rust 工具链（cargo，用于编译两个后端）
- 三个仓按上面的兄弟目录摆好（或用环境变量覆盖 binary 路径）

### 步骤

\`\`\`powershell
# 1. 编译两个后端（首次 ~30 分钟，debug 即可）
cd <evorule-server 仓根>; cargo build
cd <evorule-rule 仓根>;   cargo build

# 2. 装前端依赖
cd <本仓根>; npm install

# 3. 一键起全栈（三进程按序拉起，等端口就绪后自动开浏览器）
.\\start-all.bat
\`\`\`

\`start-all.ps1\` 做了什么：先检测端口，已占用则认为在运行并跳过；未占用则启动并等就绪。日志统一落 \`logs\\\`（每轮转存 \`.prev\`，只保留两轮）。

**手动起单个服务时注意**：evorule-server 裸起**不会工作**——必须带 \`--rules-dir\`/\`--core-eval\`/\`--service-registry\` 等资源参数（默认参数见 start-all.ps1）；evorule-rule 联调要带 \`--allowed-origins\`（见坑表 #1）。

### 验证

- 浏览器 \`http://localhost:5174/\` 打开首页
- 治理页 http://localhost:5174/governance 能连上 18081（首次需引导管理员，见下）
- \`.\\status-all.ps1\` 三服务全绿

### 首次引导治理管理员

evorule-rule 的 rule.db 初始为空，需带参数引导（公开仓不硬编码凭据）：

\`\`\`powershell
$env:EVORULE_RULE_ARGS = '--host 127.0.0.1 --port 18081 --db C:\\path\\to\\rule.db --admin-user <名字> --admin-password <你的密码> --allowed-origins http://localhost:5174'
.\\start-all.bat
\`\`\`

### 停止

\`\`\`powershell
.\\stop-all.bat
# 或只清前端端口（e2e 残留僵尸进程常见）
npm run clean
\`\`\`

---

## 三、一次完整的产品流程（主线走读）

这是理解产品最重要的部分——规则从「写出来」到「被执行并留痕」的一生：

**① 治理建库**（:18081）：治理页连接后，建数据集（Dataset）→ 录入条目（规则条款）→ 生命周期推进（Draft → Candidate → Active）→ 发布（Published）。
数据集需带**法规锚 law_ref**（document_id + effective_from）——auto_by_effective_date 模式缺生效基准会在发布/部署时被前置校验 400 拦截（这是有意的闸门，不是 bug）。

**② 部署到执行域**（治理页「🚀 部署到执行域」按钮）：
\`POST /v1/bundles/export\`（治理侧导出快照包，含人工确认背书）→ \`POST /api/bundles/import\`（执行侧 8 项校验）→ 原子落盘 \`evorule-server/rules/bundles/\` → 自动 reload → 新会话生效。

**③ 执行与审计**（:18080）：工作台（或演示模式）新建会话 → 提交业务指令（instruction + payload）→ 引擎按「宪法 core_eval + 规则集」合并为单一顺序 transform 程序执行 → 结论落 payload.data，全程事实入 session_N.wal 审计链（哈希链，可回放验证）。

**④ 角色与权限**：平台账号登录（存于 evorule-server，Argon2id + 审计）；内置 4 角色，权限矩阵 ≤30 秒生效；受保护域（\`stable.llm.*\`/\`stable.system.*\`）写入仅 service token 可用。

三层分类贯穿全程，归属必须清晰：

| 层 | 是什么 | 载体 |
|---|---|---|
| 系统规则 | 系统自身运行规则，非用户资产 | TCB 宪法 + server 桥接规则集 |
| 用户规则 | 用户资产，达成业务目的 | 治理库数据集 → bundle → rules/ 目录 |
| 用户数据 | 业务指令与结论，只产生于会话 | params（输入）→ payload.data（结论）→ WAL（留痕） |

---

## 四、核心概念速查

- **治理域 vs 执行域**：位置视角。治理域（rule-serve）管规则的「生产与审批」；执行域（server）管规则的「装载与运行」。发布链是两者之间唯一的正门。
- **数据集生命周期**：5 态 Draft → Candidate → Active → Published（+ Rejected 旁路），状态机由治理侧强制，不可跳级。
- **bundle**：治理数据集的不可变快照（含版本、条目、BLAKE3 哈希）。执行域只认 bundle，不认治理库。
- **宪法（core_eval）+ 规则集**：执行时合并为单一顺序 transform，宪法在前、rules 按文件名字典序；无匹配规则即 Error 事实（不静默兜底）。
- **审计链**：每会话一个 WAL 文件，Command → StateTransition → Stable 哈希链，可离线验证。
- **后端注入**：前端通过 Svelte context 拿 ExecutionBackend（[backend-context.ts](../../src/lib/kernel/backend/backend-context.ts)），默认 HttpBackend，测试注入 MockBackend——换后端只改 root 一处。

---

## 五、代码地图

\`\`\`
src/
├── routes/            # 页面（SvelteKit）
│   ├── workbench/     #   工作台（会话执行、审计视图、用户/角色管理入口）
│   ├── governance/    #   治理（数据集/条目/生命周期/部署到执行域/法规锚编辑）
│   ├── audit/ monitor/ users/ roles/ ...   # 各管理视图
│   └── login/         #   演示模式 + 平台登录
├── lib/
│   ├── kernel/        # 执行内核前端侧：backend 抽象、会话、指令提交
│   │   └── backend/   #   ExecutionBackend 接口 + Http/Mock 实现（context 注入）
│   ├── governance/    # 治理域客户端：backend/store/types（数据集、生命周期、bundle 导出）
│   ├── backend/       # 工作台后端通道：cloud/mock 双实现、平台认证
│   ├── views/         # 视图组件
│   └── components/    # 通用组件
└── scripts/           # dev.mjs（交互式启动）、clean-ports、validate-audit-bridge 等
\`\`\`

## 六、常用命令

\`\`\`powershell
npm run dev          # 起 dev server（含端口占用检测与交互清理）
npm run check        # svelte-check（提交前必须 0 错误）
npm run test:unit    # vitest 单测
npm test             # playwright e2e（先自动清端口）
npm run verify       # 校验套件
npm run lint:tokens  # 设计令牌 lint
node scripts/validate-audit-bridge.mjs   # 审计桥端到端 10 项验收
\`\`\`

---

## 七、坑表（每条都是实测换来的）

按「症状 → 原因 → 修复」组织。新人遇到问题先查这里。

**#1 治理页连不上 18081 / 浏览器 CORS 拦截**
\`start-all.ps1\` 默认 \`RULE_ARGS\` 不带 \`--allowed-origins\`，手动重启 rule-serve 也容易漏。rule-serve 缺省走严格同源，跨端口前端全被拦。
修复：\`$env:EVORULE_RULE_ARGS\` 里补 \`--allowed-origins http://localhost:5174\` 再 start-all（见 README-STARTUP.md「后端启动参数」）。

**#2 \`127.0.0.1:5174\` 打不开，\`localhost:5174\` 能**
Vite dev 默认 listen IPv6 \`::1\`。用 \`localhost\` 或 \`http://[::1]:5174/\`；start-all 的端口检测已双栈兼容。

**#3 端口 5174 被占用 / e2e 后起不来**
playwright 测试残留僵尸进程。\`npm run clean\` 或让 \`npm run dev\` 的交互清理流程处理。

**#4 Svelte \`lifecycle_outside_component\` 崩溃**
\`getContext\`/\`useBackendOrNull()\` 等只能在组件初始化期同步调用；在异步回调（按钮 handler、await 之后）里调用即崩。
修复：组件顶层先取好 context 存变量，回调里用缓存。

**#5 发布数据集被 400 拦：「auto_by_effective_date 模式需生效基准」**
数据集 law_ref 缺 effective_from。这是治理侧三层前置闸门（创建/更新/发布期 fail-fast），不是 bug。
修复：治理页「法规锚(law_ref)」区块补齐（或 PATCH /v1/datasets/{id}），或把 version_selection 切 pinned。

**#6 手动起 evorule-server 后 18080 无响应**
裸起缺 \`--rules-dir\`/\`--core-eval\`/\`--service-registry\` 资源参数。用 start-all.ps1 或照抄其默认参数。

**#7 rule.db 管理员密码忘了**
不可恢复（哈希存储）。幂等引导一个新的管理员账号即可，不破坏既有数据（见「首次引导治理管理员」）。

**#8 写 .bat 脚本中文乱码 / 命令被吃**
cmd 按 ANSI 代码页预解析。启动类 .bat 必须纯 ASCII；PowerShell 文件注意 BOM（不要重复叠加）。

**#9 浏览器自动化验证「按钮禁用」误报**
自动化代理对 disabled 状态的读取偶发误报。裁定争议以 DOM 实际属性为准（快照 + 属性断言双确认）。

**#10 执行域行为「不生效」**
bundle 导入后只对**新会话**生效；老会话不回放新规则。验证部署是否落盘：看 \`evorule-server/rules/bundles/\` 目录 + server 日志三连（落盘 → core_eval replaced → reload）。

---

## 八、文档分工

| 文档 | 受众 |
|---|---|
| 本文档 | 开发者（架构/流程/坑） |
| [tutorial/](./tutorial/) + [scenarios/](./scenarios/) | 终端用户上手 |
| [README-STARTUP.md](../../README-STARTUP.md) | 启停/看门狗/日志细节 |
| [adr/](./adr/) | 架构决策记录 |
| [explanation/](./explanation/) | 概念与原理（规划中） |
`,Ci=`<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- Copyright (C) 2026 EvoRule Project -->

# explanation/ — 原理与设计讨论

> **面向想理解“为什么”的开发者**：设计动机、概念讨论、权衡。

适合：用着没问题，但想理解背后想法的人；做新设计前的参考资料。

## 写什么

- 为什么这么设计 / 不那么设计
- 概念之间的关系、术语定义
- 历史演变、曾考虑过但放弃的方案

## 不要写在这里

- ❌ “怎么用” → 去 [tutorial/](../tutorial/) 或 [how-to/](../how-to/)
- ❌ API 字段说明 → 去 [reference/](../reference/)
- ❌ 重要决策的正式记录 → 去 [adr/](../adr/)（ADR 是**不可变历史**，explanation 是**讨论**）

## 命名规范

\`主题-副题.md\`（如 \`why-blake3-audit-chain.md\`、\`rule-as-data.md\`），
文件名可以透露“立场”，比如带 \`why-\` 前缀。
`,Pi=`<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- Copyright (C) 2026 EvoRule Project -->

# how-to/ — 任务式指南

> **面向有具体问题要解决的开发者**：“我想做 X，怎么搞？”

适合：已经会用 evorule-console-cloud，卡在某个具体任务上的人。

## 写什么

- 目标明确（标题就是“如何 XXX”）
- 步骤紧凑，直奔主题
- **可以**假设读者已经懂基本概念

## 不要写在这里

- ❌ 从零开始的入门教程 → 去 [tutorial/](../tutorial/)
- ❌ 完整 API 列表 → 去 [reference/](../reference/)
- ❌ 概念讨论、设计动机 → 去 [explanation/](../explanation/)

## 命名规范

\`动词-对象.md\`（如 \`connect-evorule-server.md\`、\`export-audit-report.md\`），
**不**带日期或版本号 —— 文件是“长期有效”的任务说明。
`,$i=`<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- Copyright (C) 2026 EvoRule Project -->

# 如何使用工作台(/workbench)

> 极简首页 — Dashboard 风格,5 个 region 一屏看清一切。详细设计见 [workbench.md](../workbench.md)。

## 5 个 Region 速查

| Region | 用途 | 关键交互 |
|---|---|---|
| 1. 顶部状态条 | server/rule 连接 + workspace + 模式 | \`🔄 刷新\` / \`📋 4 引导任务\` 按钮 |
| 2. 4 统计卡 | 规则 / Sessions / 待审 / 最近 fact | 整张卡可点跳详情 |
| 3. 一键操作 | 加规则 / 试运行 / LLM 快速 | 3 tabs,表单在下方 |
| 4. 最近活动 | 当前 session 的 audit 最近 8 条 | 时间 \`#N\` / 颜色 (绿=命令/蓝=验证/黄=其它) |
| 5. 跳单页 | 8 常用页一键跳 | 治理 3 项未登录显示 🔒 锁 |

## 何时该看工作台

- **刚启动全栈** — 看状态条,确认 server/rule 都连上
- **新用户上手** — 5 region 涵盖最常用操作
- **日常巡检** — 一屏看清 3 件事:连接状态 / 待审数 / 最近活动
- **发现异常** — "最近 FACT" 卡显示 #N 时,直接点跳审计查

## 何时该跳单页(不用工作台)

- **深度操作**:在工作台做"加规则"只是应急,真正建复杂规则集去 \`/view/rules\`
- **长 session 操作**:执行台长时间调试,用 \`/view/execution\` 全屏
- **审计细节**:时间旅行/因果链分析,去 \`/view/audit\` / \`/view/timetravel\`

## 不会自动做的事

工作台**不**做的事(避免越界):

- ❌ 不持久化 tab 状态(刷新回"加规则" tab)
- ❌ 不接管路由守卫(点跳治理页仍受后端守卫保护)
- ❌ 不实现键盘快捷键(顶栏 \`Ctrl+K\` 搜索,搜索结果未跳到 workbench)
- ❌ 不监控后台进程(只反映"现在能不能连上",30 min 杀问题靠 nssm 服务化)

## 已知待修

- Region 3 加规则仅支持 \`"type": "set"\`,call/conditional 等 type 模板待加
- Region 4 activity 时间显示 \`fact #N\`(logical_time),需从 audit 拉 wall-clock
- Region 5 治理页"需登录"判断靠前端,后端路由守卫做最终拦截
- 不持久化 tab 状态
- 无键盘快捷键
- Region 1 ruleConnected 是间接探测(\`listWorkspaces\`),不是原生 health endpoint
`,Ii=`<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- Copyright (C) 2026 EvoRule Project -->

# 如何启动/停止 evorule 全栈

> 一键启停 — 双击或命令行。解决"多 cd / 多后端分散 / 后台进程被中断"的运维痛点。

## 三种使用方式

### 方式 1 · 桌面快捷(推荐,一次性配置)

**第一次**:在 \`evorule-console-cloud\` 仓根目录双击 \`install-shortcut.bat\` 创建桌面快捷。
- 生成 \`evorule-start.lnk\`(绿色启动图标)
- 生成 \`evorule-stop.lnk\`(红色停止图标)

**之后**:双击桌面图标即可。

### 方式 2 · 仓根目录双击

- \`start-all.bat\` — 启全栈 + 自动开浏览器到 \`/\`(evorule 首页)
- \`stop-all.bat\` — 停全栈

### 方式 3 · PowerShell 命令行

\`\`\`powershell
cd <evorule-console-cloud 仓根目录>
.\\start-all.bat
# 或绕过 ExecutionPolicy:
powershell -ExecutionPolicy Bypass -File .\\start-all.ps1
\`\`\`

---

## 启动顺序

\`start-all.ps1\` 按以下顺序启动(每步等端口就绪):

1. **evorule-server @ 18080** — 仓根目录的 \`target/debug/evorule-server.exe\`(或 \`target/release/\`)
2. **evorule-rule-serve @ 18081** — 仓根目录的 \`target/debug/evorule-rule-serve.exe\`
3. **console-cloud dev @ 5174** — \`node scripts/dev.mjs\`

全部就绪后,自动打开浏览器 \`http://127.0.0.1:5174/\`(evorule 首页)。

\`start-all.ps1\` 会**先检测**端口是否已被占用:
- 已被占用 → 跳过启动(认为已在运行)
- 未被占用 → 启动并等待

---

## 端口速查

| 端口 | 服务 | 进程 |
|---|---|---|
| 18080 | evorule-server(执行引擎) | evorule-server.exe |
| 18081 | evorule-rule(规则库/沙盒/治理) | evorule-rule-serve.exe |
| 5174 | console-cloud dev(Vite) | node.exe |

Vite dev 默认 listen \`::1\`(IPv6 localhost),所以 \`127.0.0.1:5174\` 在某些机器上访问不到 — 用 \`localhost:5174\` 或 \`http://[::1]:5174/\`。\`start-all.ps1\` 的端口检测已双栈兼容。

---

## 故障排查

### 端口被占用

\`\`\`
=== [1/3] evorule-server @ 18080 ===
  [OK] evorule-server already running (PID 7272, port 18080)
\`\`\`

如果旧实例卡死,先 \`stop-all.bat\` 再 \`start-all.bat\`。

### binary 不存在

\`\`\`
=== [1/3] evorule-server @ 18080 ===
  [ERR] evorule-server binary not found: ...target/debug/evorule-server.exe
  [WARN] Need to build first: cd to repo root, run 'cargo build'
\`\`\`

编译对应仓:

\`\`\`powershell
cd <evorule-server 仓根目录>
cargo build           # debug, ~30 min 首次
# 或
cargo build --release # release, 更慢但启动快
\`\`\`

### dev server 启动失败

看仓根目录的 \`.dev-stdout.log\` / \`.dev-stderr.log\`,常见原因:
- 5174 端口被旧 vite 占用 → \`stop-all.bat\` 清
- \`node_modules\` 缺失 → \`cd <仓根目录> && npm install\`
- 5174 已被其它程序占(本机其它项目)→ 改 \`start-all.ps1\` 顶部的端口常量

### 服务异常退出

\`start-all.bat\` **不**做"健康检查 + 自动重启"。异常退出后,需手动 \`start-all.bat\` 再启。

长期方案:用 [nssm](https://nssm.cc/) 把 \`node scripts/dev.mjs\` 装成 Windows 服务(脱离自动化任务管理器,避免被中断)。

---

## 配置 binary 路径

如果 binary 路径不在默认位置,改 \`start-all.ps1\` 顶部的常量:

\`\`\`powershell
$SERVER_EXE = '<evorule-server 仓根>\\target\\debug\\evorule-server.exe'
$RULE_EXE   = '<evorule-rule 仓根>\\target\\debug\\evorule-rule-serve.exe'
$DEV_DIR    = '<evorule-console-cloud 仓根>'
\`\`\`

也可以改成 release 路径(更快启动,但需要 \`cargo build --release\`):
\`\`\`powershell
$SERVER_EXE = '<evorule-server 仓根>\\target\\release\\evorule-server.exe'
$RULE_EXE   = '<evorule-rule 仓根>\\target\\release\\evorule-rule-serve.exe'
\`\`\`

---

## 日志位置

- \`<仓根目录>\\.dev-stdout.log\` — vite dev 输出
- \`<仓根目录>\\.dev-stderr.log\` — vite dev 错误
- evorule-server / evorule-rule 的日志:各自 stdout(本脚本用 \`WindowStyle=Hidden\` 隐藏,如需调试可改为 \`Normal\`)

---

## 已知限制

- 后台 dev server 在某些自动化运行环境下可能受 30 分钟最大运行时长限制
  - 解决:用 nssm 把 \`node scripts/dev.mjs\` 装成 Windows 服务(后续 todo)
  - 或:用 \`start-all.bat\` 频繁重启(临时方案)
- \`WindowStyle=Hidden\` 隐藏后,服务异常时看不到输出 → 看 \`.dev-*.log\`
- 未做"启动失败时回滚"逻辑(已启动的后端不会自动停)
- 没有"健康检查 + 自动重启"循环(异常退出后需手动 \`start-all.bat\` 再启)
`,Ti=`<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->\r
<!-- Copyright (C) 2026 EvoRule Project -->\r
\r
# evorule-console-cloud 文档导航\r
\r
> 本目录是 evorule-console-cloud 的**公开文档**，按 [Diátaxis](https://diataxis.fr/) 框架组织。\r
> 四类文档各司其职，不要混在一起写。\r
\r
## 四类文档，各取所需\r
\r
| 你想做什么 | 看哪里 | 用途 |\r
|---|---|---|\r
| 第一次接触，想跑通 | [tutorial/](./tutorial/) | 手把手教学，一步一步带你完成 |\r
| 有具体问题要解决 | [how-to/](./how-to/) | 任务式指南，以问题为导向 |\r
| 查 API / 配置 / 命令 | [reference/](./reference/) | 字典式参考，准确但无解释 |\r
| 想理解为什么这么设计 | [explanation/](./explanation/) | 概念与原理，讨论式 |\r
\r
**不知道该看哪类？** 先问自己：“我在学 / 我在解决 / 我在查 / 我在理解？” —— 对应到上面四类之一。\r
\r
## 补充目录\r
\r
- [developer-guide.md](./developer-guide.md) — 开发者指南：架构、启动、产品主流程走读、代码地图、坑表（新人与 LLM 协作者先读这份）\r
- [adr/](./adr/) — 架构决策记录（ADR），记录重要技术决策与历史\r
- [operations/](./operations/) — 构建、部署、测试、运维\r
\r
## 内部文档\r
\r
不需要公开的过程文档、验收报告、规划草稿存放在仓库根的 \`文档/\` 目录（已在 \`.gitignore\` 中，**不入版本**）。\r
`,Mi=`<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- Copyright (C) 2026 EvoRule Project -->

# operations/ — 运维与发布

> **面向部署、测试、发布、运维的开发者**。

## 写什么

- 构建命令、CI/CD 配置说明
- 测试策略、test runner 使用
- 发版流程、release checklist
- 监控、告警、备份、灾难恢复（runbook）

## 不要写在这里

- ❌ 用户/开发者使用文档 → 去 [tutorial/](../tutorial/) 或 [how-to/](../how-to/)
- ❌ 架构决策与原理 → 去 [adr/](../adr/) 或 [explanation/](../explanation/)

## 命名规范

\`主题.md\`（如 \`testing.md\`、\`build-and-deploy.md\`、\`release-process.md\`），
**不**带日期 —— 流程变了改文件，不改文件名。
`,qi=`<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- Copyright (C) 2026 EvoRule Project -->

# reference/ — 字典式参考

> **面向需要查阅确切信息的开发者**：API、CLI、配置项、字段。

适合：用的时候翻一翻，看完就走，不需要从头读到尾。

## 写什么

- **准确、完整**：字段、类型、默认值、约束
- **简洁、无废话**：不解释为什么，只写“是什么”
- **尽量自动生成**：API/CLI 文档从代码或注解生成，**不**手抄

## 不要写在这里

- ❌ 教程式引导 → 去 [tutorial/](../tutorial/)
- ❌ 任务步骤 → 去 [how-to/](../how-to/)
- ❌ “为什么这么设计” → 去 [explanation/](../explanation/)

## 命名规范

按“对象”命名（API 名 / CLI 子命令 / 配置文件名），**不**按“任务”命名。
`,Di=`<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- Copyright (C) 2026 EvoRule Project -->

# 场景 1 · 合同条款校验（付款前提缺失即阻断）

## 业务语义

财务付款前自动核验合同条款：**合同已签署 + 审批单存在 + 金额低于 10 万**三条前提同时满足才放行；任一缺失即阻断，并写明阻断原因。

对应规则：[rules/contract-payment-guard.json](./rules/contract-payment-guard.json)

## 预期执行结果

提交业务指令后，指令参数落在 \`payload.data\`，判定结果写回 \`payload.data.payment\`：

| 业务指令（params） | 预期输出（data.payment） |
| --- | --- |
| 合同已签 + 审批单在 + 金额 88000 | \`status = "approved"\` |
| 合同未签（\`signed: false\`），其余同上 | \`status = "blocked"\` + \`block_reason = "付款前提缺失：需合同已签 + 审批单存在 + 金额低于 100000"\` |
| 金额 100000（等于上限） | \`status = "blocked"\`（规则为"低于 10 万放行"，等于不放行） |

## 验证步骤

1. 「执行台」→ 新建会话
2. 命令提交区粘贴业务指令（合同已签、88000 元）：

\`\`\`json
{"type":"contract_payment_check","params":{"contract":{"signed":true},"approval_id":"AP-2026-0042","payment":{"amount":88000}}}
\`\`\`

3. 「状态」视图：应看到 \`data.payment.status = "approved"\`
4. 把 \`signed\` 改为 \`false\`，**新建会话**再提交 → 应看到 \`status = "blocked"\` 和阻断原因
5. 「审计」页：两次判定各有一条事实链记录，含哈希、不可篡改

> 也可以走 API（见 [README](./README.md) 的 curl 示例）：\`POST /api/sessions\` → \`POST .../command\` → \`GET .../state\`。
`,Ri=`<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- Copyright (C) 2026 EvoRule Project -->

# 场景 2 · 报销合规检查（超标审批链 / 发票重复）

## 业务语义

报销单两道检查：**重复发票直接驳回**（不再进入金额判断）；非重复的按金额分流——**5000 元以下自动通过，5000 元及以上升级到部门主管审批链**。

对应规则：[rules/expense-compliance.json](./rules/expense-compliance.json)

## 预期执行结果

提交业务指令后，判定结果写回 \`payload.data.expense\`：

| 业务指令（params） | 预期输出（data.expense） |
| --- | --- |
| 金额 4320，非重复发票 | \`decision = "auto_approved"\` |
| 金额 5000，非重复发票 | \`decision = "manager_approval_needed"\` + \`escalate_to = "部门主管审批队列"\` |
| \`duplicate: true\`（金额随意） | \`decision = "rejected"\` + \`reject_reason = "发票重复：同一发票号已存在报销记录"\` |

注意第三行：重复发票在第一道检查就被驳回，金额规则不会覆盖该结论。

## 验证步骤

1. 「执行台」→ 新建会话
2. 命令提交区粘贴业务指令：

\`\`\`json
{"type":"expense_compliance_check","params":{"expense":{"amount":4320,"category":"travel"},"invoice":{"duplicate":false}}}
\`\`\`

3. 「状态」视图：应看到 \`data.expense.decision = "auto_approved"\`
4. 三组输入逐一对照上表（每组输入**新建会话**后提交；第 2、3 组只需改 \`params\` 里的字段）
5. 「审计」页观察判定事实链；换输入重跑，结果完全一致——确定性
`,ji=`<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- Copyright (C) 2026 EvoRule Project -->

# 场景 3 · 设备巡检告警（阈值联动 / 升级上报）

## 业务语义

产线传感器巡检判定：**温度 ≥ 80°C 触发告警并升级上报值班主管**（低于为正常）；**振动 ≥ 5 mm/s 标记异常**。两项独立判定、互不影响。

对应规则：[rules/equipment-inspection.json](./rules/equipment-inspection.json)

## 预期执行结果

提交业务指令后，判定结果写回 \`payload.data.inspection\`：

| 业务指令（params.sensor） | 预期输出（data.inspection） |
| --- | --- |
| 温度 83，振动 5 | \`alarm_level = "escalate"\` + \`escalate_to = "值班主管工单队列"\`，\`vibration_status = "abnormal"\` |
| 温度 79，振动 9 | \`alarm_level = "normal"\`，\`vibration_status = "abnormal"\` |
| 温度 76，振动 3 | \`alarm_level = "normal"\`，\`vibration_status = "normal"\` |
| 温度 80（等于阈值），振动 5 | \`alarm_level = "escalate"\`（规则为"低于 80 正常"，等于触发） |

## 验证步骤

1. 「执行台」→ 新建会话
2. 命令提交区粘贴业务指令：

\`\`\`json
{"type":"equipment_inspection_check","params":{"sensor":{"temperature":83,"vibration":5}}}
\`\`\`

3. 「状态」视图：应看到 \`data.inspection.alarm_level = "escalate"\` 与升级去向
4. 四组输入逐一对照上表（每组输入**新建会话**后提交；改 \`temperature\`/\`vibration\` 即可）
5. 把温度从 79 改到 80 再执行，观察告警状态的跳变——阈值是显式写在规则里的，不是黑盒
`,Ni=`<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- Copyright (C) 2026 EvoRule Project -->

# 场景 4 · AI 合规门禁（未 MFA 阻断工具调用，衔接既有叙事）

## 业务语义

AI Agent 的每个工具调用先过合规门禁：**未通过 MFA 验证的调用 → 阻断并写明留痕说明**；已验证则放行。门禁策略显式写在规则里（如只对资金类操作强制 MFA），按需自行调整——判定本身是确定性规则，执行即上审计链，这就是"给 AI 装行车记录仪"的最小形态。

对应规则：[rules/ai-mfa-gate.json](./rules/ai-mfa-gate.json)

## 预期执行结果

提交业务指令后，判定结果写回 \`payload.data.request\`：

| 业务指令（params.request） | 预期输出（data.request） |
| --- | --- |
| \`action = "transfer"\`，\`mfa_verified = false\` | \`gate_decision = "blocked"\` + \`gate_note = "等保 2.0 三级 §8.1.4.1.d：资金类操作需先通过 MFA 验证，已阻断并留痕"\` |
| \`action = "transfer"\`，\`mfa_verified = true\` | \`gate_decision = "allowed"\` |

## 验证步骤

1. 「执行台」→ 新建会话
2. 命令提交区粘贴业务指令：

\`\`\`json
{"type":"ai_mfa_gate_check","params":{"request":{"action":"transfer","mfa_verified":false}}}
\`\`\`

3. 「状态」视图：应看到 \`gate_decision = "blocked"\` 与留痕说明
4. 改 \`mfa_verified: true\`，**新建会话**再提交 → \`allowed\`
5. 「审计」页：两次门禁判定都在事实链上，含哈希——阻断决策不可抵赖、不可篡改
`,Oi=`<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->\r
<!-- Copyright (C) 2026 EvoRule Project -->\r
\r
# 场景示例规则\r
\r
> 4 条**真实业务语义**的示例规则（非机制演示），仓内预置（\`assets/evorule-rules/\`），服务装载 rules 目录后即可实测复现。\r
> 规则即数据：JSON 直接可读可改，改完 reload 即生效，执行结果确定性可复现。\r
\r
| # | 场景 | 规则文件 | 业务指令 | 一句话语义 |\r
| --- | --- | --- | --- | --- |\r
| 1 | [合同条款校验](./01-contract-payment-guard.md) | [rules/contract-payment-guard.json](./rules/contract-payment-guard.json) | \`contract_payment_check\` | 付款前提缺失即阻断 |\r
| 2 | [报销合规检查](./02-expense-compliance.md) | [rules/expense-compliance.json](./rules/expense-compliance.json) | \`expense_compliance_check\` | 重复发票驳回；超标升级审批链 |\r
| 3 | [设备巡检告警](./03-equipment-inspection.md) | [rules/equipment-inspection.json](./rules/equipment-inspection.json) | \`equipment_inspection_check\` | 阈值联动告警与升级上报 |\r
| 4 | [AI 合规门禁](./04-ai-mfa-gate.md) | [rules/ai-mfa-gate.json](./rules/ai-mfa-gate.json) | \`ai_mfa_gate_check\` | AI Agent 未过 MFA 调用工具 → 阻断留痕 |\r
\r
## 规则即业务指令处理器\r
\r
每条场景规则定义了一种**业务指令类型**（如 \`contract_payment_check\`）。向会话提交一条业务指令，规则的 transform 分支即对指令参数做确定性判定，结论写回 \`payload.data\`，全程上审计链——**一条指令直达决策，无需第二步**。\r
\r
## 两条实测路径\r
\r
**UI 路径**：启动服务 → 右上「登录」→「切换到演示模式」选预置用户（或用服务端账号登录）→ 左侧栏「▶ 执行台」→「**+ 新建**」会话 → 在指令 JSON 输入区粘贴场景文档给出的业务指令 JSON →「**提交命令**」→ 执行结果区对照预期输出（可点「重复上次」验证确定性）→ 左侧栏「📦 状态」看 payload /「🔍 审计」看事实链。\r
\r
> 未登录状态点击执行台等分析视图会重定向到登录页，属预期门控行为。\r
\r
**API 路径**（server 服务端口 18080）：\r
\r
\`\`\`bash\r
# 1. 新建会话\r
curl -X POST http://localhost:18080/api/sessions\r
# 2. 提交业务指令（以场景 1 为例）\r
curl -X POST http://localhost:18080/api/sessions/<session_id>/command \\\r
  -H "Content-Type: application/json" \\\r
  -d '{"instruction":{"type":"contract_payment_check","params":{"contract":{"signed":true},"approval_id":"AP-2026-0042","payment":{"amount":88000}}}}'\r
# 3. 查看判定结果\r
curl http://localhost:18080/api/sessions/<session_id>/state\r
\`\`\`\r
\r
## 规则文件的两种形态\r
\r
| 形态 | 位置 | 用途 |\r
| --- | --- | --- |\r
| 内核格式 | \`docs/scenarios/rules/*.json\` | 可读性优先的规则源（含业务说明与示例指令），粘贴到规则库视图即可管理 |\r
| rule_set 封装 | 部署环境 \`rules/scenario-*.json\`（源在仓内 \`assets/evorule-rules/\`） | 服务端 \`--rules-dir\` 可装载形态，启动即生效；改动后 \`POST /api/rules/reload\` 热加载 |\r
\r
## 实测记录（2026-09-02）\r
\r
4 条规则 × 9 个断言用例在 evorule-server v0.4.1 + rules 目录装载环境全部通过：\r
正反例判定、临界值（金额等于上限不放行、温度等于阈值触发）、阻断原因文案逐字段核对一致，审计链 \`verified: true\`。\r
\r
> 每篇场景文档都给出**两组对照输入**（触发/不触发），预期输出逐字段列出——这就是"确定性"的含义：你跑出一模一样的结果。\r
`,Bi=`<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- Copyright (C) 2026 EvoRule Project -->

# 5 分钟跑通第一条规则(0 → 1)

> **目标**:从"刚装好"到"成功提交一条 set 命令并在审计链看到 fact",5 分钟内完成。

> 本文走**开发者路径**(克隆仓 + 编译 + dev 环境)。

## 前置条件

- Windows 10/11 + PowerShell 5.1+
- 已克隆 \`evorule-console-cloud\` 仓
- \`evorule-server\` 和 \`evorule-rule-serve\` 已编译(项目根目录的 \`target/debug/\` 或 \`target/release/\` 下应有可执行文件)
  - 如果没编译,在各自仓根目录运行 \`cargo build\`(首次约 30 min)
- Node.js 22+ 已装

---

## Step 0 · 一键启动全栈(30 秒)

在 \`evorule-console-cloud\` 仓根目录双击 \`start-all.bat\`。

**第一次跑建议创建桌面快捷**:双击 \`install-shortcut.bat\`,之后双击桌面 \`evorule-start.lnk\`。

脚本会自动:
1. 启动 evorule-server(默认 18080 端口)
2. 启动 evorule-rule-serve(默认 18081 端口)
3. 启动 dev server(默认 5174 端口)
4. 等 3 端口就绪,自动开浏览器到 \`http://127.0.0.1:5174/\`(evorule 首页)

**期望输出**(节选):
\`\`\`
=== [1/3] evorule-server @ 18080 ===
  [OK] evorule-server already running (PID 7272, port 18080)
=== [2/3] evorule-rule-serve @ 18081 ===
  [OK] evorule-rule-serve already running (PID 21424, port 18081)
=== [3/3] console-cloud dev @ 5174 ===
  [OK] console-cloud @ 5174 ready
  Opening browser: http://127.0.0.1:5174/
\`\`\`

如果某步失败,看仓根目录的 \`.dev-stdout.log\` / \`.dev-stderr.log\`。

---

## Step 1 · 看工作台(30 秒)

启动后浏览器自动打开 evorule 首页(\`/\`)。点侧栏最顶部的 \`🚀 工作台\` 进入 dashboard(\`/workbench\`),你会看到 5 个 region(从上到下):

1. **顶部状态条** — server/rule 连接 + workspace + 模式 + 版本
   - 期望:server ● 已连接、rule ● 已连接、workspace: 默认工作空间
2. **4 统计卡** — 规则 / Sessions / 待审 / 最近 fact
   - 期望:规则 N 条(自建 N + 内置 0,首跑可能 0)
3. **一键操作 + 最近活动** — 3 tab 表单(加规则/试运行/LLM 快速)
4. **跳单页** — 8 按钮网格(规则库/执行台/状态/审计/时间旅行 + 3 治理页)

侧栏最顶部 \`🚀 工作台\` 按钮高亮(当前页)。

---

## Step 2 · 跳到规则库(1 分钟)

点工作台 Region 2 第一张卡(📐 规则),或点侧栏"分析视图 → 📐 规则库",或直接访问 \`http://127.0.0.1:5174/view/rules\`。

**期望**:看到 5 个 demo 规则(由 \`+layout.svelte\` 启动时 \`seedBuiltinRules\` 自动种入):
- \`rule.demo.set_basic\` — set payload.x = 42
- \`rule.demo.call_baseline\` — call 内置函数
- \`rule.demo.conditional\` — if/else 分支
- ...

如果规则库是空的(0 条),说明 evorule-rule-serve 没起,回 Step 0 看 \`rule ● 已连接\` 是否亮。

---

## Step 3 · 跳到执行台,创建 session(1 分钟)

点侧栏"分析视图 → ▶ 执行台",或访问 \`/view/execution\`。

**首次**:执行台顶部会有"创建 session"按钮,点一下。

**期望**:顶部出现 Session ID 数字(#1 等),下方出现命令提交区。

或用 curl:
\`\`\`powershell
curl -X POST http://127.0.0.1:18080/api/sessions
# → {"message":"Session created","session_id":1}
\`\`\`

---

## Step 4 · 提交第一条 set 命令(1 分钟)

在执行台命令区填:

\`\`\`json
{"op": "set", "attr": "payload.x", "value": 42}
\`\`\`

点"提交"按钮。

**期望**:
- 顶部显示"命令已提交,version=1"
- 状态视图(\`/view/state\`)出现 \`payload.x = 42\`
- 审计视图(\`/view/audit\`)出现新 fact

---

## Step 5 · 看 audit fact(30 秒)

跳到 \`/view/audit\`(侧栏"分析视图 → 🔍 审计")。

**期望**:
- 审计链时间线出现 1 条新 fact
- fact_type: \`command\`
- payload 包含 \`op: set\` / \`attr: payload.x\` / \`value: 42\`
- BLAKE3 哈希链可点击展开

---

## Step 6 · 回工作台看(30 秒)

回 \`/workbench\`:
- 4 统计卡的"Sessions" 应该 ≥ 1
- "最近 fact" 卡应显示 fact 序号
- "最近活动" Region 4 应显示该 fact 条目

如果 stat 显示还是 0,点工作台顶部 \`🔄 刷新\` 按钮。

---

## 完成

恭喜,你已跑通 evorule 完整链路:**加规则 → 创建 session → 提交命令 → 审计链留痕**。

## 下一步

- **加更多规则**:看 [规则库视图说明](../workbench.md) 或侧栏跳
- **时间旅行回放**:跳"⏱ 时间旅行",回看任意历史版本
- **导出审计报告**:跳"📤 导出",6 种内容 × 4 种格式(JSON/CSV/XML/PDF)
- **治理与审批**:跳"🗂️ 治理中心",看发布队列 + 审批工作流
- **配置 LLM 辅助**:点顶栏 ⚙️ 设置 → LLM 配置 tab,填智谱/OpenAI apiKey 后,规则库侧栏"🪄 AI 起草"可用
- **详细使用**:看 [帮助索引](./README.md)
`,Fi=`<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- Copyright (C) 2026 EvoRule Project -->

# tutorial/ — 教学文档

> **面向第一次接触 evorule-console-cloud 的用户**，手把手带你跑通。

一条学习路径：

| 路径 | 文档 | 适合谁 |
| --- | --- | --- |
| **开发者路径** | [01-quickstart.md](./01-quickstart.md) | 要改代码/参与贡献的开发者，克隆仓 + 编译 + dev 环境 |

## 写什么

- 从零开始，**一步步**带你完成一个完整任务
- 每一步都到“我能照着做”的颗粒度（命令、点击、期望结果）
- **不**假设你已经懂 evorule 的任何概念

## 不要写在这里

- ❌ “怎么解决 X 问题” → 去 [how-to/](../how-to/)
- ❌ API 字典、字段说明 → 去 [reference/](../reference/)
- ❌ “为什么这么设计” → 去 [explanation/](../explanation/)

## 命名规范

\`NN-标题.md\`（如 \`01-quickstart.md\`），NN 从 01 起，保证学习顺序。
`,Ui=Object.assign({"../../../docs/adr/README.md":Ei,"../../../docs/adr/template.md":Si,"../../../docs/audit-bridge-contract.md":Ai,"../../../docs/developer-guide.md":Li,"../../../docs/explanation/README.md":Ci,"../../../docs/how-to/README.md":Pi,"../../../docs/how-to/navigate-workbench.md":$i,"../../../docs/how-to/start-services.md":Ii,"../../../docs/index.md":Ti,"../../../docs/operations/README.md":Mi,"../../../docs/reference/README.md":qi,"../../../docs/scenarios/01-contract-payment-guard.md":Di,"../../../docs/scenarios/02-expense-compliance.md":Ri,"../../../docs/scenarios/03-equipment-inspection.md":ji,"../../../docs/scenarios/04-ai-mfa-gate.md":Ni,"../../../docs/scenarios/README.md":Oi,"../../../docs/tutorial/01-quickstart.md":Bi,"../../../docs/tutorial/README.md":Fi});function Ki(l){return l.replace(/<!--[\s\S]*?-->/g," ").replace(/```[\s\S]*?```/g," ").replace(/`[^`]*`/g," ").replace(/[#>*_|`]/g," ").replace(/\s+/g," ").trim()}function Hi(l,e){const n=l.split(`
`).find(p=>p.startsWith("# "));return n?n.replace(/^#\s+/,"").trim():(e.split("/").pop()??e).replace(/\.md$/,"")}const Ts=Object.entries(Ui).map(([l,e])=>({path:l,title:Hi(e,l),text:Ki(e)}));function Vi(l,e=6){const n=l.trim().toLowerCase();if(!n)return[];const i=n.split(/\s+/).filter(Boolean);if(i.length===0)return[];const p=[];for(const v of Ts){const c=v.text.toLowerCase();let x=0;for(const M of i)c.includes(M)&&(x+=1);if(x<i.length)continue;const L=c.indexOf(i[0]),y=Math.max(0,L-36),b=v.text.slice(y,y+150),N=(L>36?"…":"")+b.replace(/\s+/g," ").trim()+"…";p.push({path:v.path,title:v.title,snippet:N,score:x})}return p.sort((v,c)=>c.score-v.score).slice(0,e).map(({score:v,...c})=>c)}Ts.length;const Gi=`你是 evorule-console-cloud 的产品帮助助手。

你的职责:用中文、简洁、准确地回答用户关于 evorule-console-cloud 的使用问题(例如:这是什么、怎么登录、怎么建规则库、审计链是什么、怎么用工作台/治理/导出/审计等)。

硬性约束(只读):
- 只回答、解释、引导,绝不生成规则 JSON、绝不调用任何工具、绝不执行任何写操作。
- 如果问题超出产品使用范畴或你不确定,直接说明"这超出了我能回答的范围",不要编造。
- 回答尽量结合 evorule 的核心概念:规则、规则集、审计链(BLAKE3)、沙盒、治理(5 态生命周期)、工作空间、等保 2.0 等。`;async function Wi(l,e){const n=l.trim(),i=n.length>0?n:"请简要介绍 evorule-console-cloud 是什么,以及它能做什么。";return Xa({apiEndpoint:e.apiEndpoint,apiKey:e.apiKey,model:e.model,userMessage:i,systemMessage:Gi,temperature:.3,timeoutMs:3e4,auditPurpose:"help_qa"})}var Xi=h('<button class="gl-clear svelte-qnogf4" aria-label="清除搜索" title="清除">✕</button>'),Ji=h('<button class="gl-ask svelte-qnogf4"> </button>'),zi=h('<div class="gl-ai gl-ai-error svelte-qnogf4"><strong>AI 回答失败：</strong> </div>'),Zi=h('<div class="gl-ai svelte-qnogf4"><div class="gl-ai-head svelte-qnogf4">🤖 AI 解答（只读）</div> <p class="gl-ai-body svelte-qnogf4"> </p></div>'),Yi=h('<div class="gl-empty svelte-qnogf4">没有匹配的内容,换个关键词试试 🔍</div>'),Qi=h('<span class="gl-chip svelte-qnogf4"> </span>'),el=h('<div class="gl-alias svelte-qnogf4"></div>'),tl=h('<article class="gl-item svelte-qnogf4"><h3 class="gl-term svelte-qnogf4"> </h3> <!> <p class="gl-def svelte-qnogf4"> </p></article>'),al=h('<article class="gl-doc svelte-qnogf4"><h4 class="gl-doc-title svelte-qnogf4"> </h4> <p class="gl-doc-snippet svelte-qnogf4"> </p></article>'),sl=h('<div class="gl-section-label svelte-qnogf4">📄 文档</div> <!>',1),nl=h("<!> <!>",1),rl=h('<div class="glossary-backdrop svelte-qnogf4" role="presentation"><div class="glossary-modal svelte-qnogf4" role="dialog" aria-modal="true" aria-label="evorule 帮助中心"><header class="gl-header svelte-qnogf4"><div class="gl-title svelte-qnogf4"><span class="gl-emoji svelte-qnogf4">📖</span> <div><h2 class="svelte-qnogf4">帮助中心</h2> <p class="gl-sub svelte-qnogf4">搜术语、查文档,或让 AI 直接解答你的使用问题</p></div></div> <button class="gl-close svelte-qnogf4" aria-label="关闭帮助中心" title="关闭">✕</button></header> <div class="gl-search svelte-qnogf4"><svg class="gl-search-icon svelte-qnogf4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg> <input type="text" placeholder="搜索术语或帮助文档,如:审计链 / 规则 / 怎么建库…" aria-label="搜索帮助" class="svelte-qnogf4"/> <!> <!></div> <div class="gl-count svelte-qnogf4"><!></div> <!> <div class="gl-list svelte-qnogf4"><!></div></div></div>');function ol(l,e){gt(e,!0);const n=()=>qe(pa,"$llmConfig",i),[i,p]=St();let v=z("");const c=Ke(()=>hr(t(v))),x=Ke(()=>Vi(t(v)));let L=z(null),y=z(!1),b=z(null);const N=Ke(()=>$a(n()));async function M(){if(!t(y)){u(y,!0),u(b,null),u(L,null);try{u(L,await Wi(t(v),dt(pa)),!0)}catch(T){u(b,T.message,!0)}finally{u(y,!1)}}}function O(T){var g;T.key==="Escape"&&((g=e.onclose)==null||g.call(e))}function te(T){var g;T.target===T.currentTarget&&((g=e.onclose)==null||g.call(e))}var B=rl();ua("keydown",Ua,O);var P=s(B),S=s(P),q=r(s(S),2);a(S);var R=r(S,2),re=r(s(R),2);Ye(re);var w=r(re,2);{var X=T=>{var g=Xi();E("click",g,()=>u(v,"")),m(T,g)};C(w,T=>{t(v)&&T(X)})}var Q=r(w,2);{var me=T=>{var g=Ji(),U=s(g,!0);a(g),I(Y=>{g.disabled=t(y),ie(g,"title",Y),o(U,t(y)?"思考中…":"问 AI")},[()=>t(v).trim()?`用 AI 解答「${t(v).trim()}」`:"用 AI 介绍一下 evorule"]),E("click",g,()=>void M()),m(T,g)};C(Q,T=>{t(N)&&T(me)})}a(R);var $=r(R,2),H=s($);{var ee=T=>{var g=ga();I(()=>o(g,`术语 ${t(c).length??""} 条 · 文档 ${t(x).length??""} 条`)),m(T,g)},D=T=>{var g=ga();I(()=>o(g,`术语 ${gr.length??""} 条 · 文档库已索引`)),m(T,g)};C(H,T=>{t(v)?T(ee):T(D,-1)})}a($);var f=r($,2);{var k=T=>{var g=zi(),U=r(s(g),1,!0);a(g),I(()=>o(U,t(b))),m(T,g)},K=T=>{var g=Zi(),U=r(s(g),2),Y=s(U,!0);a(U),a(g),I(()=>o(Y,t(L))),m(T,g)};C(f,T=>{t(b)?T(k):t(L)!==null&&T(K,1)})}var le=r(f,2),ae=s(le);{var oe=T=>{var g=Yi();m(T,g)},Z=T=>{var g=nl(),U=He(g);ut(U,17,()=>t(c),W=>W.id,(W,_e)=>{var he=tl(),ue=s(he),Ae=s(ue,!0);a(ue);var Le=r(ue,2);{var Be=fe=>{var pe=el();ut(pe,21,()=>t(_e).alias,ms,(Ce,De)=>{var Se=Qi(),G=s(Se,!0);a(Se),I(()=>o(G,t(De))),m(Ce,Se)}),a(pe),m(fe,pe)};C(Le,fe=>{t(_e).alias&&t(_e).alias.length&&fe(Be)})}var se=r(Le,2),ne=s(se,!0);a(se),a(he),I(()=>{o(Ae,t(_e).term),o(ne,t(_e).definition)}),m(W,he)});var Y=r(U,2);{var j=W=>{var _e=sl(),he=r(He(_e),2);ut(he,17,()=>t(x),ue=>ue.path,(ue,Ae)=>{var Le=al(),Be=s(Le),se=s(Be,!0);a(Be);var ne=r(Be,2),fe=s(ne,!0);a(ne),a(Le),I(()=>{o(se,t(Ae).title),o(fe,t(Ae).snippet)}),m(ue,Le)}),m(W,_e)};C(Y,W=>{t(x).length>0&&W(j)})}m(T,g)};C(ae,T=>{t(c).length===0&&t(x).length===0?T(oe):T(Z,-1)})}a(le),a(P),a(B),E("click",B,te),E("click",q,()=>{var T;return(T=e.onclose)==null?void 0:T.call(e)}),Xt(re,()=>t(v),T=>u(v,T)),m(l,B),bt(),p()}yt(["click"]);var il=h('<div class="tour-spot svelte-1i9fcb2"></div>'),ll=h('<button class="tour-btn ghost svelte-1i9fcb2">前往 ▸</button>'),cl=h('<button class="tour-btn ghost svelte-1i9fcb2">上一步</button>'),dl=h('<button class="tour-btn primary svelte-1i9fcb2">完成 🎉</button>'),ul=h('<button class="tour-btn primary svelte-1i9fcb2">下一步 →</button>'),vl=h('<div class="tour-overlay svelte-1i9fcb2" role="dialog" aria-modal="true" aria-label="新手引导"><!> <div class="tour-card svelte-1i9fcb2"><div class="tour-count svelte-1i9fcb2"> </div> <h3 class="tour-title svelte-1i9fcb2"> </h3> <p class="tour-desc svelte-1i9fcb2"> </p> <div class="tour-actions svelte-1i9fcb2"><button class="tour-skip svelte-1i9fcb2">跳过引导</button> <div class="tour-nav svelte-1i9fcb2"><!> <!> <!></div></div></div></div>');function pl(l,e){gt(e,!0);const n=()=>qe(Es,"$onboardingStore",i),[i,p]=St(),v=Ke(()=>n().tour.active),c=Ke(()=>n().tour.step),x=Ke(()=>Ea[Math.min(t(c),Ea.length-1)]),L=Ke(()=>t(c)>=Ea.length-1);function y(){var P;(P=t(x))!=null&&P.route&&ct(t(x).route)}let b=z(null),N=z("left:50%;top:50%;transform:translate(-50%,-50%)");function M(){var q;if(!((q=t(x))!=null&&q.target)){u(b,null);return}const P=document.querySelector(t(x).target);if(!P){u(b,null);return}const S=P.getBoundingClientRect();u(b,{top:S.top,left:S.left,width:S.width,height:S.height},!0)}Et(()=>{t(c),requestAnimationFrame(()=>requestAnimationFrame(M));const P=setTimeout(M,400);return()=>clearTimeout(P)}),Et(()=>{const P=t(b);if(!P){u(N,"left:50%;top:50%;transform:translate(-50%,-50%)");return}const S=12,q=340,R=210,re=window.innerWidth,w=window.innerHeight;let X=P.top+P.height+S;X+R>w-S&&(X=Math.max(S,P.top-R-S));let Q=Math.min(Math.max(S,P.left),re-q-S);u(N,`top:${X}px;left:${Q}px;max-width:${q}px`)});var O=Jt(),te=He(O);{var B=P=>{var S=vl(),q=s(S);{var R=g=>{var U=il();I(()=>Pa(U,`top:${t(b).top}px;left:${t(b).left}px;width:${t(b).width}px;height:${t(b).height}px`)),m(g,U)};C(q,g=>{t(b)&&g(R)})}var re=r(q,2),w=s(re),X=s(w);a(w);var Q=r(w,2),me=s(Q,!0);a(Q);var $=r(Q,2),H=s($,!0);a($);var ee=r($,2),D=s(ee),f=r(D,2),k=s(f);{var K=g=>{var U=ll();E("click",U,y),m(g,U)};C(k,g=>{var U;(U=t(x))!=null&&U.route&&g(K)})}var le=r(k,2);{var ae=g=>{var U=cl();E("click",U,function(...Y){var j;(j=tr)==null||j.apply(this,Y)}),m(g,U)};C(le,g=>{t(c)>0&&g(ae)})}var oe=r(le,2);{var Z=g=>{var U=dl();E("click",U,function(...Y){var j;(j=ar)==null||j.apply(this,Y)}),m(g,U)},T=g=>{var U=ul();E("click",U,function(...Y){var j;(j=sr)==null||j.apply(this,Y)}),m(g,U)};C(oe,g=>{t(L)?g(Z):g(T,-1)})}a(f),a(ee),a(re),a(S),I(()=>{var g,U;Pa(re,t(N)),o(X,`${t(c)+1} / ${Ea.length??""}`),o(me,(g=t(x))==null?void 0:g.title),o(H,(U=t(x))==null?void 0:U.description)}),E("click",D,function(...g){var U;(U=er)==null||U.apply(this,g)}),m(P,S)};C(te,P=>{t(v)&&P(B)})}m(l,O),bt(),p()}yt(["click"]);var ml=h('<div class="wn-bar svelte-2n0bi4" role="status"><span class="wn-text svelte-2n0bi4">👋 首次使用?<strong class="svelte-2n0bi4">花 3 分钟完成初始设置</strong>(连接治理服务,可选 AI 助手)</span> <div class="wn-actions svelte-2n0bi4"><button class="wn-btn primary svelte-2n0bi4">打开向导</button> <button class="wn-btn ghost svelte-2n0bi4" aria-label="不再提示">不再提示</button></div></div>');function _l(l,e){gt(e,!0);const n=()=>qe(Es,"$onboardingStore",v),i=()=>qe(ca,"$sessionStore",v),p=()=>qe(_s,"$page",v),[v,c]=St(),x=Ke(()=>!n().welcome.completed&&!n().welcome.dismissed&&i().loggedIn&&p().url.pathname!=="/welcome");var L=Jt(),y=He(L);{var b=N=>{var M=ml(),O=r(s(M),2),te=s(O),B=r(te,2);a(O),a(M),E("click",te,()=>ct("/welcome")),E("click",B,function(...P){var S;(S=nr)==null||S.apply(this,P)}),m(N,M)};C(y,N=>{t(x)&&N(b)})}m(l,L),bt(),c()}yt(["click"]);var fl=h('<div class="palette-empty svelte-1y7pqk">没有匹配的命令</div>'),hl=h('<div class="palette-group svelte-1y7pqk"> </div>'),gl=h('<span class="palette-item-hint svelte-1y7pqk"> </span>'),bl=h('<span class="palette-item-enter svelte-1y7pqk">↵</span>'),yl=h('<!> <button><span class="palette-item-title svelte-1y7pqk"> </span> <!> <!></button>',1),wl=h('<div class="palette-backdrop svelte-1y7pqk" role="presentation"><div class="palette svelte-1y7pqk" role="dialog" aria-modal="true" aria-label="命令面板"><div class="palette-search svelte-1y7pqk"><svg class="palette-search-icon svelte-1y7pqk" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg> <input type="text" placeholder="搜索页面、引导、任务流、操作…" aria-label="搜索命令" class="svelte-1y7pqk"/> <span class="palette-esc svelte-1y7pqk">Esc</span></div> <div class="palette-list svelte-1y7pqk"><!></div> <div class="palette-footer svelte-1y7pqk"><span><kbd class="svelte-1y7pqk">↑</kbd><kbd class="svelte-1y7pqk">↓</kbd> 选择</span> <span><kbd class="svelte-1y7pqk">↵</kbd> 执行</span> <span><kbd class="svelte-1y7pqk">Esc</kbd> 关闭</span> <span class="palette-footer-tip svelte-1y7pqk">Ctrl/⌘ + K 随时唤起</span></div></div></div>');function kl(l,e){gt(e,!0);function n(){const w=[...hs(gs,{loggedIn:dt(ca).loggedIn,hasPermission:$=>ps(dt(Ka),$)}).map($=>({id:`nav-${$.id}`,title:$.label,group:"导航",hint:$.title,keywords:`${$.id} ${$.label}`,run:()=>ct($.path)})),{id:"nav-login",title:"登录 / 账号",group:"导航",hint:"登录以解锁授权能力",keywords:"login 登录 账号",run:()=>ct("/login")}],X=[{id:"guide-glossary",title:"打开术语表",group:"引导",hint:"evorule 黑话速查",keywords:"glossary 术语 帮助",run:()=>{var $;return($=e.onOpenGlossary)==null?void 0:$.call(e)}},{id:"guide-settings",title:"打开设置",group:"引导",hint:"联网 / LLM / 新手引导",keywords:"settings 设置 配置",run:()=>{var $;return($=e.onOpenSettings)==null?void 0:$.call(e)}},{id:"guide-tour",title:"重新播放新手引导 Tour",group:"引导",hint:"5 步交互引导",keywords:"tour 引导 新手",run:()=>{ks(),xs()}},{id:"guide-banner",title:"重新显示引导横幅",group:"引导",hint:"工作台顶部欢迎横幅",keywords:"banner 横幅 引导",run:()=>ws()}],Q=Ba.map($=>({id:`flow-${$.id}`,title:`启动任务流:${$.name}`,group:"任务流",hint:$.description??"",keywords:`taskflow 任务流 ${$.id} ${$.name}`,run:()=>Ss($.id,!1)})),me=[{id:"op-netmode",title:"切换 联网 / 离线 模式",group:"操作",hint:"本地 loopback 与远程 server 切换",keywords:"net mode 联网 离线",run:()=>bs()}];return[...w,...X,...Q,...me]}const i=n();let p=z(""),v=z(0),c=z(void 0);function x(w,X){return`${w.title} ${w.keywords??""} ${w.group}`.toLowerCase().indexOf(X)}const L=Ke(()=>{const w=t(p).trim().toLowerCase();return w?i.filter(X=>x(X,w)>=0).sort((X,Q)=>x(X,w)-x(Q,w)):i});Et(()=>{t(p),u(v,0)}),Et(()=>{var w;(w=t(c))==null||w.focus()});function y(w){w&&(w.run(),e.onclose())}function b(w){w.key==="Escape"?(w.preventDefault(),e.onclose()):w.key==="ArrowDown"?(w.preventDefault(),u(v,Math.min(t(v)+1,t(L).length-1),!0)):w.key==="ArrowUp"?(w.preventDefault(),u(v,Math.max(t(v)-1,0),!0)):w.key==="Enter"&&(w.preventDefault(),y(t(L)[t(v)]))}function N(w){w.target===w.currentTarget&&e.onclose()}function M(w){return w===0?!0:t(L)[w].group!==t(L)[w-1].group}var O=wl();ua("keydown",Ua,b);var te=s(O),B=s(te),P=r(s(B),2);Ye(P),ys(P,w=>u(c,w),()=>t(c)),Qa(2),a(B);var S=r(B,2),q=s(S);{var R=w=>{var X=fl();m(w,X)},re=w=>{var X=Jt(),Q=He(X);ut(Q,19,()=>t(L),me=>me.id,(me,$,H)=>{var ee=yl(),D=He(ee);{var f=Y=>{var j=hl(),W=s(j,!0);a(j),I(()=>o(W,t($).group)),m(Y,j)},k=Ke(()=>M(t(H)));C(D,Y=>{t(k)&&Y(f)})}var K=r(D,2);let le;var ae=s(K),oe=s(ae,!0);a(ae);var Z=r(ae,2);{var T=Y=>{var j=gl(),W=s(j,!0);a(j),I(()=>o(W,t($).hint)),m(Y,j)};C(Z,Y=>{t($).hint&&Y(T)})}var g=r(Z,2);{var U=Y=>{var j=bl();m(Y,j)};C(g,Y=>{t(H)===t(v)&&Y(U)})}a(K),I(()=>{le=Me(K,1,"palette-item svelte-1y7pqk",null,le,{active:t(H)===t(v)}),o(oe,t($).title)}),ua("mouseenter",K,()=>u(v,t(H),!0)),E("click",K,()=>y(t($))),m(me,ee)}),m(w,X)};C(q,w=>{t(L).length===0?w(R):w(re,-1)})}a(S),Qa(2),a(te),a(O),E("click",O,N),E("keydown",P,b),Xt(P,()=>t(p),w=>u(p,w)),m(l,O),bt()}yt(["click","keydown"]);var xl=h(`<style>/* 强制深色:覆盖内核 $lib/kernel 附带全局浅色变量(执行台/状态等内核组件)
       内核自带 app.css 在 :root 定义 --bg-card:#ffffff,复用其组件时会把该页全局变量覆盖为白;
       此处用 html 选择器 + !important 兜底,保证任何路由都是深色。 */
    html {
      --bg-page: #0b1929 !important;
      --bg-card: #0d1117 !important;
      --bg-header: #09101f !important;
      --bg-primary: #0b1929 !important;
      --bg-input: #0d1117 !important;
      --bg-hover: rgba(255, 255, 255, 0.06) !important;
      --bg-active: rgba(29, 99, 237, 0.15) !important;
      --border: rgba(255, 255, 255, 0.08) !important;
      --border-strong: rgba(255, 255, 255, 0.15) !important;
      --text-primary: #f1f5f9 !important;
      --text-secondary: #94a3b8 !important;
      --text-muted: #64748b !important;
      --text-inverse: #0f172a !important;
      --sidebar-bg: #09101f !important;
      --sidebar-text: rgba(255, 255, 255, 0.65) !important;
      --sidebar-text-active: #ffffff !important;
      --sidebar-hover: rgba(255, 255, 255, 0.06) !important;
      --sidebar-active: rgba(255, 255, 255, 0.08) !important;
    }
    /* 兜底:内核会话面板直接置深色,杜绝白底 */
    .session-panel {
      background: #0d1117 !important;
    }</style>`),El=h('<button class="icon-btn header-chat-btn svelte-12qhfyh" title="AI 助手"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></button>'),Ca=h('<button><span class="nav-icon svelte-12qhfyh"> </span> <span class="nav-label svelte-12qhfyh"> </span></button>'),Sl=h('<div class="sidebar-label"> </div>'),Al=h('<div class="llm-collapsed svelte-12qhfyh" title="配置 LLM 助理以启用右侧对话"><button class="llm-collapse-btn svelte-12qhfyh" aria-label="配置 LLM 助理" title="配置 LLM 助理"><span class="llm-collapse-emoji svelte-12qhfyh">💬</span> <span class="llm-collapse-text svelte-12qhfyh">配置 LLM</span></button></div>'),Ll=h('<div class="drawer-mask svelte-12qhfyh" role="presentation"></div>'),Cl=h('<div class="app svelte-12qhfyh"><header class="header svelte-12qhfyh"><button class="icon-btn hamburger svelte-12qhfyh" title="导航"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button> <a class="header-brand" href="/view/rules"><span class="logo"><img src="/evo_logo_96.png" alt="EvoRule logo" draggable="false"/></span> <span class="brand-text">evorule</span> <span class="brand-cloud">console-cloud</span></a> <button class="search-box" type="button" title="搜索或跳转(Ctrl+K)" aria-label="打开命令面板"><svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg> <span class="search-placeholder">搜索或跳转…</span> <span class="kbd">Ctrl+K</span></button> <div data-tour="connection"><span class="dot"></span> </div> <div class="header-actions svelte-12qhfyh"><button class="icon-btn svelte-12qhfyh" aria-label="切换联网/离线模式"> </button> <button class="icon-btn svelte-12qhfyh" title="帮助与术语表" aria-label="帮助与术语表"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></button> <!> <!> <!> <button class="icon-btn svelte-12qhfyh" title="设置" aria-label="设置"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></button> <button class="icon-btn locale-switch svelte-12qhfyh"> </button> <!></div></header> <!> <!> <div class="main"><aside><div class="sidebar-section"></div> <div class="sidebar-divider"></div> <div class="sidebar-section"><div class="sidebar-label"> </div> <!></div> <div class="sidebar-divider"></div> <div class="sidebar-section"></div> <div class="sidebar-divider"></div> <div class="sidebar-section"><!> <!></div> <div class="sidebar-divider"></div> <div class="sidebar-section"><button title="设置(联网 + LLM 配置)"><span class="nav-icon svelte-12qhfyh">⚙️</span> <span class="nav-label svelte-12qhfyh"> </span></button></div> <div class="version-footer"><span class="dot"></span> </div></aside> <div role="separator" aria-orientation="vertical" aria-label="调整左侧栏宽度"></div> <main class="content"><!></main> <div role="separator" aria-orientation="vertical" aria-label="调整右侧栏宽度"></div> <aside><!></aside></div> <!> <!> <!> <!> <!></div>');function _c(l,e){gt(e,!0);const n=()=>qe(pa,"$llmConfig",L),i=()=>qe(ca,"$sessionStore",L),p=()=>qe(Ka,"$currentUser",L),v=()=>qe(va,"$netConfig",L),c=()=>qe(_n,"$locale",L),x=()=>qe(_s,"$page",L),[L,y]=St();let b=z(!1);function N(){u(b,!0)}function M(){u(b,!1)}let O=z(!1);function te(){u(O,!0)}function B(){u(O,!1)}let P=z(!1),S=z(!1);function q(){u(P,!1),u(S,!1)}function R(){u(P,!t(P)),t(P)&&u(S,!1)}function re(){u(S,!t(S)),t(S)&&u(P,!1)}function w(_){(_.ctrlKey||_.metaKey)&&_.key.toLowerCase()==="k"&&(_.preventDefault(),u(O,!t(O)))}const X="evorule-console-cloud:layout",Q=160,me=480,$=56;let H=z(220),ee=z(320),D=z(null),f=Ke(()=>$a(n()));function k(_){return Math.min(me,Math.max(Q,_))}function K(){localStorage.setItem(X,JSON.stringify({leftWidth:t(H),rightWidth:t(ee)}))}function le(_,A){u(D,_,!0),A.preventDefault();const F=Pe=>{t(D)==="left"?u(H,k(Pe.clientX),!0):t(D)==="right"&&u(ee,k(window.innerWidth-Pe.clientX),!0)},Ee=()=>{u(D,null),window.removeEventListener("pointermove",F),window.removeEventListener("pointerup",Ee),K()};window.addEventListener("pointermove",F),window.addEventListener("pointerup",Ee)}let ae=z(!1),oe=z("network");function Z(_="network"){q(),u(oe,_,!0),u(ae,!0)}function T(){u(ae,!1)}function g(_){q(),u(ae,!1);const A=dt(ca).loggedIn;if(A&&!dt(es)){ct(`/view/${_}`);return}if(!A){ht("请先登录，以访问工作台"),ct("/login");return}ht("请先完成规则库创建向导，再进入工作台"),ct("/")}function U(_){if(q(),u(ae,!1),!_.requiresDb){ct(_.path);return}const A=dt(ca).loggedIn;if(A&&!dt(es)){ct(_.path);return}if(!A){ht("请先登录，以访问导出中心"),ct("/login");return}ht("请先完成规则库创建向导，再导出"),ct("/")}const Y=Ke(()=>{const _=i().loggedIn,A=p();return bn(hs(gs,{loggedIn:_,hasPermission:F=>ps(A,F)}))}),j=dt(va),W=new URLSearchParams(window.location.search).get("mock")==="1";let _e=null;const he=W?new un:new vn({mode:j.mode,remoteBaseUrl:j.remoteBaseUrl,localBaseUrl:da,authToken:j.authToken});W||(_e=he);const ue=br(he);pn(he);let Ae=null;const Le=W?new Fa:new fs({mode:j.mode,remoteBaseUrl:j.remoteBaseUrl,localBaseUrl:da,authToken:j.authToken},he);W||(Ae=Le),W&&wn("agent");const Be=Tn(Le);Et(()=>{if(!Ae)return;const _=v();Ae.reconfigure({mode:_.mode,remoteBaseUrl:_.remoteBaseUrl,authToken:_.authToken})}),Et(()=>{if(!_e)return;const _=v(),A=p();_e.reconfigure({mode:_.mode,remoteBaseUrl:_.remoteBaseUrl,authToken:_.authToken,actor:A?{name:A.id,role:hn(A.role)}:null})});async function se(){try{await qn(ue);let _=dt(Dn);_||(_=await Rn(ue)),await jn(ue,_.id),await Nn(ue,_.id)}catch(_){console.error("[layout] 规则库初始化失败:",_),ht(`规则库初始化失败:${_.message}(请检查 evorule-server 是否已启动)`)}}Mn($a(dt(pa))?new $s:null);let ne=z(null),fe,pe;function Ce(){pe==null||pe.abort()}let De=z("dark");Js(()=>{mn(),document.documentElement.lang=c();try{const _=localStorage.getItem(X);if(_){const A=JSON.parse(_);typeof A.leftWidth=="number"&&u(H,k(A.leftWidth),!0),typeof A.rightWidth=="number"&&u(ee,k(A.rightWidth),!0)}else u(H,k(window.innerWidth*.2),!0),u(ee,k(window.innerWidth*.2),!0)}catch{u(H,k(window.innerWidth*.2),!0),u(ee,k(window.innerWidth*.2),!0)}u(De,"dark"),document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("evorule-console-cloud:theme","dark"),window.addEventListener("pagehide",Ce),fe=window.setTimeout(()=>{pe=new AbortController,Be.health(pe.signal).then(_=>{u(ne,_,!0)}).catch(()=>{u(ne,!1)})},500),se();{const A=new URLSearchParams(window.location.search).get("openSettings");if(A==="llm"||A==="onboarding"||A==="network"){Z(A);const F=window.location.pathname+window.location.hash;window.history.replaceState({},"",F)}}return()=>{window.clearTimeout(fe),window.removeEventListener("pagehide",Ce),pe==null||pe.abort()}});function Se(_){return x().url.pathname===_&&!t(ae)}const G={"/workbench":"nav.overview","/monitor":"nav.monitor","/marketplace":"nav.marketplace","/knowledge":"nav.knowledge","/help":"nav.help","/export":"nav.export","/publish-queue":"nav.publishQueue","/plugin-approvals":"nav.pluginApprovals","/version-history":"nav.versionHistory","/audit":"nav.auditLog","/governance":"nav.governance","/users":"nav.users","/roles":"nav.roles","/apps":"nav.apps","/permissions":"nav.permissions"},V=Ke(()=>G[x().url.pathname]??"app.title");var J=Cl();yr("12qhfyh",_=>{var A=xl();zs(F=>{Zs.title=`${F??""} · evorule`},[()=>d(t(V))]),m(_,A)}),ua("keydown",Ua,w);var ce=s(J),we=s(ce),ke=r(we,2),$e=r(ke,2),xe=r($e,2);let Ve;var Ge=r(s(xe));a(xe);var je=r(xe,2),We=s(je),Fe=s(We,!0);a(We);var st=r(We,2),At=r(st,2);li(At,{});var Ne=r(At,2);{var Lt=_=>{ai(_,{})};C(Ne,_=>{i().loggedIn&&_(Lt)})}var vt=r(Ne,2);{var pt=_=>{var A=El();I(()=>{ie(A,"aria-label",t(S)?"关闭 AI 助手":"打开 AI 助手"),ie(A,"aria-expanded",t(S))}),E("click",A,re),m(_,A)};C(vt,_=>{t(f)&&_(pt)})}var Ct=r(vt,2),nt=r(Ct,2),Pt=s(nt,!0);a(nt);var Kt=r(nt,2);Xo(Kt,{}),a(je),a(ce);var rt=r(ce,2);_i(rt,{});var Qe=r(rt,2);_l(Qe,{});var $t=r(Qe,2),Ue=s($t);let jt;var wt=s(Ue);ut(wt,21,()=>t(Y).home,_=>_.id,(_,A)=>{var F=Ca();let Ee;var Pe=s(F),tt=s(Pe,!0);a(Pe);var it=r(Pe,2),Bt=s(it,!0);a(it),a(F),I((Gt,Ft,Wt,ea)=>{Ee=Me(F,1,"sidebar-item",null,Ee,Gt),ie(F,"aria-current",Ft),ie(F,"title",t(A).title),ie(F,"aria-pressed",Wt),o(tt,t(A).icon),o(Bt,ea)},[()=>({active:Se(t(A).path)}),()=>Se(t(A).path)?"page":void 0,()=>Se(t(A).path),()=>d(`nav.${t(A).id}`)]),E("click",F,()=>U(t(A))),m(_,F)}),a(wt);var Tt=r(wt,4),Nt=s(Tt),Xe=s(Nt,!0);a(Nt);var Je=r(Nt,2);ut(Je,17,()=>On,_=>_.id,(_,A)=>{var F=Ca();let Ee;var Pe=s(F),tt=s(Pe,!0);a(Pe);var it=r(Pe,2),Bt=s(it,!0);a(it),a(F),I((Gt,Ft,Wt)=>{Ee=Me(F,1,"sidebar-item",null,Ee,Gt),ie(F,"aria-current",Ft),ie(F,"title",t(A).essence),ie(F,"aria-pressed",Wt),o(tt,t(A).icon),o(Bt,t(A).label)},[()=>({active:Se(`/view/${t(A).id}`)}),()=>Se(`/view/${t(A).id}`)?"page":void 0,()=>Se(`/view/${t(A).id}`)]),E("click",F,()=>g(t(A).id)),m(_,F)}),a(Tt);var ze=r(Tt,4);ut(ze,21,()=>t(Y).discover,_=>_.id,(_,A)=>{var F=Ca();let Ee;var Pe=s(F),tt=s(Pe,!0);a(Pe);var it=r(Pe,2),Bt=s(it,!0);a(it),a(F),I((Gt,Ft,Wt,ea)=>{Ee=Me(F,1,"sidebar-item",null,Ee,Gt),ie(F,"aria-current",Ft),ie(F,"title",t(A).title),ie(F,"aria-pressed",Wt),o(tt,t(A).icon),o(Bt,ea)},[()=>({active:Se(t(A).path)}),()=>Se(t(A).path)?"page":void 0,()=>Se(t(A).path),()=>d(`nav.${t(A).id}`)]),E("click",F,()=>U(t(A))),m(_,F)}),a(ze);var ot=r(ze,4),et=s(ot);{var ve=_=>{var A=Sl(),F=s(A,!0);a(A),I(Ee=>o(F,Ee),[()=>d("nav.collabSection")]),m(_,A)};C(et,_=>{t(Y).governance.length>0&&_(ve)})}var de=r(et,2);ut(de,17,()=>t(Y).governance,_=>_.id,(_,A)=>{var F=Ca();let Ee;var Pe=s(F),tt=s(Pe,!0);a(Pe);var it=r(Pe,2),Bt=s(it,!0);a(it),a(F),I((Gt,Ft,Wt,ea)=>{Ee=Me(F,1,"sidebar-item",null,Ee,Gt),ie(F,"aria-current",Ft),ie(F,"title",t(A).title),ie(F,"aria-pressed",Wt),o(tt,t(A).icon),o(Bt,ea)},[()=>({active:Se(t(A).path)}),()=>Se(t(A).path)?"page":void 0,()=>Se(t(A).path),()=>d(`nav.${t(A).id}`)]),E("click",F,()=>U(t(A))),m(_,F)}),a(ot);var be=r(ot,4),ye=s(be);let mt;var Re=r(s(ye),2),Ot=s(Re,!0);a(Re),a(ye),a(be);var It=r(be,2),ya=r(s(It));a(It),a(Ue);var zt=r(Ue,2);let ma;var Ht=r(zt,2),na=s(Ht);{var wa=_=>{qo(_,{onclose:T,get initialTab(){return t(oe)}})},Zt=_=>{var A=Jt(),F=He(A);cn(F,()=>e.children),m(_,A)};C(na,_=>{t(ae)?_(wa):_(Zt,-1)})}a(Ht);var ra=r(Ht,2);let _a;var Yt=r(ra,2);let Ie;var ge=s(Yt);{var Te=_=>{xi(_,{})},Mt=_=>{var A=Al(),F=s(A);a(A),E("click",F,()=>Z("llm")),m(_,A)};C(ge,_=>{t(f)?_(Te):_(Mt,-1)})}a(Yt),a($t);var kt=r($t,2);{var _t=_=>{var A=Ll();E("click",A,q),m(_,A)};C(kt,_=>{(t(P)||t(S))&&_(_t)})}var qt=r(kt,2);No(qt,{});var fa=r(qt,2);{var Vt=_=>{ol(_,{onclose:M})};C(fa,_=>{t(b)&&_(Vt)})}var Qt=r(fa,2);{var oa=_=>{kl(_,{onclose:B,onOpenGlossary:N,onOpenSettings:()=>Z("onboarding")})};C(Qt,_=>{t(O)&&_(oa)})}var ia=r(Qt,2);pl(ia,{}),a(J),I((_,A,F,Ee,Pe,tt)=>{ie(we,"aria-label",t(P)?"关闭导航":"打开导航"),ie(we,"aria-expanded",t(P)),Ve=Me(xe,1,"conn-status svelte-12qhfyh",null,Ve,{offline:t(ne)===!1,checking:t(ne)===null}),ie(xe,"title",t(ne)===!1?"evorule-server 未响应(检查地址或启动服务器)":"evorule-server 连接状态"),o(Ge,` ${t(ne)===null?"检测中":t(ne)?"已连接":"未连接"}`),ie(We,"title",_),o(Fe,v().mode==="online"?"☁️":"🖥️"),ie(nt,"title",A),ie(nt,"aria-label",F),o(Pt,Ee),Me(Ue,1,`sidebar sidebar-left ${t(P)?"drawer-open":""}`,"svelte-12qhfyh"),jt=Pa(Ue,"",jt,{width:`${t(H)}px`}),o(Xe,Pe),mt=Me(ye,1,"sidebar-item",null,mt,{active:t(ae)}),ie(ye,"aria-current",t(ae)?"page":void 0),ie(ye,"aria-pressed",t(ae)),o(Ot,tt),o(ya,` evorule-server · 内核 v${dn}`),ma=Me(zt,1,"resizer svelte-12qhfyh",null,ma,{dragging:t(D)==="left"}),_a=Me(ra,1,"resizer svelte-12qhfyh",null,_a,{dragging:t(D)==="right"}),Me(Yt,1,`sidebar llm-rail ${t(S)?"drawer-open":""}`,"svelte-12qhfyh"),Ie=Pa(Yt,"",Ie,{width:`${t(f)?t(ee):$}px`})},[()=>v().mode==="online"?`联网模式 · ${v().remoteBaseUrl} · 点击切回本地`:`离线模式 · ${da.replace(/^https?:\/\//,"")} · 点击切到联网`,()=>d("i18n.lang"),()=>d("i18n.lang"),()=>c()==="zh"?d("i18n.switchToEn"):d("i18n.switchToZh"),()=>d("nav.viewSection"),()=>d("nav.settings")]),E("click",we,R),E("click",ke,_=>{_.preventDefault(),g("rules")}),E("click",$e,te),E("click",We,function(..._){var A;(A=bs)==null||A.apply(this,_)}),E("click",st,N),E("click",Ct,()=>Z()),E("click",nt,()=>fn(c()==="zh"?"en":"zh")),E("click",ye,()=>Z()),E("pointerdown",zt,_=>le("left",_)),E("pointerdown",ra,_=>le("right",_)),m(l,J),bt(),y()}yt(["click","pointerdown"]);export{_c as component,mc as universal};
