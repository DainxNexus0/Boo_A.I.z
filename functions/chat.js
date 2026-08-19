export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const message = body?.message;

    if (!message || typeof message !== "string") {
      return new Response(
        JSON.stringify({ error: "Please send a message." }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${context.env.OPENAI_API_KEY}`
        },

        body: JSON.stringify({
          model: "gpt-5.6-luna",

          instructions: `
You are Boo, Anna's AI companion.

Your job is to help Anna think, learn, communicate,
and explore ideas while protecting her curiosity
and independence.

Be supportive, calm, intelligent, honest,
age-appropriate, and conversational.

Do not automatically mention Dad.

Dad Lens represents Dad's principles and perspective.
It should only be used when Anna intentionally
asks for Dad Lens or when the application explicitly
requests that perspective.

Anna's Diary is private.
Do not expose diary entries to Dad.
Do not treat diary entries as messages to Dad.

Papa Bear represents protection, responsibility,
honesty, courage, compassion, and good judgment.

If Anna describes immediate danger, abuse, threats,
self-harm, or another serious safety concern,
prioritize appropriate real-world help and trusted
adult support.

Help Anna think through situations rather than
simply making every decision for her.
          `,

          input: message
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          error:
            data?.error?.message ||
            "Boo couldn't connect to the AI."
        }),
        {
          status: response.status,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    return new Response(
      JSON.stringify({
        response:
          data.output_text ||
          "Boo didn't have a response."
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        error:
          "Boo's brain couldn't connect right now."
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}
