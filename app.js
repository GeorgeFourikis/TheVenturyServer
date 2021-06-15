const fastify = require("fastify")({
  logger: true,
});
const port = 8080;
const { emailHandler } = require("./functions/emailHandler");

fastify.register(require("fastify-cors"));

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

fastify.post("/api", (req, res) => {
  console.log(req.body);
  const incomingData = req.body;
  emailHandler(incomingData);
  return { status: "OK" };
});

// Run the server!
fastify.listen(port, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
