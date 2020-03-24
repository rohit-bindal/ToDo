<template>
  <div class="">
    <NewToDo />
  </div>
</template>
<script>
import NewToDo from "./NewToDo.vue";
export default {
  components: { NewToDo },
  data() {
    return {
      title: "",
      project: ""
    };
  }
}
</script>

<style>
</style>
