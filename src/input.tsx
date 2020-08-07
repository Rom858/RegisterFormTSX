import React from "react";
import { Input, Select, Switch } from "antd";
const { Option } = Select;

export const inputField = (placeholder) => {
  return <Input placeholder={placeholder} />;
};
interface Props {
  values: number[];
  defaultValues: number;
  index: number;
  value: number;
}
const SelectField: React.FC<Props> = ({ defaultValues, values }) => {
  return (
    <Select defaultValue={defaultValues} style={{ width: 120 }}>
      {values.map((value, index) => {
        return (
          <Option value={value} key={index}>
            {value}
          </Option>
        );
      })}
    </Select>
  );
};
export default SelectField;
export const SwitchField = () => {
  return <Switch defaultChecked style={{ maxWidth: 50 }} />;
};
