export interface User
{
    name:string;
    email:string;
    role:string
}


export interface loginuserInterface
{
    message:string;
    token:string;
    user:User
}