<template>
  <diV id="app">
    <clicker-box/>
    <shop></shop>
    <div>
      <p>
        Created by Pontakorn Paesaeng
        <br>
        PC only for now
      </p>
    </div>
  </diV>
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
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}
</style>
