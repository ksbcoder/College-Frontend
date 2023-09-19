import { CreateStudentCmd } from "../../infrastructure/http/commands/CreateStudentCmd";
import { UpdateStudentCmd } from "../../infrastructure/http/commands/UpdateStudentCmd";
import { studentRepository } from "../../infrastructure/repositories/student.repository";

export const StudentService = {
    getAllStudentsAsync: async () => {
        return await studentRepository.getAllStudentsAsync();
    },
    getStudentByIdAsync: async (id: string) => {
        return await studentRepository.getStudentByIdAsync(id);
    },
    createStudentAsync: async (student: CreateStudentCmd) => {
        return await studentRepository.createStudentAsync(student);
    },
    updateStudentAsync: async (studentID: string, student: UpdateStudentCmd) => {
        return await studentRepository.updateStudentAsync(studentID, student);
    },
    deleteStudentAsync: async (studentID: string) => {
        return await studentRepository.deleteStudentAsync(studentID);
    }
}