<template>
  <div class="todo">
    <button
      style="float: right"
      @click="deleteTodo"
    >x</button>

    <input
      type="checkbox"
      :value="todo.done"
      @click="completeTodo"
    />
    {{ todo.title }}
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object
    }
  },

  data() {
    return {
      todos: []
    };
  },

  methods: {
    completeTodo() {
      this.$emit("completeTask");
    },
    deleteTodo() {
      this.$emit("deleteTodo");
    }
  }
};
</script>

<style>
.todo {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
