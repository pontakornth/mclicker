<template>
  <div id="app">
    <q-layout>
      <q-page-container>
        <q-page padding>
    <!-- <timer></timer> -->
    <q-card class="col-8 centered">
      <q-card-main>
        <clicker-box/>
            <p class="desc">Buy these</p>
        <shop/>
      </q-card-main>
    </q-card>
    <div>
      <p>
        Created by Pontakorn Paesaeng
        <br>
        PC only for now
      </p>
    </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import ClickerBox from './components/ClickerBox'
import Shop from './components/Shop'
// import Timer from './components/Timer'
export default {
  name: 'App',
  components: {
    ClickerBox,
    Shop
  //  Timer
  }
}
</script>

<style>
.centered {
  align-content: center;
  justify-content: center;
}
</style>
