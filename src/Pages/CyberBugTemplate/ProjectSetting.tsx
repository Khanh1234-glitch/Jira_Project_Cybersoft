import React, { useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { createCategory } from "../../Slices/Category";
import { createProjectThunk } from "../../Slices/Project/CreateProject";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { Option } from "antd/lib/mentions";

const ProjectSetting = () => {
  const { data } = useSelector((state: RootState) => state.Category);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(createCategory());
  }, []);
  const log = (content: any) => {
    console.log(content);
  };
  // const handleChange = (value: string) => {
  //   console.log(`selected ${value}`);
  // };
  // const { Option } = Select;
  const handleSubmit = (values: any) => {
    dispatch(createProjectThunk(values));
    console.log(values);
  };
  const onChange = (values: any) => {
    console.log(values);
  };
  return (
    <div className="container ">
      <h3>Create Project</h3>
      <Form className="container" onFinish={handleSubmit}>
        <Form.Item label="projectName " name="projectName">
          <Input />
        </Form.Item>
        <Form.Item label="description" name="description">
          <Input />
        </Form.Item>
        <Form.Item label="categoryId" name="categoryId">
          <InputNumber   />
        </Form.Item>
        <Form.Item style={{display:"none"}}  label="alias" name="alias">
          <Input type={"hidden"}/>
        </Form.Item>
        <Editor
          initialValue="<p>Hello </p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          onEditorChange={log}
        />
        <div className="form-group" >
        <Form.Item label="alias" name="alias">
        <Select className="form-control" >
            {data.map((item, index)=>{
              return(
                <Option key={item.projectCategoryName}>{item.projectCategoryName}</Option>
              )
            })}
          </Select>
        </Form.Item>

        </div>
        <Button className="btn btn-outline-primary" htmlType="submit">
          Create project
        </Button>
      </Form>
    </div>
  );
};

export default ProjectSetting;
