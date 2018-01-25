<template>
  <div id="app">
   <h1>{{ greeting }}</h1>
    <p>{{ message() }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      greeting: 'Welcome to Your Vue.js App'
    }
  },
    methods: {
  	  message: function() {
  		return 'Message from method'
      }
    }
}
</script>

<style lang="scss">

</style>
