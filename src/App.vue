<template>
  <div class="app">
    <AppHeader></AppHeader> <TodoInput v-on:todo:add="addTodo"></TodoInput>
    <TodoItem
      v-for="todo in todos"
      v-bind:todo="todo"
      v-on:todo:remove="removeTodo"
      :key="todo.id"
    ></TodoItem>
  </div>
</template>

<script src="./app.js"></script>
