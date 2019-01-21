export function validateEmail(email) {
    let regex = /^[\w-\.]+@(successive.tech)$/;

    return regex.test(email);
}
