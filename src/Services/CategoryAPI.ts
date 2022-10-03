import { Category } from "../Interface/ProjectCategory/Category";
import axiosClient from "./AxiosClient"

const CategoryAPI ={
    Category:()=>{
        return axiosClient.get<unknown,Category[]>(`/ProjectCategory`);
    }
}

export default CategoryAPI;