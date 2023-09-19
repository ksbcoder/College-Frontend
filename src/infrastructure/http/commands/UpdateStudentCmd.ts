import { StateStudent } from "../../../common/enums"

export interface UpdateStudentCmd {
    identification: string
    name: string
    lastName: string
    age: number
    address: string
    phone: string
    stateStudent: StateStudent
}