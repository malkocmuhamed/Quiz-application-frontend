
export interface User 
{
    id: number,
    name: string,
    email: string,
    password: string,
    user_type_id: number,
    role: string,
    token?: string
}