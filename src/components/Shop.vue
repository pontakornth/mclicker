<template>
  <div>
    <item v-for="weapon in weapons" v-bind:key="weapon.id" v-bind:cost="weapon.cost" v-bind:name="weapon.name" v-bind:power="weapon.power"></item>
  </div>
</template>

<script>
import Item from './Item.vue'
import { mapActions, mapGetters } from 'vuex'
import weapons from '../weapons'
export default {
  methods: {
    ...mapActions(['buyAndpowerUp'])
  },
  computed: mapGetters(['isBuyable']),
  data: () => {
    return { weapons }
  },
  components: {
    Item
  }
}
</script>

<style>
</style>
