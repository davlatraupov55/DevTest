import { createSlice } from "@reduxjs/toolkit";


const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: []

  },
  reducers: {
    setTodo(state, action) {
      state.todo.push(action.payload)
    },
    deleteTodo(state, action) {
      state.todo = action.payload
    },
  }
})

export const { setTodo } = TodoSlice.actions
export const { deleteTodo } = TodoSlice.actions
export default TodoSlice.reducer