<template>
  <section class="task-card-container">
    <article class="task-elements-container">
      <span @click="completed(todo)" class="icon-check" :class="setImgTask" ></span>
      <span class="index">{{ index }}</span>
      <div v-if="!isEditing" class="text-container">
        <p :class="isCheck">{{ todo.title }}</p>
        <p class="descript">{{ todo.descript }}</p>
        <ul v-for="tag in todo.tags" :key="tag.id">
          <li class="tag-li">#{{ tag }}</li>
        </ul>
      </div>
      <div v-else>
        <input
          v-bind:value="titleChange"
          @change="todoTitleChange"
          type="text"
          placeholder="titulo"
        />
        <input
          v-bind:value="descriptChange"
          @change="todoDescripChange"
          type="text"
          placeholder="Descripcion"
        />
        
      </div>

      <div class="buttons-container">
        <div class="absolute-buttons">
          <button class="btn btn-edit" @click="updateTodoElements(todo)">
            {{ isEditing ? "Actualizar" : "Editar" }}
          </button>
          <button class="btn btn-delete" @click="deleteTodo(todo)">
            delete
          </button>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    index: Number,
    todo: {},
  },
  data() {
    return {
      isEditing: false,
      titleChange: "",
      descriptChange: "",
    };
  },
  computed : {
    isCheck(){
      return this.todo.isCompleted ? 'task-is-completead' : 'title'
    },
    setImgTask(){
      return this.todo.isCompleted ? 'task-img-completed ' : ''
    }
  },
  methods: {
    ...mapActions("task", ["deleteTodo", "updateTodo", "markCompleted"]),
    todoTitleChange(e) {
      this.titleChange = e.target.value;
    },
    todoDescripChange(e) {
      this.descriptChange = e.target.value;
    },
    updateTodoElements(todo) {
      this.isEditing = this.isEditing == true ? false : true;
      if (this.isEditing) {
        this.titleChange = todo.title;
        this.descriptChange = todo.descript;
        this.updateTodo(todo);
      } else {
        todo.title = this.titleChange;
        todo.descript = this.descriptChange;
      }
    },
    completed(todo){
      this.markCompleted(todo)
    },
  },
};
</script>

<style scoped>
.task-card-container {
  display: block;
  width: 100%;
  margin: 0 auto 0;
}

.task-elements-container {
  display: flex;
  /* border: 1px solid black; */
  border-bottom: 1px solid gray;
  padding: 8px;
}

.icon-check,
.index {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: auto 5px;
}

.icon-check {
  cursor: pointer;
  background-image: url("../../assets/imgs/cheque.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.title {
  font-size: 1rem;
  font-weight: bold;
  margin: auto 5px;
  text-align: initial;
}

.descript {
  font-size: 0.9rem;
  font-weight: 300;
  color: rgba(128, 128, 128, 1.5);
  margin: auto 5px;
  padding: 3px 0;
  text-align: initial;
}

ul {
  display: inline-block;
  padding: 0px;
  margin: 1px;
}

.tag-li {
  font-size: 0.8rem;
  background-color: rgba(0, 67, 192, 0.788);
  color: white;
  border-radius: 4px;
  padding: 5px;
}

li {
  list-style: none;
  margin: 3px;
}

button {
  display: inline-block;
  margin: auto 5px;
}
.text-container {
  width: 60%;
}

.buttons-container {
  position: relative;
  /* max-width: 30px; */
  /* margin-left: 100px; */
}

.absolute-buttons {
  position: absolute;
  right: -30;
}

.btn {
  border-radius: 3px;
  display: inline-block;
  padding: 2px 4px;
  margin: 5px 0;
  color: white;
  border: none;
  cursor: pointer;
}

.btn-edit {
  background-color: #770fee;
}

.btn-delete {
  background-color: #c40051;
}

.task-is-completead{
  font-size: 1rem;
  font-weight: bold;
  margin: auto 5px;
  text-align: initial;
  text-decoration: line-through;
  color: gray;
}

.task-img-completed {
  -webkit-filter: grayscale(1);
  filter: gray;
  filter: grayscale(1); 
}
</style>