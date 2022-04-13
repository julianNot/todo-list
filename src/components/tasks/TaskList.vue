<template>
  <article class="table-content-container">
    <h2>lista de tareas</h2>
    <section v-for="(todo, index) in allTodos" :key="todo.id">
      <task :todo="todo" :index="index+1" />
    </section>
  </article>
</template>

<script>
import {  mapGetters } from "vuex";


import Task from '@/components/tasks/Task.vue';

export default {
  name : 'TaskList',
  components : {
    Task
  },
  computed : {
    ...mapGetters('task',['allTodos'])
  },
}
</script>

<style scoped>
h2 {
  text-align: initial;
}
.table-content-container {
  background-color: white;
  border-radius: 8px;
  width: 55%;
  padding: 30px;
  margin: 0 auto;
}
</style>