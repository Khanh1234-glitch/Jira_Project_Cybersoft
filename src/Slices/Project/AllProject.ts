import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Project from "../../Services/Project/Project";
import { AllProjectInterface } from "./../../Interface/AllProject/AllprojectInterface";

export interface CreateProjectInterface {
  data: AllProjectInterface[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CreateProjectInterface = {
  data: [],
  isLoading: false,
  error: "",
};
export const createAllProject = createAsyncThunk(
  `project/createAllProject`,

  async () => {
    try {
      const data = await Project.AllProject();
      return data;
    } catch (error) {
      alert(error);
      throw error;
    }
  }
);

const allProjectSlice = createSlice({
  name: "allProjectSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createAllProject.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(createAllProject.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    });
    builder.addCase(createAllProject.rejected, (state, error) => {
      return {
        ...state,
        isLoading: false,
        error: error.error.message as string,
      };
    });
  },
});

export default allProjectSlice.reducer;
