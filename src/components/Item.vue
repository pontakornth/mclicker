<template>
  <button class="item" v-bind:disabled="!(isBuyable(cost))" @click="buyAndPowerUp({cost:cost, power:power})">{{name}}</button>
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
.item {
  width: 100px;
  height: 36px;
  border-style: solid;
  border-color: aliceblue;
  background-color: blue;
  color: aliceblue;
  border-radius: 60px;
  margin: 20px;
}
.item:disabled {
  background-color: gray;
}
</style>
