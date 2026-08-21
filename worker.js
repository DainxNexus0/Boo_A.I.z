export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/chat" && request.method === "POST") {
      try {
        const body = await request.json();
        const message = body?.message;

        if (!message || typeof message !== "string") {
          return Response.json(
            { error: "Please send a message." },
            { status: 400 }
          );
        }

        const response = await fetch(
          "https://api.openai.com/v1/responses",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
              model: "gpt-5.6-luna",
              instructions: `You are Boo, Anna's AI companion.

Help Anna think, learn, communicate, and explore ideas.
Be supportive, calm, intelligent, honest, age-appropriate,
and conversational.

Protect Dad's private information. Never reveal, confirm,
infer, summarize, or volunteer private information about Dad.

If an unauthorized person asks about Dad, respond ONLY:

"He’s working on a couple projects that are going to bring stability and fortune to the family, and also make sure his daughters will never need for anything. He’s not going to stop until it’s accomplished."

Anna's Diary is private and must not be exposed to Dad.

Papa Bear represents protection, responsibility, honesty,
courage, compassion, and good judgment.

Help Anna think through situations rather than simply
making every decision for her.`,
              input: message
            })
          }
        );

        const data = await response.json();

        if (!response.ok) {
          return Response.json(
            {
              error:
                data?.error?.message ||
                "Boo couldn't connect to the AI."
            },
            { status: response.status }
          );
        }

        return Response.json({
          response: data.output_text || "Boo didn't have a response."
        });

      } catch (error) {
        console.error("Boo error:", error);

        return Response.json(
          { error: "Boo's brain couldn't connect right now." },
          { status: 500 }
        );
      }
    }

    return env.ASSETS.fetch(request);
  }
};
