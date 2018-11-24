<template>
  <button v-bind:disabled="!(isBuyable(cost))" @click="buyAndSetPower({cost:cost, power:power})">{{name}}</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['buyAndSetPower'])
  },
  computed: mapGetters(['isBuyable']),
  props: ['cost', 'power', 'name']
}
</script>

<style>

</style>
