<template>
  <div class="hello">
    <h1>{{ msg }}    
    </h1>      
    <div>
      <button v-on:click="fetch" class="PrimaryButton TextButton">Fetch party</button>
    </div>
   <pre id="result" class="output"></pre>
  </div>
</template>

<script>
import asiAxios from 'axiospackage'
export default {
  name: 'HelloWorld',
  props: { 
    msg: String
  },
methods: {
    fetch: function (event) {
      // `this` inside methods points to the Vue instance
      alert("hello");
      
       asiAxios.get('api/Party?id=113')
                .then(response => {
                    const partyData = JSON.stringify(response);
                    // append to DOM
                    const element = document.getElementsByClassName('output')[0];
                    element.innerHTML = partyData;
                })
                .catch(error => console.error(error));  
      if (event) {
        event.preventDefault();
      }
    }
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
