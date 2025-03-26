import Fastify from "fastify";

const app = Fastify({ logger: false });

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
