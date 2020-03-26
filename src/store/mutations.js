export const SET_TODO = (state,payload)=>{
  state.todos=payload;
  localStorage.setItem("todos", JSON.stringify(state.todos));
};

export const ADD_TODO = (state,payload) =>{
  state.todos.push(payload);
    localStorage.setItem("todos", JSON.stringify(state.todos));
};

export const TASK_DONE = (state, index)=> {
 state.todos[index].done = true;
 localStorage.setItem("todos", JSON.stringify(state.todos));
};

export const DELETE_TODO = (state, index)=>{
  state.todos.splice(index,1);
  localStorage.setItem("todos", JSON.stringify(state.todos));
};
