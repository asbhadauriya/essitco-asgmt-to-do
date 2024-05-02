import api from "@/api/api"
import { CommonError } from "@/helpers/CommonMessage"
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
    const response=await api.post('auth/login',body)
    return response
    
} catch (error) {
    
}
}
export const signUpApi=async(body:SignUpBody)=>{
    debugger
    try {
        const response=await api.post('auth/signUp',body)
        console.log(response);
        
        return response
        
    } catch (error:any) {
        if(error?.response?.data)
        CommonError(error?.response?.data?.error?.message)
        return error
        
    }
    }