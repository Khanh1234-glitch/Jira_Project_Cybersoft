import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { EditProject } from "../../Interface/AllProject/EditProject";
import Project from '../../Services/Project/Project';


export interface Edit{
    data:EditProject,
    isLoading:boolean,
    error:string | null,
}

const initialState : Edit = {
    data:{} as EditProject,
    isLoading:false,
    error:"",
}

export const createEditProject = createAsyncThunk(
    `ManamentProject/EditProject`,
   async (id:any) => {
    try {
        const data = await Project.UpdateProject(id);
        alert("Cap nhat thanh cong");
        return data;
    } catch (error) {
        const err = (error as AxiosError).response?.data as any;
        alert(err);
        throw err;
    }
   }
)

const EditProjectSlice = createSlice({
    name:"EditProject",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(createEditProject.pending,(state)=>{
            return {...state, isLoading:true}
        })
        builder.addCase(createEditProject.fulfilled,(state, {payload})=>{
            return {...state, isLoading:false, data:payload}
        })
        builder.addCase(createEditProject.rejected,(state,error)=>{
            return {...state, isLoading:false, error:error.error.message as string}
        })
    },
})

export default EditProjectSlice.reducer