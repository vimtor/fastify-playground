import fastify from 'fastify'
import createCourse from './routes/create-course'
import getCourse from './routes/get-course'

const server = fastify()

createCourse(server)
getCourse(server)

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
