<template>
  <div class="container">
    <ul class="todos-list">
      <li class="todo-item" v-for="todo in todos" :key="todo.id">
        <span
          class="todo-content"
          :class="{ done: todo.done }"
          @click="markItDone(todo)"
          >{{ todo.text }}</span
        >
        <span class="del-todo" @click="deleteTodo(todo)">Delete</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "TodoList",
  methods: {
    markItDone(todo) {
      this.$store.commit("todo/missionCompleted", todo.id);
    },
    deleteTodo(todo) {
      this.$store.commit("todo/deleteTodo", todo.id);
    },
  },
  computed: {
    ...mapGetters('todo', {
      doneTodos: "doneTodos",
      activeTodos: "activeTodos"
    }),
    ...mapState('todo', {
      todos: state => state.todos,
    }),
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 500px;
  width: 80%;
  margin: 0 auto;
  .todos-list {
    list-style: none;
    text-align: left;
    padding-left: 0;
    .todo-item {
      padding: 10px;
      cursor: pointer;
      .todo-content {
        font-size: 20px;
        line-height: 1.5;
        transition: font-weight .5s ease-in-out;
        &:hover {
          font-weight: bold;
        }
      }
      .done {
        text-decoration: line-through;
        color: #dadadc;
        &:hover {
          font-weight: normal
        }
      }
      .del-todo {
        color: #ed8060;
        font-size: 14px;
        float: right;
        &:hover {
          color: #f84510;
          font-weight: normal;
        }
      }
    }
  }
}
</style>
