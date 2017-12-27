<template>
  <div id="app">
    <header-index ></header-index>
    <router-view></router-view>
  </div>
</template>

<script>
import headerIndex from './components/header/index'
export default {
  name: 'app',
  mounted () {

  },
  components: {
    headerIndex
  }
}
</script>

<style>
html{
  margin: 0px;
  padding: 0px;
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
body{
  margin: 0px;
  padding: 0px;
  height: 100%;
  /*overflow: hidden;*/
}
#app {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  /*background-color: red;*/
}
</style>
