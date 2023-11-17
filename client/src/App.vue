<template>
  <taskList />
</template>

<script>
import taskList from './components/TaskList.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    taskList
  },
  data(){
    return {
      
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
