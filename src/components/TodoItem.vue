<template>
  <div>
    <span> {{ todo.text }} </span>
    <button v-on:click="removeTodo">Remove</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    removeTodo() {
      this.$emit("todo:remove", this.todo.id);
    }
  }
};
</script>
