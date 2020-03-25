<template>
  <div class="todo">
    <button
      id="closeButton"
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
import {mapMutations} from './store/store'
export default {
  props: {
    todo: {
      type: Object
    }
  },
  methods: {
    ...mapMutations([
      'completeTodo',
      'deleteTodo'
    ])
  }
};
</script>
<style>
#closeButton{
  color: red;
}
.todo {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
