<template>
  <div class="shop">
    <p class="desc">Buy these</p>
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
    return {weapons}
  },
  components: {
    Item
  }
}
</script>

<style>
.shop {
  width: 80%;
  padding-bottom: 100px;
  display: flex;
  background-color: brown;
  font-size: 16px;
  color: whitesmoke;
  margin: 20px;
  flex-flow: row;
  padding: 10px;
  border-style: solid;
  border-width: 15px;
  border-color: black;
  border-radius: 12px;
}
.desc {
  align-self: center
}
</style>
