import knex from 'knex'
import {Course, CourseId} from "../entities/course";

const sql = knex({
  client: 'sqlite3',
  connection: {
    filename: './data.db',
  },
});

sql.schema.createTableIfNotExists('courses', table => {
  table.uuid('id').primary()
  table.string('title')
  table.string('rating')
}).then(() => {
  console.log('Courses table created')
})

export const createCourse = async (course: Course) => {
  return sql<Course>('courses').insert(course)
}

export const getCourseById = async (id: CourseId): Promise<Course | undefined> => {
  return sql<Course>('courses').where("id", id).first();
}
