import { serve } from "@hono/node-server";
import { Hono } from "hono";
import characters from "./db/routes/characters";
import "dotenv/config";

const app = new Hono();

app.get("/api", (c) => c.text("this is api root!"));
app.route("/characters", characters);

const port = Number(process.env.PORT) || 4000;

serve({
  fetch: app.fetch,
  port: port,
});

console.log(`Server running on port ${port}`)
