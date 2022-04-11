<template>
  <h1>Vista tareas</h1>
  <new-task />
  <task-list />
</template>

<script>
import NewTask from '@/components/tasks/NewTask.vue'
import TaskList from '@/components/tasks/TaskList.vue'

export default {
    name : 'TaskView',
    components : {
        NewTask,
        TaskList
    }
}
</script>

<style>

</style>