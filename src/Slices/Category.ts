import { Category } from "./../Interface/ProjectCategory/Category";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CategoryAPI from "../Services/CategoryAPI";

export interface CategoryAPI {
  data: Category[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CategoryAPI = {
  data: [],
  isLoading: false,
  error: "",
};

export const createCategory = createAsyncThunk(
  "projectsetting/category",
  async () => {
    try {
      const data = await CategoryAPI.Category();
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createCategory.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(createCategory.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    });
    builder.addCase(createCategory.rejected, (state, error) => {
      return {
        ...state,
        isLoading: false,
        error: error.error.message as string,
      };
    });
  },
});
export default categorySlice.reducer;
