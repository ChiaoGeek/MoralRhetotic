<template lang="html">
  <div class="header-banner" id="headerBanner">
    <div class="header-container">
      <div class="header-left">
        <span class="logo-span"></span><img class="logo-span-img" src="../../assets/img/logo.png" alt="" >
        <span class="header-name">
          <a class="header-name-a" href="#">Moral Rhetoric</a>
        </span>
      </div>
      <div class="header-right">
        <input class="search-input" type="text" placeholder="Search...">
      </div>
      <div class="header-middle">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerIndex',
  data () {
    return {
      ifScroll: false,
      bannerSection: true

    }
  },

  mounted () {

  },
  methods: {

  },
  components: {}
}
</script>

<style lang="css" scoped>
  .header-banner {
    width: 100%;
    height: 43px;
    background-color: rgb(44, 44, 44);
  }
  .header-container {
    /* width: 83.5%; */
    width: 1190px;
    height: 100%;
    margin: auto;
    /* background-color: rgba(220, 33, 20, 0.2) */
  }
  .header-left {
    width: 20%;
    height: 100%;
    /* background-color: rgba(255, 0, 0, 0.5); */
    float: left;
    line-height: 100%;
  }
  .logo-span {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .logo-span-img{
    vertical-align: middle;
    width: 30px;
    height: 30px;
  }
  .header-name-a {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }
  .header-right {
    /* width: 3%; */
    height: 100%;
    /* background-color: rgba(1, 2, 3, 0.6); */
    float: right;

  }
  .search-input {
    width: 150px;
    padding: 6px 15px 6px 30px;
    margin: 3px;
    background: url('../../assets/img/search.png') no-repeat 8px 6px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius:15px;
  	-moz-border-radius:15px;
  	-webkit-border-radius:15px;
    border:1px solid #2a2e31;
    font-size: 12px;
	  color: white;
    margin-top: 7px;
    /* word-spacing: 5px; */
    letter-spacing: 1px;
  }
  input:focus, textarea:focus {
    outline: none;
  }
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #e3e5e8;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: #e3e5e8;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: #e3e5e8;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: #e3e5e8;
}
</style>
