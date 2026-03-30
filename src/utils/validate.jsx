export const checkValidateData = (email , password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
     const isPasswordValid = password.length >= 6;

    if(!isEmailValid) return "Email ID is not valid"
    if(!isPasswordValid) return "Passowrd is not valid"

    return null;
}