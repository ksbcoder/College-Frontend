import { Teacher } from '../../domain/models/Teacher'
import { http } from '../../infrastructure/http/http'

export const teacherRepository = {
    baseUrl: 'https://localhost:7297/api/',
    getAllTeachersAsync: async () => {
        const teachers = await http.get<Teacher[]>(teacherRepository.baseUrl + 'Teacher');
        return teachers;
    },
}
