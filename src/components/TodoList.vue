<template>
<transition-group name='list' tag='ul'>
    <li v-for="({value,completed},index) in todolist" :key="index + index" class="shadow" >
        <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: completed}" v-on:click='onComplete(index)'></i>
        <span v-bind:class="{textCompleted: completed}">{{ value }}</span>
        <span class="removeBtn" v-on:click='onDeleteTodo(index)'><i class="fas fa-trash-alt"></i></span>
    </li>
  </transition-group>
</template>

<script>
import {createNamespacedHelpers} from 'vuex';

const {mapState,mapMutations} = createNamespacedHelpers('todoModule')

export default {
    computed:{
        ...mapState(['todolist'])
    },

    methods:{
        ...mapMutations(['onComplete','onDeleteTodo']),
    }
}
</script>

<style scoped>
   
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  .checkBtn {
      line-height: 45px;
      color: #62acde;
      margin-right: 5px;
  }

  .checkBtnCompleted {
      color: #b3adad;
  }

  .textCompleted {
      text-decoration: line-through;
      color: #b3adad;
  }

  .removeBtn {
      margin-left: auto;
      cursor: pointer;
      color: #de4343;
  }

  .list-enter-active, .list-leave-active {
      transition: all 0.5s;
  }

  .list-enter, .list-leave-to {
      opacity: 0.1;
      transform: translateX(30px);
  }
 </style>