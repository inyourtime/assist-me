import Fastify from "fastify";
import { client } from "./db/db.js";

const app = Fastify({ logger: false });

await client.connect();

app.get("/", async () => {
  return { hello: "world" };
});

app.listen({ port: 3000, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
