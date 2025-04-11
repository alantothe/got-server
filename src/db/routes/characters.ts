import { Hono } from "hono";
import characterDragonJoin from "../queries/character/joins";
const characters = new Hono();

characters.use("*", async (c, next) => {
  console.log("character route hit");
  await next();
});

characters.get("/", async (c) => {
  const result = await characterDragonJoin();
  return c.json(result, 200);
});

export default characters;
