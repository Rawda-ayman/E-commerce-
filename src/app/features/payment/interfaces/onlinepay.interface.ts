export interface Session
{
    url:string;
    success_url:string;
    cancel_url:string;
}



export interface onlinepay
{
    status:string;
    session:Session; 
}