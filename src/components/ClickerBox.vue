<template>
  <div class="row">
    <h1 class="col-12 q-pa-sm"> Wow, you clicked {{clickedTimes}} </h1>
    <div class="col-12 q-ma-sm-auto">
      <q-btn class="q-ma-sm-auto self-center" label="Click me" color="primary" @click="click"></q-btn>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState(['clickedTimes']),
  methods: {
    ...mapActions(['click'])
  }
}
</script>

<style>
</style>
