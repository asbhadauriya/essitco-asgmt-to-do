import api from "@/api/api"

export const fetchAllTodoApi=async()=>{
    try {
        const response=await api.get('/todo/get-all')
        return response;
    } catch (error) {
        
    }
}