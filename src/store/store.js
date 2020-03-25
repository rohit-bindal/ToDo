import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    todos: [],
    title: null
  },
  mutations: {
    saveTodo: state =>{
      if(!state.todos) { state.todos = []; }
      state.todos.push({
        title: state.title,
        done: false
    });
    state.title = "";
    localStorage.setItem("todos", JSON.stringify(this.todos));
  },
  completeTask: (state, index)=> {
    state.todos[index].done = true;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  },
    deleteTodoby: (state, index)=>{
      state.todos.splice(index,1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    completeTodo: state=>{
        state.$emit("completeTask");
    },
      deleteTodo: state=>
      {
        state.$emit("deleteTodo");
      }
}
})
