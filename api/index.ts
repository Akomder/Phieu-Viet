import type { IncomingMessage, ServerResponse } from "node:http";
import { Readable } from "node:stream";
import app from "../dist/server/server.js";

type VercelRequest = IncomingMessage & { url?: string; method?: string };
type VercelResponse = ServerResponse & {
  status: (code: number) => VercelResponse;
  send: (body: Buffer) => void;
};

function requestHeaders(request: VercelRequest) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(request.headers)) {
    if (Array.isArray(value)) headers.set(name, value.join(", "));
    else if (value !== undefined) headers.set(name, value);
  }
  return headers;
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
  const protocol = String(request.headers["x-forwarded-proto"] ?? "https").split(",")[0];
  const host = request.headers.host ?? "localhost";
  const url = new URL(request.url ?? "/", `${protocol}://${host}`);
  const method = request.method ?? "GET";
  const body = method === "GET" || method === "HEAD" ? undefined : Readable.toWeb(request as never);
  const webRequest = new Request(url, {
    method,
    headers: requestHeaders(request),
    body,
    // Required by Node when a streaming request body is forwarded.
    ...(body ? { duplex: "half" as const } : {}),
  });
  const webResponse = await app.fetch(webRequest, {}, {});

  response.statusCode = webResponse.status;
  webResponse.headers.forEach((value, name) => response.setHeader(name, value));
  response.end(Buffer.from(await webResponse.arrayBuffer()));
}
