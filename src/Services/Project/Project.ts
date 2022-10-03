
import { CreateProject } from './../../Interface/CreateProject/CreateProject';
import React from 'react'
import axiosClient from '../AxiosClient'
import { AllProjectInterface } from '../../Interface/AllProject/AllprojectInterface';
import { EditProject } from '../../Interface/AllProject/EditProject';


const Project =  {
    CreateProject:(values:CreateProject)=>{
        return axiosClient.post<unknown,CreateProject>(`/Project/createProject`,values);
    },
    AllProject:()=>{
        return axiosClient.get<unknown,AllProjectInterface[]>(`/Project/getAllProject`);
    },
    UpdateProject:(id:any)=>{
        return axiosClient.put<unknown, EditProject>(`/projectmanament/edit/${id}`);
    }
}

export default Project