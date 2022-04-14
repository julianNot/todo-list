import { mapGetters } from 'vuex';
<template>
  <input type="text" v-model="search" class="field" placeholder="Busqueda ... Tags con signo # al inicio">
  <div v-for="(todo,index) in results" :key="todo.id" class="table-content-container">
      <template v-if="todo != undefined && todo.title != ''">  
        <task :number="index+1" :todo="todo" />
      </template>
  </div>
</template>

<script>
import Task from '../tasks/Task.vue'

import { mapGetters } from 'vuex'

export default {
    components : {
        Task
    },
    data(){
        return {
            search : '',
            results : []
        }
    },
    computed : {
        ...mapGetters('task',['allTodos']),
    },
    methods : {
        searchContent(value){
            this.results = this.allTodos.filter( todo => todo.title == value || todo.descript == value)
        },
        searchByTags(value){
            const newValue = value.slice(1)
            console.log(newValue);
            console.log( this.allTodos.map( todo => todo.tags.filter(tag => {
                return tag == newValue? this.results.push(todo) : 'f'
            }) ))
            console.log(this.results);
        }
    },
    watch : {
        search(value){
            if(!value.startsWith('#')){
                console.log("no empieza con #");
                this.searchContent(value)
            }else{
                console.log('Empieza con #');
                this.searchByTags(value)
            }
        }
    }
}
</script>

<style>
.field {
  border: solid 1px #ccc;
  padding: 10px;
  margin: 25px 0;
  border-radius: 10px;
  width: 250px;
}

.field:focus {
  border-color: #ccf;
}

.table-content-container {
  background-color: white;
  border-radius: 8px;
  width: 55%;
  padding: 30px;
  margin: 0 auto;
}
</style>