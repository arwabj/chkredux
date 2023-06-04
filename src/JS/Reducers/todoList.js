// 1 import

import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
} from "../ActionTypes/todoList";

// 2 initialState
const initialState = {
  listTasks: [
    { id: Math.random(), text: "task1", isDone: false },
    { id: Math.random(), text: "task2", isDone: false },
  ],
  toggle: false,
};
// 3 pure function

const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, listTasks: [...state.listTasks, payload] };
    case DELETE_TASK:
      return {
        ...state,
        listTasks: state.listTasks.filter((el) => el.id !== payload),
      };
    case DONE_TASK:
      return {
        ...state,
        listTasks: state.listTasks.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        listTasks: state.listTasks.map((el) =>
          el.id === payload.id ? { ...el, text: payload.newTask } : el
        ),
      };
    default:
      return state;
  }
};

export default listReducer;
