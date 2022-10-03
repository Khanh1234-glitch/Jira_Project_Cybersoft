import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import SignIn from "./Slices/auth/SignIn";
import  Category  from './Slices/Category';
import  CreateProject  from './Slices/Project/CreateProject';
import AllProject from "./Slices/Project/AllProject";
import EditProject from "./Slices/Project/EditProject";
const store = configureStore({
  reducer: {
    SignIn,
    Category,
    CreateProject,
    AllProject,
    EditProject,
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
