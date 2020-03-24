<template>
  <div>
    <h1>ToDo APP</h1>
    <hr>
  <div class="container">
    <div
      class="todo-container"
      v-if="todos.length == 0"
    >
      No Todos, good to go.
    </div>
    <div
      v-else
      class="todo-container"
    >
      <TD
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        @completeTask="completeTask(index)"
        @deleteTodo="deleteTodo(index)"
      />
    </div>

    <form
      class="new-todo"
      @submit.prevent="saveTodo"
    >
      <input
        type="text"
        class="form-control"
        id="title"
        v-model="title"
        required
      />
      <br />
      <button
        type="submit"
        class="btn btn-secondary"
        id="btn1"
      >Create</button>
    </form>

  </div>
</div>
</template>

<script>
import TD from "./TD.vue";

export default {
  components: { TD },

  data() {
    return {
      todos: [],
      title: null
    };
  },
  methods: {
    saveTodo() {
      if(!this.todos) { this.todos = []; }
      this.todos.push({
        title: this.title,
        done: false
      });
      this.title = "";
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    completeTask(index) {
      this.todos[index].done = true;
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    deleteTodo(index){
      this.todos.splice(index,1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  },

  mounted() {

    if (localStorage) {
      this.todos = JSON.parse(localStorage.getItem("todos"));
    }
  }
};
</script>
<style>
.container {
  margin: 0 auto;
  width: 500px;
}
h1 {
  text-align: center;
  font-weight: bold;
}
.new-todo {
  margin: 10px;
  border-top: 1px solid #bbb;
  padding: 10px;
}
</style>
