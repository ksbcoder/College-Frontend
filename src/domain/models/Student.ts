import { StateStudent } from "../../common/enums"

export interface Student {
    studentID: string
    identification: string
    name: string
    lastName: string
    age: number
    address: string
    phone: string
    stateStudent: StateStudent
}