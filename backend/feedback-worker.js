export default {
  async fetch(request, env) {
    const origin=request.headers.get("Origin")||"";
    const allowed=env.ALLOWED_ORIGIN||"*";
    const cors=allowed==="*"?"*":allowed;
    if(request.method==="OPTIONS") return new Response(null,{headers:{"Access-Control-Allow-Origin":cors,"Access-Control-Allow-Methods":"POST,OPTIONS","Access-Control-Allow-Headers":"Content-Type"}});
    if(request.method!=="POST") return new Response("Method not allowed",{status:405});
    if(allowed!=="*" && origin!==allowed) return new Response("Forbidden",{status:403});
    const x=await request.json();
    const required=["id","reviewer","type","module","priority","comment","appVersion","createdAt"];
    for(const k of required) if(!x[k]) return new Response(JSON.stringify({ok:false,error:`Missing ${k}`}),{status:400,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":cors}});
    await env.DB.prepare(`INSERT INTO feedback (id,reviewer,type,module,priority,comment,case_id,url,app_version,environment,created_at,status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`)
      .bind(x.id,x.reviewer,x.type,x.module,x.priority,x.comment,x.caseId||"",x.url||"",x.appVersion,x.environment||"",x.createdAt,x.status||"New").run();
    return new Response(JSON.stringify({ok:true,id:x.id}),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":cors}});
  }
}