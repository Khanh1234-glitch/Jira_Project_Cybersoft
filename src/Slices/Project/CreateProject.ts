import { CreateProject } from './../../Interface/CreateProject/CreateProject';
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import Project from '../../Services/Project/Project';



export interface CreateProjectInterface{
    data:CreateProject,
    isLoading:boolean,
    error:string | null,
}

const initialState : CreateProjectInterface = {
    data: {} as CreateProject,
    isLoading:false,
    error:'',
}

export const createProjectThunk = createAsyncThunk(
    `project/createproject`,
   async (values:CreateProject) => {
        try {
            const data = await Project.CreateProject(values);
            alert("Tạo dự án thành công")
            return data;
        } catch (error) {
            alert(error);
            throw error;
        }
   }
)

const createProjectSlice = createSlice ({
    name:'createproject',
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(createProjectThunk.pending,(state)=>{
            return {...state, isLoading:true}
        })
        builder.addCase(createProjectThunk.fulfilled,(state, {payload})=>{
            return {...state, isLoading:false, data:payload}
        })
        builder.addCase(createProjectThunk.rejected,(state,error)=>{
            return {...state, isLoading:false, error:error.error.message as string}
        })
    },
})

export default createProjectSlice.reducer