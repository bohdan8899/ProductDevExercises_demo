<template>
  <div class="new">
    <input
      type="text"
      id="new-todo"
      placeholder="to do something"
      v-model="newTodoInput"
      v-on:keydown.enter="addTodo(newTodoInput);"
    >
    <button class="add-new-btn" @click="addTodo(newTodoInput);">Add</button>
  </div>
</template>

<script>
export default {
  name: "TodoNew",
  data() {
    return {
      newTodoInput: ""
    };
  },
  methods: {
    addTodo(newTodo) {
      this.$store.commit("todo/addTodo", newTodo);
      this.newTodoInput = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.new {
  width: 100%;
  font-size: 18px;
  #new-todo {
    padding: 5px 10px;
    line-height: 1;
    &:focus {
      outline: none;
    }
  }
  .add-new-btn {
    padding: 6px 10px;
    border: 1px solid #dadadc;
    background-color: #efefef;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
