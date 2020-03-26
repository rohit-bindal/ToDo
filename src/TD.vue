<template>
  <div class="todo">
    <button
      id="closeButton"
      style="float: right"
      @click="deleteTodo"
    >x</button>
    <input
      type="checkbox"
      :checked="todo.done"
      @click="completeTodo"
    />
    {{ todo.title }}
  </div>
</template>

<script>
import {store} from './store/store'
import {mapMutations} from 'vuex'
export default {
  props: {
    todo: {
      type: Object,
    },
    index: {
      type: Number
    },
    done:{
      type: Boolean
    }
  },
  methods: {
    deleteTodo(){
      this.$store.dispatch('deleteTodo',this.index);
    },
    completeTodo(){
      this.$store.dispatch('completeTodo',this.index);
    }
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
