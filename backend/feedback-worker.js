const ALLOWED_ORIGIN = "https://tpillen.github.io";

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    try {
      if (origin && origin !== ALLOWED_ORIGIN) {
        return new Response(JSON.stringify({ ok:false, error:"Origin not allowed" }), {
          status:403, headers:corsHeaders(origin)
        });
      }

      const url = new URL(request.url);

      if (request.method === "GET") {
        if (url.searchParams.get("view") === "feedback") {
          const result = await env.DB.prepare(`
            SELECT id, reviewer, type, module, priority, comment, case_id, url,
                   app_version, environment, created_at, status,
                   reviewed_by, reviewed_at, decision, target_release,
                   implementation_notes, completed_at
            FROM feedback
            ORDER BY created_at DESC
            LIMIT 200
          `).all();

          return new Response(JSON.stringify({
            ok:true,
            records: result.results || []
          }), { headers:corsHeaders(origin) });
        }

        return new Response(JSON.stringify({
          ok:true,
          service:"PH Feedback Receiver",
          database:"connected",
          version:"0.5.4"
        }), { headers:corsHeaders(origin) });
      }

      if (request.method !== "POST") {
        return new Response(JSON.stringify({ok:false,error:"Method not allowed"}), {
          status:405, headers:corsHeaders(origin)
        });
      }

      const x = await request.json();
      const required = ["id","reviewer","type","module","priority","comment","appVersion","createdAt"];
      for (const field of required) {
        if (!x[field]) {
          return new Response(JSON.stringify({ok:false,error:`Missing required field: ${field}`}), {
            status:400, headers:corsHeaders(origin)
          });
        }
      }

      await env.DB.prepare(`
        INSERT INTO feedback (
          id, reviewer, type, module, priority, comment, case_id, url,
          app_version, environment, created_at, status
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        x.id, x.reviewer, x.type, x.module, x.priority, x.comment,
        x.caseId || "", x.url || "", x.appVersion,
        x.environment || "Reviewer", x.createdAt, x.status || "New"
      ).run();

      return new Response(JSON.stringify({
        ok:true, id:x.id, message:"Feedback received"
      }), { headers:corsHeaders(origin) });

    } catch (error) {
      return new Response(JSON.stringify({
        ok:false, error:error.message
      }), { status:500, headers:corsHeaders(origin) });
    }
  }
};