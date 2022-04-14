import { useState } from "react";
import "./App.css";
import PageList from "./component/pageList";
import { Wrapper } from "./component/pageList/styled";
import TableList from "./component/TableComponent/TableList";
const InitData = [
  {
    id: 1,
    title: "homework",
    status: "done",
    day: "today",
  },
  {
    id: 2,
    title: "excise",
    status: "none",
    day: "today",
  },
  {
    id: 3,
    title: "swimming",
    status: "done",
    day: "today",
  },
];
function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(InitData);
  const handleAdd = () => {
    const newData = {
      id: data.length+1,
      title: input,
      status: "none",
    };

    setData((prev) => [...prev, newData]);
  };
  return (
    <Wrapper>
      <PageList setInput={setInput} handleAdd={handleAdd}></PageList>
      <TableList data={data}></TableList>
    </Wrapper>
  );
}

export default App;
