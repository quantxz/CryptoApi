export interface UserRepositorie {
    findMany(): Promise<any>
    findFirst(id?: string, FullName?: string): Promise<any>
    findOne(id:string, privateKey?: string, email?: string, password?: string): Promise<any>
    updateName(id: string, FullName: string): Promise<any>
    insertUser(id: string, FullName: string, email: string, password: string, privateKey: string): Promise<any>
}