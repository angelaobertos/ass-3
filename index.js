require("dotenv").config();

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const axios = require("axios");

const port = process.env.PORT || 3000;
const pagePath = path.join(__dirname, "index.html");
const trefleApiUrl = "https://trefle.io/api/v1/plants";

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(request.url, "http://localhost");

  if (requestUrl.pathname === "/api/plants" && request.method === "GET") {
    const query = requestUrl.searchParams.get("q")?.trim() || "";

    if (query.length > 100) {
      response.writeHead(400, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Search terms must be 100 characters or fewer." }));
      return;
    }

    if (!process.env.TREFLE_API_TOKEN) {
      console.error("TREFLE_API_TOKEN is not set.");
      response.writeHead(500, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Plant search is not configured." }));
      return;
    }

    try {
      const url = query ? `${trefleApiUrl}/search` : trefleApiUrl;
      const result = await axios.get(url, {
        params: {
          token: process.env.TREFLE_API_TOKEN,
          ...(query ? { q: query } : {}),
        },
        timeout: 10000,
      });

      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(result.data));
    } catch (error) {
      const upstreamStatus = error.response?.status;
      console.error(
        "Failed to fetch plants from Trefle:",
        upstreamStatus || error.code || "request failed"
      );
      response.writeHead(502, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Could not load plants from Trefle." }));
    }

    return;
  }

  if (request.method === "GET" && (requestUrl.pathname === "/" || requestUrl.pathname === "/index.html")) {
    fs.readFile(pagePath, (error, content) => {
      if (error) {
        console.error("Failed to read the Plant Explorer page:", error.message);
        response.writeHead(500);
        response.end("Could not load the Plant Explorer page.");
        return;
      }

      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(content);
    });

    return;
  }

  response.writeHead(404);
  response.end("Not found");
});

server.listen(port, () => {
  console.log(`Plant Explorer running at http://localhost:${port}`);
});
