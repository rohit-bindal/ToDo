export const  saveTodo = (context,title) =>{
    const todo={
      title: title,
      done: false
    }
    context.commit('ADD_TODO',todo);
};

export const completeTodo = (context,done) =>{
    context.commit('TASK_DONE',done);
};

export const deleteTodo = (context,index) => {
    context.commit('DELETE_TODO',index);
};
