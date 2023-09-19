import { Student } from "../../domain/models/Student";
import { CreateStudentCmd } from "../http/commands/CreateStudentCmd";
import { UpdateStudentCmd } from "../http/commands/UpdateStudentCmd";
import { http } from "../http/http";

export const studentRepository = {
    baseUrl: 'https://localhost:7297/api/',
    getAllStudentsAsync: async () => {
        const students = await http.get<Student[]>(studentRepository.baseUrl + 'Student');
        return students;
    },
    getStudentByIdAsync: async (studentID: string) => {
        const student = await http.get<Student>(studentRepository.baseUrl + 'Student/' + studentID);
        return student;
    },
    createStudentAsync: async (student: CreateStudentCmd) => {
        const response = await http.post<CreateStudentCmd>(studentRepository.baseUrl + 'Student', student);
        return response;
    },
    updateStudentAsync: async (studentID: string, student: UpdateStudentCmd) => {
        const response = await http.put<Student>(studentRepository.baseUrl + 'Student/?studentID=' + studentID, student);
        return response;
    },
    deleteStudentAsync: async (studentID: string) => {
        const response = await http.delete<Student>(studentRepository.baseUrl + 'Student/' + studentID);
        return response;
    }
}