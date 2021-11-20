<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <CounterApp :start="11"/> -->
  <IndecisionApp /> 
</template>

<script>
// import CounterApp from './components/CounterApp.vue'
import IndecisionApp from './components/IndecisionApp.vue'

export default {
  name: 'App Main',
  components: {
    // CounterApp,
    IndecisionApp
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 2rem;
  text-align: center;
}
</style>
