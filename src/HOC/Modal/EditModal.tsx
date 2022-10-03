import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { Editor } from "@tinymce/tinymce-react";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import { Option } from "antd/lib/mentions";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createEditProject } from "../../Slices/Project/EditProject";
import { AppDispatch, RootState } from "../../store";


const EditModal = () => {
  const { data } = useSelector((state: RootState) => state.EditProject);
  const dispatch = useDispatch<AppDispatch>();
  const param = useParams()
  useEffect(()=>{
    dispatch(createEditProject(param.id))
  })
  const log = (content: any) => {
    console.log(content);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: data?.id,
      projectName: data?.projectName,
      creator: data?.creator,
      description: data?.description,
      categoryId: data?.categoryId,
    },
    onSubmit: (values: any) => {
      console.log(values);

      // dispatch(createEditFilmUpdate(formData));
    },
  });

  return (
    <div>
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="id"
              label="Project id"
              rules={[{ required: true, message: "Please enter id" }]}
            >
              <Input
                placeholder="Please enter id"
                disabled
                onChange={formik.handleChange}
                value={formik.values.id}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="projectName"
              label="Project name"
              rules={[{ required: true, message: "Please enter Project name" }]}
            >
              <Input
                style={{ width: "100%" }}
                onChange={formik.handleChange}

                placeholder="Please enter Project name"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={16}>
            <Form.Item
              name="categoryId"
              label="Project category"
              rules={[
                {
                  required: true,
                  message: "Please select an Project category",
                },
              ]}
            >
              <Input
                style={{ width: "100%" }}
                placeholder="Please enter Project category"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="description123"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "please enter url description",
                },
              ]}
            >
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
            </Form.Item>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditModal;
