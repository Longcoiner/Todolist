/* eslint-disable @typescript-eslint/no-redeclare */
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  allTodo: [
    {
      user_Id: "1",
      todoList: [
        {
          id: nanoid(),
          title: "homework",
          status: "done",
          day: "last day",
        },

        {
          id: nanoid(),
          title: "excise",
          status: "notStart",
          day: "tomorrow",
        },

        {
          id: nanoid(),
          title: "swimming",
          status: "inprogress",
          day: "today",
        },
      ],
    },
    {
      user_Id: "2",
      todoList: [
        {
          id: nanoid(),
          title: "bicycle",
          status: "done",
          day: "last day",
        },

        {
          id: nanoid(),
          title: "car",
          status: "notStart",
          day: "tomorrow",
        },

        {
          id: nanoid(),
          title: "bus",
          status: "inprogress",
          day: "today",
        },
      ],
    },
  ],
  title: "",
  delete: "",
  edit: "",
  isEdit: false,
  newTitle: "",
  id: "",
  user_Id: "",
  isDay: "",
  UserIdDay: "",
};
console.log(typeof nanoid());
const NOT_START = "notStart";

export const changeSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    addList: (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload.title,
        status: NOT_START,
        day: "today",
      };
      state.allTodo.map((todo: any) => {
        if (todo.user_Id === action.payload.user_Id) {
          const newArray = todo.todoList;
          newArray.push(newTodo);
          return newArray;
        }
        return { ...todo };
      });
    },

    changeStatus: (state, action) => {
      state.allTodo = state.allTodo.map((todo: any) => {
        if (todo.user_Id === action.payload.user_Id) {
          todo.todoList.map((y: any) => {
            if (y.id === action.payload.id) {
              y.status = action.payload.value;
            }
            return y;
          });
        }
        return todo;
      });
    },

    deleteStatus: (state, action) => {
      state.allTodo = state.allTodo.map((todo: any) => {
        if (todo.user_Id === action.payload.user_Id) {
          const a = todo.todoList.filter((y: any) => {
            return y.id !== action.payload.id;
          });
         todo.todoList = a
        }
        return todo;
      });
    },

    changeDay: (state, action) => {
      state.isDay = action.payload.value;
      state.UserIdDay = action.payload.user_Id;
    },

    editTitle: (state, action) => {
      state.user_Id = action.payload.user_Id;
      state.allTodo = state.allTodo.map((todo: any) => {
        if (todo.user_Id === action.payload.user_Id) {
          todo.todoList.map((y: any) => {
            if (y.id === action.payload.id) {
              state.edit = action.payload.title;
              state.isEdit = action.payload.isEdit;
              state.id = action.payload.id;
            }
            return y;
          });
        }
        return todo;
      });
    },
    changeTitle: (state, action) => {
      state.allTodo = state.allTodo.map((todo: any) => {
        if (todo.user_Id === action.payload.user_Id) {
          todo.todoList.map((y: any) => {
            if (y.id === action.payload.id) {
              y.title = action.payload.inputEdit;
            }
            return y;
          });
        }
        return todo;
      });
    },
  },
});

export const {
  addList,
  changeStatus,
  changeDay,
  deleteStatus,
  editTitle,
  changeTitle,
} = changeSlice.actions;

export default changeSlice.reducer;
