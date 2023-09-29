import { userDto } from "./UserDto"

interface Request {
    users: userDto
    headears: Headers[]
    body: any
}