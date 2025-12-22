
export const checkValiddate = (email, password, name) => {
    
    // Define regex patterns for email and password validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    

    // Return error messages based on validation
    if(name !== undefined && name.trim() === "") return "*Name is required";
    if(!emailRegex) return "*Email is not valid";
    if(!passwordRegex) return "*Password must be at least 8 characters long and contain at least one Capital letter and one number";

    return null;
}