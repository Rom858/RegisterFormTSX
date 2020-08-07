import * as React from "react";
import "antd/dist/antd.css";
import { render } from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { Input, Form, Button } from "antd";
import { FormSC, H1, formItemLayout, formTailLayout } from "./styled";

interface Register {
  firstName: string;
  lastname: string;
  email: string;
  age: number;
  phone: number;
}
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" }
};
const App: React.FC = () => {
  const [isOpen, setOpen] = React.useState(false); // Animation
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    phone: 0
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { register, errors, handleSubmit } = useForm<Register>(); //react-hook-form

  const Label = Form.Item; //antd
  return (
    <>
      <H1 animate={isOpen ? "open" : "closed"} variants={variants}>
        Hello CodeSandbox
      </H1>
      <FormSC
      // animate={isOpen ? "open" : "closed"}
      // variants={variants}
      // transition={{ delay: 0.3, duration: 0.5 }}
      // whileHover={{ scale: [1, 2, 1, 2,1] }}
      >
        <Label {...formItemLayout} name="firstname" label="First Name">
          <Input type="text" onChange={onChange} />
          {errors.firstName && <span> Fuck you gay </span>}
        </Label>
        <Label {...formItemLayout} name="lastname" label="Last Name">
          <Input type="text" onChange={onChange} />
        </Label>
        <Label {...formItemLayout} name="email" label="Email">
          <Input type="text" onChange={onChange} />
        </Label>
        <Label {...formItemLayout} name="age" label="Age">
          <Input type="number" onChange={onChange} />
        </Label>
        <Label {...formItemLayout} name="tel" label="Tel">
          <Input type="number" onChange={onChange} />
        </Label>
        <Label {...formTailLayout}>
          <Input
            type="submit"
            value="Submit"
            style={{
              cursor: "pointer",
              backgroundColor: "#1890FF",
              color: "white"
            }}
          />
        </Label>
      </FormSC>
      <Button type="primary" onClick={() => setOpen(!isOpen)}>
        Toggle
      </Button>
    </>
  );
};
export default App;
const rootElement = document.getElementById("root");
render(<App />, rootElement);
