export const validateEmail=(email)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
      return isEmailValid?null:"Email Id is not Valid"

}

export const validatePassword=(password)=>{
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    return isPasswordValid?null:"Password must be of 8 digits and combination of alphabets,numbers and special charaters."
}