import { teacherRepository } from "../../infrastructure/repositories/teacher.repository";

export const TeacherService = {
    getAllTeachersAsync: async () => {
        return await teacherRepository.getAllTeachersAsync();
    },
}