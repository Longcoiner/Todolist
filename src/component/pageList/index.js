import { useState } from "react";
import {
  Wrapper,
  Filter,
  Research,
  Button,
  Table,
  Td,
  Th,
  Tr,
  Thead,
  Tbody,
} from "./styled";

function PageList({
  handleAdd,
  setInput,
  $type,
  error,
  $width = "100%",
  isDisabled,
  children,
  $className,
  message,
  aligin,
  ...rest
}) {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    handleAdd()
  };

  return (
    <Filter>
      <Research
        placeholder="Research"
        onChange={(e) => handleChange(e)}
        $width="70%"
      ></Research>

      <Button $width="10%" onClick={handleClick}>
        Add
      </Button>
    </Filter>
  );
}
export default PageList;
