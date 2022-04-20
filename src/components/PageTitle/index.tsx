import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addList, changeTitle } from "../../redux/changeSlice";
import { Filter, Input, Button } from "../Style/styled";
import { RootState } from "../../redux/store";

function PageTitle({ $width = "100%", aligin, list, ...rest }: any) {
  const dispatch = useDispatch();

  const { isEdit }: { isEdit: boolean } = useSelector(
    (state: RootState) => state.counter
  );

  const { user_Id }: { user_Id: string } = useSelector(
    (state: RootState) => state.counter
  );
  
  const getTitleEdit: string = useSelector(
    (state: RootState) => state.counter.edit
  );

  const [input, setInput] = useState<string>("");

  const [inputEdit, setInputEdit] = useState<string>("");

  useEffect(() => {
    setInputEdit(getTitleEdit);
  }, [getTitleEdit]);

  const { id }: { id: string } = useSelector(
    (state: RootState) => state.counter
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    dispatch(addList({ title: input, user_Id: list.user_Id }));
  };

  const handleEdit = () => {
    dispatch(changeTitle({ inputEdit, id, user_Id: list.user_Id }));
  };

  return (
    <div>
      {isEdit ? (
        <Filter>
          <Input
            value={user_Id === list.user_Id ? inputEdit : ""}
            placeholder="Research"
            onChange={(e) => setInputEdit(e.target.value)}
            $width="70%"
          ></Input>
          <Button $width="10%" onClick={handleEdit}>
            Edit
          </Button>
        </Filter>
      ) : (
        <Filter>
          <Input
            value={input}
            placeholder="Research"
            onChange={ handleChange}
            $width="70%"
          ></Input>
          <Button $width="10%" onClick={handleClick}>
            Add
          </Button>
        </Filter>
      )}
    </div>
  );
}
export default PageTitle;
