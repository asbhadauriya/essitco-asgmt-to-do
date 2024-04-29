import api from "@/api/api"
type LoginBody={
    email:string,
    password:string

}
type SignUpBody={
    email:string,
    firstName:string,
    lastName:string,
    password:string,
    confirmPassword:string
}
export const signInApi=async(body:LoginBody)=>{
try {
    const response=await api.post('http://localhost:3008/auth/login',body)
    return response
    
} catch (error) {
    
}
}
export const signUpApi=async(body:SignUpBody)=>{
    try {
        const response=await api.post('http://localhost:3008/auth/signUp',body)
        return response
        
    } catch (error) {
        
    }
    }