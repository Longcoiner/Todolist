import React from "react";

import { Table, Tr, Th, Td, Select } from "../pageList/styled";
const TableList = ({ data }) => {
  return (
    <Table>
      <Tr>
        <Th>Title</Th>
        <Th>Status</Th>
      </Tr>
      {data.map((value, key) => {
        return (
          <Tr key={value.id}>
            <Td>{value.title}</Td>
            <Td>{value.status}</Td>
          </Tr>
        );
      })}
    </Table>
  );
};

export default TableList;
