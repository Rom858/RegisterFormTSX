import styled from "styled-components";
import { motion } from "framer-motion";
import { Input, Form } from "antd";
export const FormSC = styled(motion.form)`
  width: 500px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding-top: 30px;
`;
export const formTailLayout = {
  //for button using offet same as span of labelCol 7
  wrapperCol: {
    span: 12,
    offset: 7
  }
};

export const formItemLayout = {
  // position of input form
  labelCol: {
    span: 7
  },
  // width of input field
  wrapperCol: {
    span: 12
  }
};

export const H1 = styled(motion.h1)``;
