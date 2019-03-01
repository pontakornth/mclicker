<template>
  <div class="timer">
    <h1>{{minutes}}:{{seconds}}</h1>
    <button @click="countdown(120)">Start Game</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
// import { setInterval, clearInterval } from 'timers'
export default {
  methods: {
    ...mapActions(['startGame', 'endGame']),
    countdown (time) {
      const self = this
      self.startGame()
      this.t = setInterval((time) => {
        time -= 1
        if (this.t === 0) {
          self.endGame()
          clearInterval(this.t)
        }
      }, 1000)
    }
  },
  data: function () {
    return {
      times: 120 // In second
    }
  },
  computed: {
    minutes () {
      return Math.floor(this.times / 60)
    },
    seconds () {
      return this.times % 60
    }
  }
}
</script>
<style scoped>
.timer {
  display: block;
  text-align: center;
  border-style:  double;
  border-radius: 100px;
  width: 500px;
  padding: 2.5em;
  border-color: brown;
  background-color: #00fe26;
  box-shadow: 2px 2px 10px green;
  font-family: monospace;
}
button {
  color: azure;
  background-color: #011022;
  border-style: double;
  border-radius: 25px;
}
</style>
