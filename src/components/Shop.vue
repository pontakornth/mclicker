<template>
  <div class="shop">
    Buy these
    <item v-bind:cost=2 name="Kitchen Knife" v-bind:power="2"></item>
  </div>
</template>

<script>
import Item from './Item.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['buyAndSetPower'])
  },
  computed: mapGetters(['isBuyable']),
  components: {
    Item
  }
}
</script>

<style>
.shop {
  background-color: brown;
  font-size: 16px;
  color: whitesmoke;
  margin: 20px;
}
</style>
