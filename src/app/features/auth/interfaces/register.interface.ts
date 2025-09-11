export interface User
{
    name:string;
    email:string;
    role:string
}


export interface RegisterInterface
{
    message:string;
    token:string;
    user:User
}

