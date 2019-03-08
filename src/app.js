import AppHeader from "./components/AppHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoItem from "./components/TodoItem.vue";
export default {
  name: "App",
  components: { AppHeader, TodoInput, TodoItem },
  data() {
    return {
      todos: [{ id: 0, text: "Learn Vue!" }],
      nextId: 1
    };
  },
  methods: {
    addTodo(text) {
      this.todos.push({
        id: this.nextId,
        text: text
      });
      this.nextId++;
    },
    removeTodo(id) {
      let todos = this.todos;
      this.todos = todos.filter(todo => todo.id != id);
    }
  }
};
