<script setup lang="ts">
import { ref, reactive, computed } from "vue";

interface Todo {
  id: number;
  title: string;
  desc: string;
  isDone: boolean;
}

const todos = reactive<Todo[]>([]);
const showTodo = ref(false);
const newTitleTodo = ref("");
const newDescTodo = ref("");
function hiddenAllTodo() {
  showTodo.value = !showTodo.value;
}
function toggleDone(todo) {
  todo.isDone = !todo.isDone;
}
function addNewTodo() {
  todos.push({
    id: todos.length + 1,
    title: newTitleTodo.value,
    desc: newDescTodo.value,
    isDone: false,
  });
  newDescTodo.value = "";
  newTitleTodo.value = "";
}
const listUncompleted = computed(() => {
return todos.filter((todo) => !todo.isDone)
})
</script>

<template>
  <div class="container">
    <h2>Todo list</h2>
    <div class="form">
      <input type="text" v-model="newTitleTodo" name="newTitleTodo" />
      <textarea
        v-model="newDescTodo"
        name="newDescTodo"
        style="height: 100px"
      />
    </div>
    <button class="btn-add" @click="addNewTodo">add todo</button>

    <div>
      <ul>
        <li v-for="todo in listUncompleted" :class="{ done: todo.isDone }" :key="todo.id">
          <input type="checkbox" @click="toggleDone(todo)" />
          <div class="todoItem">
            <h3>{{ todo.title }}</h3>
            <p>{{ todo.desc }}</p>
          </div>
        </li>
      </ul>
    </div>

    <button @click="hiddenAllTodo">Show todo</button>
  </div>
</template>

<style scoped>
body {
  margin: 20px auto;
  background-color: #eee;
  width: 100%;
}
p,
h2,
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #fff;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 10px;
}
li.done {
  background-color: #467899;
  color: #fff;
}
.container {
  margin: 10px;
}
h2 {
  text-align: center;
}
button {
  width: 100%;
  padding: 8px;
  border-radius: 10px;
  border: 0.5px solid;
  margin: 10px auto;
  border-width: 100%;
}
.form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
  flex-direction: column;
}
.form input {
  padding: 5px;
  margin: 5px auto;
}
.todoItem {
  margin: 0 20px;
}
</style>
