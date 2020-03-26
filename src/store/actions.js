export const  saveTodo = (context,title) =>{
    const todo={
      title: title,
      done: false
    }
    context.commit('ADD_TODO',todo);
};

export const completeTodo = (context,index) =>{
    context.commit('TASK_DONE',index);
};

export const deleteTodo = (context,index) => {
    context.commit('DELETE_TODO',index);
};

export const deleteCompletedTodo = (context, i) => {
  context.commit('DELETE_COMPLETED_TODOS', i);
};
