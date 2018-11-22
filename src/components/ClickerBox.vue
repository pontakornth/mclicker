<template>
  <div>
    <h1> Wow, you clicked {{clicked_times}} </h1>
    <button @click="click">Click me</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState(['clicked_times']),
  methods: mapActions(['click'])
}
</script>

<style>

</style>
