import {FastifyInstance} from "fastify";
import {Course} from "../../entities/course";
import BodySchema from './schemas/body.json'
import {createCourse} from "../../services/course-service";

export default (server: FastifyInstance) => {
  server.route<{ Body: Course }>({
    method: 'POST',
    url: '/courses',
    schema: {
      body: BodySchema,
    },
    handler: async (request, reply) => {
      return createCourse(request.body)
    }
  })
}
