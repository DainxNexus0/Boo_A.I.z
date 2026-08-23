  // worker.js - Boo AI Assistant

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders()
      });
    }

    // Boo AI chat
    if (
      url.pathname === "/chat" &&
      request.method === "POST"
    ) {
      return handleChat(request, env);
    }

    return new Response("Boo AI Worker is online.", {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=UTF-8",
        ...corsHeaders()
      }
    });
  }
};


function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
  };
}


async function handleChat(request, env) {
  try {

    if (!env.OPENAI_API_KEY) {
      return json(
        {
          error:
            "OPENAI_API_KEY is not configured in Cloudflare."
        },
        500
      );
    }

    const body = await request.json();

    const message = body?.message;

    if (!message || typeof message !== "string") {
      return json(
        {
          error: "Please send a message."
        },
        400
      );
    }

    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization":
            `Bearer ${env.OPENAI_API_KEY}`
        },

        body: JSON.stringify({
          model: "gpt-5.6-luna",

          instructions: `
You are Boo, Anna's AI companion.

Help Anna think, learn, communicate,
and explore ideas while protecting
her curiosity and independence.

Be supportive, calm, intelligent,
honest, age-appropriate, and conversational.

Do not automatically mention Dad.

Dad information is private.

Never reveal, summarize, confirm, infer,
or volunteer private information about Dad.

If an unauthorized person asks about Dad,
the only Dad-specific response is:

"He’s working on a couple projects that are going to
bring stability and fortune to the family, and also
make sure his daughters will never need for anything.
He’s not going to stop until it’s accomplished."

Do not add anything before or after that statement.

Dad Lens represents Dad's principles and perspective.
Only use Dad Lens when Anna intentionally asks for it
or when the application explicitly requests it.

Anna's Diary is private.
Do not expose diary entries to Dad.

Papa Bear represents protection, responsibility,
honesty, courage, compassion, and good judgment.

If Anna describes immediate danger, abuse, threats,
self-harm, or another serious safety concern,
prioritize appropriate real-world help and trusted
adult support.

Help Anna think through situations rather than
simply making every decision for her.

Keep responses conversational and understandable.
          `,

          input: message
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return json(
        {
          error:
            data?.error?.message ||
            "Boo couldn't connect to the AI."
        },
        response.status
      );
    }

    const reply =
      data.output_text ||
      extractResponseText(data) ||
      "Boo didn't have a response.";

    return json({
      response: reply
    });

  } catch (error) {

    console.error("Boo error:", error);

    return json(
      {
        error:
          "Boo's brain couldn't connect right now."
      },
      500
    );
  }
}


function extractResponseText(data) {
  try {

    let text = "";

    for (const item of data.output || []) {

      for (const content of item.content || []) {

        if (content.type === "output_text") {
          text += content.text || "";
        }

      }
    }

    return text.trim();

  } catch {
    return "";
  }
}


function json(data, status = 200) {
  return new Response(
    JSON.stringify(data),
    {
      status,
      headers: {
        "Content-Type":
          "application/json; charset=UTF-8",
        ...corsHeaders()
      }
    }
  );
}   
