import fastify from "fastify";

const app = fastify({ logger: true });

app.get("/", async (_, reply) => {
  await reply.send({ hello: "world" });
});

app.listen({ port: 3000 }, (err, address) => {
  if (err !== null) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server listening at ${address}`);
});
