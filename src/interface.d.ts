export interface Todo {
  id: string;
  title: string;
  status: string;
  day: string;
}
export interface AddList {
  id: number;
  title: string;
  status: string;
  day: string;
}

export interface IUserTodo {
  user_Id?: string;
  todoList?: Todo[];
}
