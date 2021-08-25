<template>
  
      <header>
          <h1>{{header}} {{todoCount}}</h1>
      </header>
  
</template>

<script>
import {createNamespacedHelpers} from 'vuex';

const {mapGetters,mapState} = createNamespacedHelpers('todoModule')
export default {
    computed:{
        ...mapGetters(['todoCount']),
        ...mapState(['header'])
    }
}
</script>

<style scoped>

</style>