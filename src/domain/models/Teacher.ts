import { StateTeacher } from "../../common/enums";

export interface Teacher {
    teacherID: string
    identification: string
    name: string
    lastName: string
    age: number
    address: string
    phone: string
    stateTeacher: StateTeacher
}