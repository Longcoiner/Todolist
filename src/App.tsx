import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import PageTitle from "./components/PageTitle";
import { Wrapper } from "./components/Style/styled";
import TableList from "./components/TableList/TableList";
import { IUserTodo } from "./interface";
import { RootState } from "./redux/store";

function App() {
  const { allTodo: allTodos } = useSelector(
    (state: RootState) => state.counter
  );


  const { UserIdDay }: { UserIdDay: string } = useSelector(
    (state: RootState) => state.counter
  );
  const { isDay }: { isDay: string } = useSelector(
    (state: RootState) => state.counter
  );

// const {allTodo, UserIdDay, isDay} = useAppSelector(state => state.counter)

  const [todo, setTodo] = useState<IUserTodo[]>([]);

  useEffect(() => {
    setTodo(allTodos);
  }, [allTodos]);

  useEffect(() => {
    if (isDay === "last day") {
      const newArray = allTodos.map((todo: any) => {
        if (todo.user_Id === UserIdDay) {
          const newArray = todo.todoList.filter((y: any) => y.day === "last day");
          return { ...todo, todoList: newArray };
        }
        return todo;
      });
      setTodo(newArray);
    }

    if (isDay === "today") {
      const newArray = allTodos.map((todo: any) => {
        if (todo.user_Id === UserIdDay) {
          const newArray = todo.todoList.filter((y: any) => y.day === "today");
          return { ...todo, todoList: newArray };
        }
        return todo;
      });
      setTodo(newArray);
    }

    if (isDay === "tomorrow") {
      const newArray = allTodos.map((todo: any) => {
        if (todo.user_Id === UserIdDay) {
          const newArray = todo.todoList.filter((y: any) => y.day === "tomorrow");
          return { ...todo, todoList: newArray };
        }
        return todo;
      });
      setTodo(newArray);
    }
  }, [isDay, UserIdDay, allTodos]);

  return (
    <>
      {todo.map((list: any) => {
        return (
          <Wrapper>
            <PageTitle list={list} />
            <TableList list={list} />
          </Wrapper>
        );
      })}
    </>
  );
}

export default App;
