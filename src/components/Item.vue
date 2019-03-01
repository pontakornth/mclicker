<template>
  <q-btn color="primary q-ma-sm"  v-bind:disabled="!(isBuyable(cost))" @click="buyAndPowerUp({cost:cost, power:power})">{{name}}</q-btn>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['buyAndPowerUp'])
  },
  computed: mapGetters(['isBuyable']),
  props: ['cost', 'power', 'name']
}
</script>

<style>
</style>
