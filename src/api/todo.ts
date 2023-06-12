import { baseURL } from "./baseURL";

export const getTodo = async () => {
  try {
    const res = await baseURL.get("/todos");
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const createTodo = async (todo: string) => {
  try {
    const res = await baseURL.post("/todos", {
      todo: todo,
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const res = await baseURL.delete(`/todos/${id}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (
  id: number,
  isCompleted: boolean,
  todo: string
) => {
  try {
    const res = await baseURL.put(`/todos/${id}`, {
      todo: todo,
      isCompleted: isCompleted,
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
