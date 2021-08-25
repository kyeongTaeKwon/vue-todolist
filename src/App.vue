<template>
  <div id="app">
    <todo-header/>
    <todo-input  />
    <todo-list  />
    <todo-footer />
  </div>
</template>

<script>
 import TodoHeader from './components/TodoHeader.vue';
 import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
  html,body {
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    background-color: #f6f6f6;
  }
  #app {
    height: 100%;
  }
  input {
    border-style: groove;
    border-radius: 4px;
    width: 200px;
    height: 40px;
  }
  button {
    border-style: groove;
    background: none;
    border: none;
  }

  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
