<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  data(){
    return {
      baseURL: 'http://localhost:3000',
      msg: ''
    }
  },
  mounted(){
    axios.get(this.baseURL+'/API_HU')
    .then(response => {
      this.msg = response.data.message;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
