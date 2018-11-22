<template>
  <div>
    Buy these
    <button v-bind:disabled="!(isBuyable(2))" @click="buyAndSetPower({cost:2, power:2})">Kitchen Knife LV2</button>
    <button v-bind:disabled="!(isBuyable(10))" @click="buyAndSetPower({cost:5, power:3})">Dagger LV3</button>
    <button v-bind:disabled="!(isBuyable(15))" @click="buyAndSetPower({cost: 16, power:9})">Ultimate Ruler LV9</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['buyAndSetPower'])
  },
  computed: mapGetters(['isBuyable'])
}
</script>

<style>

</style>
