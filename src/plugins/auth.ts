const fp = require("fastify-plugin")

module.exports = fp(async function (fastify, opts) {
    fastify.register(require("fastify-jwt"), {
        secret: "supersecret"
    })

    fastify.decorate("authenticate", async function (request, reply) {
        try {
            console.log('跑來');
            await request.jwtVerify();
        } catch (err) {
            console.log('跑來452452');
            reply.send(err)
        }
    })
    db: 'some.db';
})
