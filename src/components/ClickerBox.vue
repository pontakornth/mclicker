<template>
  <div>
    <h1> Wow, you clicked {{clickedTimes}} </h1>
    <button @click="click">Click me</button>
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

</style>
