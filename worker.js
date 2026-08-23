// worker.js — J.S. AI Assistant
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }
    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(getHTML(), {
        headers: { "Content-Type": "text/html; charset=UTF-8", "Cache-Control": "no-store", ...corsHeaders() }
      });
    }
    if (url.pathname === "/avatar.png") {
      return getAvatar();
    }
    if (url.pathname === "/api/chat" && request.method === "POST") {
      return handleChat(request, env);
    }
    return new Response("Not Found", { status: 404, headers: corsHeaders() });
  }
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
  };
}

function getHTML() {
  return '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="theme-color" content="#08080a">\n  <title>Boo</title>\n  <style>\n' + getCSS() + '\n  </style>\n</head>\n<body>\n  <div id="app">\n    <header class="topbar">\n      <div class="brand">\n
Type @ to tag a resource or ? for shortcuts


