<template>
  <div id="app">
    <img src="./assets/logo.png">
    <clicker-box/>
    <shop></shop>
  </div>
</template>

<script>
import ClickerBox from './components/ClickerBox'
import Shop from './components/Shop'

export default {
  name: 'App',
  components: {
    ClickerBox,
    Shop
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
