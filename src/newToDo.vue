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
import {store} from './store/store'
import {mapMutations} from 'vuex';
import TD from "./TD.vue";

export default {
  components: { TD },
  methods: {
    ...mapMutations([
      'deleteTodoby',
      'completeTask',
      'saveTodo'
        ])
  },
  mounted() {
    if (localStorage) {
      this.$store.state.todos = JSON.parse(localStorage.getItem("todos"));
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
