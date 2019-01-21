export function validateEmail(email:string) :boolean{
    let regex = /^[\w-\.]+@(successive.tech)$/;

    return regex.test(email);
}
