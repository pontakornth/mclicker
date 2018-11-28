<template>
  <div>
    <h1> Wow, you clicked {{clickedTimes}} </h1>
    <button class="click-this" @click="click">Click me</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState(['clickedTimes']),
  methods: mapActions(['click'])
}
</script>

<style>
.click-this {
  color: white;
  background-color: darkblue;
  border-style: solid;
  border-color: black;
  border-width: 5px;
  border-radius: 12px;
}
</style>
