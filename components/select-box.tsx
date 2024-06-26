import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const SelectBox: NextPage = () => {
  return (
    <Form.Select className="w-80 font-text-large text-base text-tailwind-v332-gray-800 md:hidden">
      <option value="Select Option 1">Select Option 1</option>
      <option value="Select Option 2">Select Option 2</option>
      <option value="Select Option 3">Select Option 3</option>
    </Form.Select>
  );
};

export default SelectBox;
