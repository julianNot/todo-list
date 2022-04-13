<template>
  <form @submit.prevent="">
    <input
      class="field"
      type="text"
      placeholder="Titulo"
      @change="todoEdit"
      v-bind:value="title"
    />
    <input
      class="field"
      type="text"
      placeholder="Descripcion"
      v-model="descript"
    />
    <input class="field" type="text" placeholder="Tags" v-model="tag" />
    <button class="btn btn-tag" @click="addTagToList">Add Tag</button>
    <button class="btn btn-add" @click="addNewTodo">Add</button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      tag: "",
      title: "",
      descript: "",
      isCompleted : false,
      tags: [],
    };
  },
  methods: {
    ...mapActions("task", ["addTodoAction"]),
    ...mapGetters("task", ["allTodos"]),
    addTagToList() {
      let tmpTag = this.tag;
      this.tags.push(tmpTag);
      this.tag = "";
    },
    addNewTodo() {
      let todo = {
        isCompleted : this.isCompleted,
        title: this.title,
        descript: this.descript,
        tags: this.tags,
      };
      this.addTodoAction(todo);
      this.cleanInputs();
    },
    todoEdit(e) {
      this.title = e.target.value;
    },
    cleanInputs() {
      this.title = "";
      this.descript = "";
      this.tags = [];
    },
  },
};
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

.btn {
  border-radius: 3px;
  display: inline-block;
  padding: 11px 20px;
  margin: 20px 5px;
  color: white;
  border: none;
  cursor: pointer;
}
.btn-add {
  background-color: #3cc93a;
}

.btn-tag {
  background-color: rgb(7, 138, 245);
}

.btn-add:hover {
  background-color: #37b839;
}

.btn-tag:hover {
  background-color: rgb(5, 120, 240);
}
</style>