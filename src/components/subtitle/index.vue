<template lang="html">
  <div class="subtitle-wrap">
    <div class="left-line-wrap line-wrap">
      <div class="blank-line"></div>
      <div class="left-line line"></div>
    </div>
    <div class="right-line-wrap line-wrap">
      <div class="blank-line"></div>
      <div class="right-line line"></div>
    </div>
    <div class="img-logo">
      <span class="helper"></span>
      <img :src="img" alt="">
      <!-- {{img}} -->
    </div>
  </div>
</template>

<script>
export default {
  name: "subTitle",
  props: ['imgName'],
  data () {
    return {
      img: require("../../assets/img/"+this.imgName)
    }
  }
}
</script>

<style lang="css">
  .subtitle-wrap {
    width: 220px;
    height: 60px;
    /* background-color: rgba(1, 2, 3, 0.1); */
    margin: auto;

  }
  .line-wrap {
    width: 81px;
    height: 60px;

  }
  .blank-line {
    width: 100%;
    height: 29.3px;
  }

  .left-line-wrap {
    float: left;
  }
  .right-line-wrap {
    float: right;
  }
  .line {
    width: 100%;
    height: 1px;
    background-color:  #EBEBEB;
  }

  .img-logo {
    width: 58px;
    height: 60px;
    margin-left: 81px;
    text-align: center;

  }
  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .img-logo img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
    /* clear: both; */
  }
</style>
