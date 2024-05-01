import api from "@/api/api"
import { CommonError } from "@/helpers/CommonMessage"
type TododBody={
    title:string,
    date:string,
    description?:string
}
export const fetchAllTodoApi=async()=>{
    try {
        const response=await api.get('/todo/get-all')
        return response;
    } catch (error) {
        
    }
}
export const createTodoApi=async(body:TododBody)=>{
    try {
        const response=await api.post('/todo/create',body)
        return response;
    } catch (error:any) {
        
        CommonError(error.response.data.message)
    }
}