<template lang="html">
  <div class="deeply-container">
    <div class="blank3"></div>
    <div class="trends-timeline-mfd">
      <div class="trends">
        <div class="trends-title">
          <span class="trends-title-img"><img src="../../assets/img/top.png"  width="20px" alt=""></span>
          <span class="trends-title-name">Top Trends</span>
        </div>
        <div class="trends-search">
          <div class="blank4"></div>
          <div class="input-div">
            <input type="text" name="" value="" placeholder="Search" class="trends-input">
          </div>
          <div class="trends-list">
            <ul>
              <li>
                <a href="#">
                  <span class="trends-img"><img src="../../assets/img/tag.png" width="13px;" alt=""></span>
                  <span class="trends-span" data-tippy-html="#tippy" data-tippy-interactive="true"  v-tippy="{  placement : 'top', arrow: true, interactive: true}">#ThanksGiving</span>
                  <span class="tweets-numbers-start"><img src="../../assets/img/purplestart.png" v-show="true" width="13px;" alt=""></span>
                  <span class="tweets-numbers-start"></span>
                  <span class="tweets-numbers-span">199,999</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="trends-img"><img src="../../assets/img/tag.png" width="13px;" alt=""></span>
                  <span class="trends-span" data-tippy-html="#tippy" data-tippy-interactive="true"  v-tippy="{  placement : 'top', arrow: true, interactive: true}">#ThanksGiving</span>
                  <span class="tweets-numbers-start"><img src="../../assets/img/purplestart.png" v-show="true" width="13px;" alt=""></span>
                  <span class="tweets-numbers-start"></span>
                  <span class="tweets-numbers-span">199,999</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="trends-img"><img src="../../assets/img/tag.png" width="13px;" alt=""></span>
                  <span class="trends-span" data-tippy-html="#tippy" data-tippy-interactive="true"  v-tippy="{  placement : 'top', arrow: true, interactive: true}">#ThanksGiving</span>
                  <span class="tweets-numbers-start"><img src="../../assets/img/purplestart.png" v-show="true" width="13px;" alt=""></span>
                  <span class="tweets-numbers-start"></span>
                  <span class="tweets-numbers-span">199,999</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="trends-img"><img src="../../assets/img/tag.png" width="13px;" alt=""></span>
                  <span class="trends-span" data-tippy-html="#tippy" data-tippy-interactive="true"  v-tippy="{  placement : 'top', arrow: true, interactive: true}">#ThanksGiving</span>
                  <span class="tweets-numbers-start"><img src="../../assets/img/purplestart.png" v-show="true" width="13px;" alt=""></span>
                  <span class="tweets-numbers-start"></span>
                  <span class="tweets-numbers-span">199,999</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="trends-img"><img src="../../assets/img/tag.png" width="13px;" alt=""></span>
                  <span class="trends-span" data-tippy-html="#tippy" data-tippy-interactive="true"  v-tippy="{  placement : 'top', arrow: true, interactive: true}">#ThanksGiving</span>
                  <span class="tweets-numbers-start"><img src="../../assets/img/purplestart.png" v-show="true" width="13px;" alt=""></span>
                  <span class="tweets-numbers-start"></span>
                  <span class="tweets-numbers-span">199,999</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="trends-img"><img src="../../assets/img/tag.png" width="13px;" alt=""></span>
                  <span class="trends-span" data-tippy-html="#tippy" data-tippy-interactive="true"  v-tippy="{  placement : 'top', arrow: true, interactive: true}">#ThanksGiving</span>
                  <span class="tweets-numbers-start"><img src="../../assets/img/purplestart.png" v-show="true" width="13px;" alt=""></span>
                  <span class="tweets-numbers-start"></span>
                  <span class="tweets-numbers-span">199,999</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="trends-img"><img src="../../assets/img/tag.png" width="13px;" alt=""></span>
                  <span class="trends-span" data-tippy-html="#tippy" data-tippy-interactive="true"  v-tippy="{  placement : 'top', arrow: true, interactive: true}">#ThanksGiving</span>
                  <span class="tweets-numbers-start"><img src="../../assets/img/purplestart.png" v-show="true" width="13px;" alt=""></span>
                  <span class="tweets-numbers-start"></span>
                  <span class="tweets-numbers-span">199,999</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="trends-img"><img src="../../assets/img/tag.png" width="13px;" alt=""></span>
                  <span class="trends-span" data-tippy-html="#tippy" data-tippy-interactive="true"  v-tippy="{  placement : 'top', arrow: true, interactive: true}">#ThanksGiving</span>
                  <span class="tweets-numbers-start"><img src="../../assets/img/purplestart.png" v-show="true" width="13px;" alt=""></span>
                  <span class="tweets-numbers-start"></span>
                  <span class="tweets-numbers-span">199,999</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="trends-img"><img src="../../assets/img/tag.png" width="13px;" alt=""></span>
                  <span class="trends-span" data-tippy-html="#tippy" data-tippy-interactive="true"  v-tippy="{  placement : 'top', arrow: true, interactive: true}">#ThanksGiving</span>
                  <span class="tweets-numbers-start"><img src="../../assets/img/purplestart.png" v-show="true" width="13px;" alt=""></span>
                  <span class="tweets-numbers-start"></span>
                  <span class="tweets-numbers-span">199,999</span>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <div class="mfd" id="mfd">
        <div class="background-layer" :class="{active : active_flag == 1}">
          <a  class="mfd-link" @click="changeBg(1)">Care</a>
        </div>
        <div class="background-layer" :class="{active : active_flag == 2}">
          <a  class="mfd-link" @click="changeBg(2)">Fairness</a>
        </div>
        <div class="background-layer" :class="{active : active_flag == 3}">
          <a  class="mfd-link" @click="changeBg(3)">Loyalty</a>
        </div>
        <div class="background-layer" :class="{active : active_flag == 4}">
          <a  class="mfd-link" @click="changeBg(4)">Authority</a>
        </div>
        <div class="background-layer" :class="{active : active_flag == 5}">
          <a  class="mfd-link" @click="changeBg(5)">Sanctity</a>
        </div>

      </div>
      <div class="timeline" id="timeline">

      </div>
    </div>

    <div class="index-footer">
      Copy © 2017  Computational Social Science Lab (CSSL)
    </div>
    <!-- tippy -->
    <div id="tippy" style="display:none;" v-tippy-html>
        <div>
          <br />
          <a style="display: block; width: 140px; height: 26px; background-color: rgb(146, 45, 55); color: white; opacity: 1; font-size: 10.9px; text-decoration:none; line-height:26px;font-weight:900; cursor: pointer;">Remove Deep Analysing</a>
          <br />
          <a style="display: block; width: 140px; height: 26px; background-color: #468847; color: white; opacity: 1; font-size: 14px; text-decoration:none; line-height:26px;font-weight:600; cursor: pointer;">Daily Analyze</a>
          <br />
        </div>
    </div>
  </div>
</template>

<script>
import ICountUp from 'vue-countup-v2'
import Jquery from 'jquery'
import rgbatorgb from '../../jsscript/rgbatorgb'
var Highcharts = require('highcharts/highstock')
import compareStock from '../../jsscript/compareStock'
export default {
  name: 'Index',
  components: {
      ICountUp
    },
    data() {
      return {
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        },
        active_flag: 1
      }
    },
    methods: {
      changeBg: function (num) {
        this.active_flag = num
      }
   },
   mounted () {

     var a_collection = document.getElementsByClassName('mfd-link')
     for (var i = 0; i < a_collection.length; i++) {
       var random_value = Math.random()
       a_collection[i].style.backgroundColor = rgbatorgb(30,126,190, random_value, 255, 255, 255)
       if (random_value < 0.3) {
         a_collection[i].style.color = "rgb(88, 88, 95)"
       }
     }
     // highstock
     compareStock(Highcharts, Jquery)


  }
}
</script>

<style lang="css" scoped>

  .deeply-container {
    width: 100%;
  }
  .blank3 {
    width: 100%;
    height: 80px;
  }
  .trends-timeline-mfd {
    width: 90%;
    height: 500px;
    /*background-color: rgba(110, 1, 1, 0.1);*/
    margin: auto;
  }
  .trends {
    width: 30%;
    height: 500px;
    float: left;
    border: 1px solid #d1d5da;
    border-top: 0px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .trends-title {
    width: 100%;
    height: 41px;
    background-color: #1E7EBE;
    line-height: 41px;
    border: 1px solid rgba(27,31,35,0.15);
    border-right: 1px;
    border-bottom: 0;
    border-radius: 3px 3px 0 0;
  }
  .trends-title span{
    margin-left: 15px;
    font-size: 14px;
    color: #ffffff;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  .trends-title-img {
    display: block;
    margin-top: 5px;
    margin-right: 10px;
    float: left;
  }
  .trends-title-name {
    display: block;
    margin-top: 0px;
  }
  .trends-search {
    width: 100%;
    height: 40px;
    background-color: #fafbfc;
    text-align: center;

  }
  .blank4 {
    width: 100%;
    height: 8px;
  }
  .input-div {
    width: 90%;
    height: 20px;
    margin: auto;
  }
  .trends-input {
    height: 20px;
    font-size: 12px;
    /*display: block;*/
    width: 100%;
    line-height: 20px;
    /*padding: 6px 8px;*/
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(27,31,35,0.075);
    letter-spacing: 0.4px;
    margin: auto;
  }
  .trends-list {
    width: 100%;
    height: 460px;
    margin-top: 10px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    text-align: left;
  }
  .trends-list ul{
    width: 100%;
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  .trends-list ul li{
    width: 100%;
    display: list-item;
    border-top: 1px solid #d1d5da;
    height: 33px;
    padding-top: 10px;
  }
  .trends-list ul li a {
    color: #0366d6;
    font-size: 14px;
    text-decoration: none;

  }
  .trends-span {
    margin-left: 5px;
  }
  .trends-img {
    margin-left: 10px;
  }
  .tweets-numbers-start {
    width: 24px;
    float: right;
    height: 24px;
    line-height: 24px;
    margin-right: 10px;
    padding-left: 3px;
    padding-right: 3px;
  }
  .tweets-numbers-span {
    background-color: #468847;
    font-size: 11.049999999999999px;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    /*padding: 2px 4px 3px;*/
    border-radius: 3px;
    float: right;
    height: 24px;
    line-height: 24px;
    margin-right: 10px;
    padding-left: 3px;
    padding-right: 3px;

  }
  .mfd {
    width: 15%;
    height: 500px;
    float: right;
    /*background-color: rgb(146, 9, 176);*/
    border-right: 1px solid #000000;


  }
  .background-layer {
    width: 100%;
    height: 100px;

  }
  .active {
    background-color: rgb(146, 9, 176)!important;
  }
  .mfd-link {
    width: 96%;
    height: 100px;
    display: block;
    text-align: center;
    line-height: 100px;
    color: white;
    text-decoration: none;
    font-size: 20px;
    font-weight: 900;
    float: right;
    border-left: 1px solid #000000;
    cursor: pointer;

  }
  .mfd a:hover {
      background-color: rgb(146, 9, 176)!important;
      color: #ffffff!important;
  }
  .timeline {
    width: 51%;
    height: 500px;
    margin-left: 32%;

  }
  .index-footer {
    background-color: #2f3539;
    border-top: 1px solid #393f43;
    width: 100%;
    height: 130px;
    line-height: 130px;
    font-size: 16px;
    color: #cecece;
    text-align: center;
    position: absolute;
    bottom: 0px;
  }
</style>
