export interface UserRepositorie {
    findMany(): Promise<any>
    findFirst(id?: string, FullName?: string): Promise<any>
    findOne(id:string): Promise<any>
    updateName(id: string, FullName: string): Promise<any>
    insertUser(id: string, FullName: string): Promise<any>
}