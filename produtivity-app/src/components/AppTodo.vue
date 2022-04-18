<template>
  <div class="app-container">
    <TodoNew/>
    <TodoList/>
    <TodoStatus/>
  </div>
</template>

<script>
import TodoStatus from "./todo/TodoStatus";
import TodoList from "./todo/TodoList";
import TodoNew from "./todo/TodoNew";

export default {
  name: "AppTodo",
  components: {
    TodoNew,
    TodoList,
    TodoStatus
  }
};
</script>

<style>
.app-container {
  margin: auto;
  margin-top: 100px;
  text-align: center;
}
</style>
