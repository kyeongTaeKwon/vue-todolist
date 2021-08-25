<template>
    <div class="inputBox shadow" >
        <input type="text" v-model="todoItem" v-on:keydown.enter='addTodoItem'>
        
        <span class="addContainer">
            <button class="addBtn" v-on:click='addTodoItem'>
                <i class="fas fa-plus"/>
            </button>
            
        </span>
          <Modal v-if='showModal' @close='showModal = false'>
              <h3 slot="header">경고! <i class="closeModalBtn fas fa-times" @click="showModal = false"></i></h3>
              <h4 slot="body">아무것도 입력하지 않으셨습니다.</h4>
              <h3 slot="footer"></h3>
              
          </Modal>
         
    </div>
  
</template>

<script>
import Modal from './common/Modal.vue'
import {createNamespacedHelpers} from 'vuex'

const {mapMutations} = createNamespacedHelpers('todoModule');

export default {
    data(){
        return {
            todoItem:'',
            showModal:false
        }
    },
    methods:{
        ...mapMutations(['addTodo']),
        addTodoItem(){
            if(this.todoItem !== ''){
                this.addTodo(this.todoItem)
                this.clearInput();
            }else{
                this.showModal = true
            }
        },
        clearInput(){
            this.todoItem = ''
        }
    },
    components:{
        Modal
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
        text-align: left;
        
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
        
    }
    .addContainer {
        float:right;
        background:linear-gradient(to right,#6478fb,#8763fb);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
        text-align: center;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>