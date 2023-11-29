import Fastify from 'fastify'
const fastifo = Fastify({
  logger: true
})

fastifo.get('/', async (_request, reply) => {
  await reply.send({ hello: 'world' })
})

fastifo.listen({ port: 3000 }, function (err, _address) {
  if (err !== null) {
    fastifo.log.error(err)
  }
  fastifo.log.info('server listening on PORT 2000')
})
