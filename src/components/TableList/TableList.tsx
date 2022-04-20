import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { Todo } from "../../interface";
import {
  changeDay,
  deleteStatus,
  editTitle,
  changeStatus,
} from "../../redux/changeSlice";
import {
  Daysection,
  Delete,
  Edit,
  Select,
  Table,
  Td,
  Th,
  Theday,
  Tr,
} from "../Style/styled";

// interface IP {
//   data: Todo[];
//   handleChange: (e: ChangeEvent<HTMLInputElement>, id: string | number) => void;
// }

const TableList = ( {list} : any) => {
  console.log(typeof(list));
  console.log((list));
  
  const dispatch = useDispatch();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: string | number
  ) => {
    dispatch(
      changeStatus({ value: e.target.value, id, user_Id: list.user_Id })
    );
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(changeDay({ value:( e.target as HTMLInputElement ).name, user_Id: list.user_Id }));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteStatus({ id, user_Id: list.user_Id }));
  };

  const handleEdit = (title: string, id: string) => {
    dispatch(editTitle({ title, isEdit: true, id, user_Id: list.user_Id }));
  };

  return (
    <Table>
      <Daysection>
        <Theday onClick={ handleClick} name="last day">
          Lastday
        </Theday>
        <Theday onClick={ handleClick} name="today">
          Today
        </Theday>
        <Theday onClick={ handleClick} name="tomorrow">
          Tommorow
        </Theday>
      </Daysection>
      <Tr>
        <Th>Title</Th>
        <Th>Status</Th>
      </Tr>
      {list.todoList.map((value: Todo, key: number) => {
        return (
          <Tr key={value.id}>
            <Td>{value.title}</Td>
            <Td>
              <Select
                key={value.id}
                value={value.status}
                aria-label="Default select example"
                onChange={(e: any) => handleChange(e, value.id)}
              >
                <option value="done">Done</option>
                <option value="notStart">Not Start</option>
                <option value="inprogress">inprogress</option>
              </Select>
            </Td>
            <Td>
              <Edit onClick={() => handleEdit(value.title, value.id)}>
                Edit
              </Edit>
            </Td>
            <Td>
              <Delete onClick={() => handleDelete(value.id)}>X</Delete>
            </Td>
          </Tr>
        );
      })}
    </Table>
  );
};

export default TableList;
