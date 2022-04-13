<template>
  <h1>Todo List</h1>
  <h3>busqueda ...</h3>
  <new-task />
  <task-list />
</template>

<script>
import NewTask from "@/components/tasks/NewTask.vue";
import TaskList from "@/components/tasks/TaskList.vue";

export default {
  name: "TaskView",
  components: {
    NewTask,
    TaskList,
  },
};
</script>

<style>
</style>