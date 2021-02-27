import {FastifyInstance} from "fastify";
import ParamsSchema from './schemas/params.json'
import {getCourseById} from "../../services/course-service";
import {CourseId} from "../../entities/course";

export default (server: FastifyInstance) => {
  server.route<{ Params: { id: CourseId } }>({
    method: 'GET',
    url: '/courses/:id',
    schema: {
      params: ParamsSchema,
    },
    handler: async (request, reply) => {
      const courseId = request.params.id
      return getCourseById(courseId)
    }
  })
}
