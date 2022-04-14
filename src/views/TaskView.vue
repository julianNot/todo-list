<template>
  <h1>Todo List</h1>
  <task-search />
  <new-task />
  <task-list  />
</template>

<script>
import NewTask from "@/components/tasks/NewTask.vue";
import TaskList from "@/components/tasks/TaskList.vue";
import TaskSearch from '../components/tasks/TaskSearch.vue'

export default {
  name: "TaskView",
  components: {
    NewTask,
    TaskList,
    TaskSearch
  },
};
</script>

<style>

</style>