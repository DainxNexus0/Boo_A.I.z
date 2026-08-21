export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/chat") {
      return new Response("Boo backend is working", {
        headers: { "Content-Type": "text/plain" }
      });
    }

    return env.ASSETS.fetch(request);
  }
};
