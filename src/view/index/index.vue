<template lang="html">
  <div class="twtter-content">
    <div class="blank2">
    </div>

    <div class="zero-wrap">
      <div class="blank01">

      </div>
      <div class="zero">
        <div class="zero-left">
          <img src="../../assets/img/banner.png" alt="">
        </div>
        <div class="zero-right">
          <h4>VISUAL DISPLAY</h4>
          <h2>MORAL RHETORIC IN TWEETS</h2>
          <p>A computational text analysis technique for measuring the moral loading of concepts.</p>
          <a href="#" class="btn btn-primary">KNOW MORE</a>
        </div>
      </div>
    </div>

    <div class="twitter-number-wrap">
      <div class="blank04">

      </div>
      <div class="numbers-container">
        <div class="numbers-container-left">
          <div class="numbers-container-up">
            <i-count-up :start="0" :end="120500" :decimals="0" :duration="2.5" :options="options" :callback="callback"></i-count-up>
          </div>
          <div class="numbers-container-down">
            TRENDS
          </div>
        </div>
        <div class="numbers-container-right">
          <div class="numbers-container-up">
            <i-count-up :start="0" :end="190092990" :decimals="0" :duration="2.5" :options="options" :callback="callback"></i-count-up>
          </div>
          <div class="numbers-container-down">
            TWEETS
          </div>
        </div>
      </div>
    </div>


    <!-- end -->

    <div class="one-wrap">
      <div style="width:100%;height:30px;"></div>
      <sub-title v-bind:imgName='imgName'></sub-title>
      <h2 class="model-title-h2">Trends Analysis</h2>
      <div class="model-brief">
        We put into this template a lot of work to achieve the desired effect.<br>
Thanks to the work of our product is easy and pleasant.
      </div>

      <div class="first">
        <div class="first-left">
          <div class="fl-header">

          </div>

          <div class="fl-content">
            <ul>
              <li v-for="li1_data in new Array(30)">

              </li>
            </ul>
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
        <div class="first-middle" id="timeline">

        </div>
      </div>

    </div>


    <!--  end-->
    <div class="two-wrap">
      <div style="width:100%;height:30px;"></div>
      <sub-title v-bind:imgName='imgName'></sub-title>
      <h2 class="model-title-h2">Trends Analysis</h2>
      <div class="model-brief">
        We put into this template a lot of work to achieve the desired effect.<br>
Thanks to the work of our product is easy and pleasant.
      </div>


      <div class="second ">
        <div class="second-left" id="dateSelection">

        </div>

        <div class="second-right tweets-container" >
          <div class="tweets-container-title">
            <span class="model-title"><img style="width: 20px; height: 20px; margin-right: 7px; margin-left:15px; " src="../../assets/img/twitter.png">Related Tweets</span>
          </div>

            <ul>

              <li class="tweets-container-content-li" v-for="li2_data in new Array(30)">
                <div class="tweets-user-content">
                  <div class="tweets-user-content-up">
                    <span class="user-name"><a href="#">Bill Bateman</a></span>
                    <span class="account-name"><a href="#">@BillBateman</a></span>
                    <span class="tweets-time">4:49 PM - 10 Dec 2017</span>
                  </div>
                  <div class="tweets-user-content-down">
                    Serious about using Twitter for marketing your business? You have to see what Cindy Donovan has developed
                    <a href="#" skip_urls="">#twittermarketing</a>
                    <a href="#" target="_blank">jvz5.com/c/10008/263555</a>
                  </div>
                </div>
              </li>

            </ul>
        </div>
        <div class="second-middle" id="secondmiddle">

        </div>
      </div>


    </div>

    <!-- end -->


    <div class="three-wrap">

      <div style="width:100%;height:30px;"></div>
      <sub-title v-bind:imgName='imgName'></sub-title>
      <h2 class="model-title-h2">Trends Analysis</h2>
      <div class="model-brief">
        We put into this template a lot of work to achieve the desired effect.<br>
Thanks to the work of our product is easy and pleasant.
      </div>

      <div class="third">
        <div class="third-left">
          <img src="../../assets/img/test3.png"  alt="">
        </div>
        <div class="third-right tweets-container">
          <div class="tweets-container-title">
            <span class="model-title"><img style="width: 17px; height: 17px; margin-right: 7px; margin-left:15px;" src="../../assets/img/twitter.png">Related Tweets</span>
          </div>

            <ul>

              <li class="tweets-container-content-li" v-for="li3_data in new Array(30)">
                <div class="tweets-user-content">
                  <div class="tweets-user-content-up">
                    <span class="user-name"><a href="#">Bill Bateman</a></span>
                    <span class="account-name"><a href="#">@BillBateman</a></span>
                    <span class="tweets-time">4:49 PM - 10 Dec 2017</span>
                  </div>
                  <div class="tweets-user-content-down">
                    Serious about using Twitter for marketing your business? You have to see what Cindy Donovan has developed
                    <a href="#" skip_urls="">#twittermarketing</a>
                    <a href="#" target="_blank">jvz5.com/c/10008/263555</a>
                  </div>
                </div>
              </li>
            </ul>
        </div>
        <div class="third-middile" id="comparisionbar">

        </div>
      </div>



    </div>


    <!-- <div class="tips">
      <h1>
        <img src="../../assets/img/trendill.png" width="22" height="22" style="margin-right: 7px;">
        Monitor users, lists &amp; keywords
        <small>Keep an eye on tweets from your favorite users and lists, or from anyone using a keyword search</small>
      </h1>
    </div>

    <div class="first">
      <div class="first-left">
        <div class="fl-header">
          <span class="header-img"><img src="../../assets/img/top.png" width="20px"></span>
          <span class="header-name">Top Trends</span>
          <a class="add-button"><img src="../../assets/img/add.png" width="17px"></a>
        </div>

        <div class="fl-content">
          <ul>
            <li v-for="li1_data in new Array(30)">
              <span><img src="../../assets/img/delete_icon.png" width="14px"></span>
              <div class="li-title">
                <a class="li-title-a" href="#">Julian Assange</a>
                <a class="a-number">225,990,300</a></div>
            </li>
          </ul>
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
      <div class="first-middle" id="timeline">

      </div>
    </div>


    <div class="tips">
      <h1>
        <img src="../../assets/img/trendill.png" width="22" height="22" style="margin-right: 7px;">
        Monitor users, lists &amp; keywords
        <small>Keep an eye on tweets from your favorite users and lists, or from anyone using a keyword search</small>
      </h1>
    </div>

    <div class="second ">
      <div class="second-left" id="dateSelection">

      </div>

      <div class="second-right tweets-container" >
        <div class="tweets-container-title">
          <span class="model-title"><img style="width: 20px; height: 20px; margin-right: 7px; margin-left:15px; " src="../../assets/img/twitter.png">Related Tweets</span>
        </div>

          <ul>

            <li class="tweets-container-content-li" v-for="li2_data in new Array(30)">
              <div class="tweets-user-content">
                <div class="tweets-user-content-up">
                  <span class="user-name"><a href="#">Bill Bateman</a></span>
                  <span class="account-name"><a href="#">@BillBateman</a></span>
                  <span class="tweets-time">4:49 PM - 10 Dec 2017</span>
                </div>
                <div class="tweets-user-content-down">
                  Serious about using Twitter for marketing your business? You have to see what Cindy Donovan has developed
                  <a href="#" skip_urls="">#twittermarketing</a>
                  <a href="#" target="_blank">jvz5.com/c/10008/263555</a>
                </div>
              </div>
            </li>

          </ul>
      </div>
      <div class="second-middle" id="secondmiddle">

      </div>
    </div>

    <div class="tips">
      <h1>
        <img src="../../assets/img/trendill.png" width="22" height="22" style="margin-right: 7px;">
        Monitor users, lists &amp; keywords
        <small>Keep an eye on tweets from your favorite users and lists, or from anyone using a keyword search</small>
      </h1>
    </div>

    <div class="third">
      <div class="third-left">
        <img src="../../assets/img/test3.png"  alt="">
      </div>
      <div class="third-right tweets-container">
        <div class="tweets-container-title">
          <span class="model-title"><img style="width: 17px; height: 17px; margin-right: 7px; margin-left:15px;" src="../../assets/img/twitter.png">Related Tweets</span>
        </div>

          <ul>

            <li class="tweets-container-content-li" v-for="li3_data in new Array(30)">
              <div class="tweets-user-content">
                <div class="tweets-user-content-up">
                  <span class="user-name"><a href="#">Bill Bateman</a></span>
                  <span class="account-name"><a href="#">@BillBateman</a></span>
                  <span class="tweets-time">4:49 PM - 10 Dec 2017</span>
                </div>
                <div class="tweets-user-content-down">
                  Serious about using Twitter for marketing your business? You have to see what Cindy Donovan has developed
                  <a href="#" skip_urls="">#twittermarketing</a>
                  <a href="#" target="_blank">jvz5.com/c/10008/263555</a>
                </div>
              </div>
            </li>
          </ul>
      </div>
      <div class="third-middile" id="comparisionbar">

      </div>
    </div>



     -->
     <div class="index-footer">
       Copy © 2017  Computational Social Science Lab (CSSL)
     </div>

  </div>
</template>

<script>
import ICountUp from 'vue-countup-v2'
import subTitle from '../../components/subtitle/index'
import Jquery from 'jquery'
var jQuery = window.$ = window.jquery = window.jQuery = Jquery
var Highcharts = require('highcharts/highstock')
import Pickmeup from 'pickmeup'
require('pickmeup/css/pickmeup.css')
import * as d3 from 'd3'
import d3WordCloud from 'd3.layout.cloud'
import donut from '../../jsscript/donut'
import compareStock from '../../jsscript/compareStock'
import rgbatorgb from '../../jsscript/rgbatorgb'
import dateSelection from '../../jsscript/dateSelection'
import comparisionbar from '../../jsscript/comparisionbar'

//
export default {
  name: 'Index',
  components: {
      ICountUp,
      subTitle
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
        active_flag: 1,
        imgName: "trend.png"
      }
    },
    methods: {
      changeBg: function (num) {
        this.active_flag = num
      },
      callback: function(ins) {
        ins.update(ins.endVal + 5)
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
     //calendar
     dateSelection('.second-left', Jquery, Pickmeup)
     //donut
     var data = [10, 8, 3, 4, 9]
     var name = ['Care', 'Fairness', 'Loyalty', 'Authority', 'Sanctity']
     donut('#secondmiddle', d3, data, name, 420, 420, d3WordCloud)

     //comparisionbar
     comparisionbar('#comparisionbar', d3)
  }
}
</script>

<style lang="css" scoped>
  .twtter-content {
    /* width: 83.5%; */
    width: 100%;
    height: auto;
    margin: auto;
    background-color: #eef0f1;
    background-color: #ffffff;
  }
  .blank2 {
    width: 100%;
    height: 15px;
    margin-top: 50px;

  }
  .zero-wrap{
    width: 100%;
    height: 580px;
    background-color: rgb(243,247,249);
    background-size: cover;
    background-repeat: repeat;
    background-color: rgba(0, 0, 0, 0);
    background-image: url(../../assets/img/stars.jpg);
    background-position: 50% -13px;
  }
  .zero {
    width: 72%;
    height: 310px;
    margin: auto;
    /* background-color: rgb(69,187,238); */
    /* background-image: url('../../assets/img/test2.png'); */
  }
  .zero-left {
    width: 45%;
    height: 100%;
    float: left;
    /* background-color: red; */
  }
  .zero-right {
    width: 45%;
    height: 100%;
    float: right;

  }
  .zero-right h4{
    color: #080808;
    font-weight: bold;
    line-height: 1;
    letter-spacing: 0.1px;
    margin-bottom: 10px;
    margin-top: 0;
    text-transform: uppercase;
    /* font-family: Roboto; */
  }
  .zero-right h2{
    font-weight: 130;
    font-size: 55px;
    line-height: 60px;
    color: #080808;
    margin: 0 0 15px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .zero-right p{
    font-weight: 300;
    color: #9d9ea7;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 0;
    max-width: 400px;
    letter-spacing: 1px;
  }
  .zero-right .btn{
    color: #fff;
    letter-spacing: 1px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    display: inline-block;
    padding: 0 27px;
    line-height: 40px;
    border: none;
    border-radius: 0;
    box-shadow: none;
    text-decoration: none;
    background-color: #62a0f8;
    margin-top: 50px;
  }

  .twitter-number-wrap {
    width: 100%;
    height: 300px;
    /* background-color: #6ea0f2; */
    background-size: cover;
    background-repeat: repeat;
    background-color: rgba(0, 0, 0, 0);
    background-image: url(../../assets/img/paral.jpg);
    background-attachment: fixed;
    /* min-width: 1905px; */
    left: 0px;
    /* width: 1905px; */
    opacity: 1;
    background-position: 50% -13px;
  }

  .blank04 {
    width: 100%;
    height: 80px;
  }
  .numbers-container {
    width: 70%;
    height: 140px;
    margin: auto;
    /* background-color: rgba(2,3,4,0.1) */
  }
  .numbers-container-left {
    width: 45%;
    height: 140px;
    float: left;
  }
  .numbers-container-right {
    width: 45%;
    height: 140px;
    float: right;
  }
  .numbers-container-up {
    width: 100%;
    height: 80px;
    text-align: center;
    color: #ffffff;
    font-size: 60px;
    letter-spacing: 2px;
    font-weight: bold;
  }
  .numbers-container-up ::after {
    content: '';
    display: block;
    height: 4px;
    background: #ffd600;
    max-width: 130px;
    margin: 5px auto 20px;
    border-radius: 30px;
  }
  .numbers-container-down {
    width: 100%;
    height: 45px;
    line-height: 10px;
    font-size: 30px;
    text-align: center;
    letter-spacing: 1px;
    font-weight: 700px;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    color: rgba(255,255,255, 0.8);
    margin-top: 40px;
  }


  .one-wrap {
    width: 100%;
    height: 800px;
    background: #f9f9f9;
  }

  .model-title-h2 {
    text-align: center;
    /* margin-top: 0px !important; */
    /* margin-bottom: 16px !important; */
    padding-top: 0px !important;
    /* font-family: "Source Sans Pro"; */
    line-height: 40px;
    font-weight: 400;
    font-style: normal;
    font-size: 35px;
    color: #2b2b2b;
    text-transform: uppercase;
    margin-top: 5px;
  }
  .model-brief {
    line-height: 23px;
    font-weight: 400;
    font-style: normal;
    font-size: 17px;
    text-align: center;
    color: #666666;
    margin-top: 10px;

  }



  .blank01 {
    width: 100%;
    height: 145px;
  }

  .tips {
    width: 100%;
    height: 38px;
    border-bottom: 1px solid #eeeeee;
    margin-top: 40px;
  }
  .tips h1{
    font-size: 20px;
    line-height: 1;
    color: #1E7EBE;
    font-weight: bold;
  }
  .tips h1 small{
    font-size: 13px;
    font-weight: normal;
    color: #999999;
  }
  .first {
    width: 90%;
    height: 460px;
    margin: auto;
    margin-top: 40px;

  }
  .first-left {
    width: 24%;
    height: 100%;
    /* background-color: rgba(255, 0, 0, 0.5); */
    float: left;
    /* border: 1px solid #0b75ff; */
  }
  .fl-header {
    width: 100%;
    height: 40px;
    border-radius: 4px 4px 0 0 ;
    /* background: -webkit-linear-gradient(top,#4ca9e2 1%,#1d7cb7 100%); */
    background-color: rgb(96,	162,	248	);
    line-height: 40px;
    border: 1px solid rgb(96,	162,	248	);

  }
  .header-img {
    margin-left: 15px;

  }
  .header-img img{
    /* margin-top: 10px; */
    vertical-align: middle;
  }
  .header-name {
    font-size: 14px;
    color: #ffffff;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  .add-button {
    width: 25px;
    height: 25px;
    display: inline-block;
    border-radius: 3px;
    background: linear-gradient(#4ca9e2,#1d7cb7b);
    border: 1px solid #0078F8;
    margin-right: 14px;
    float: right;
    box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 2px rgba(0, 0, 0, 0.15);
    line-height: 2;
    vertical-align: sub;
    text-align: center;
    margin-top: 6px;
    cursor: pointer;
  }
  .fl-content {
    width: 100%;
    height: 420px;
    border: 1px solid rgba(27,31,35,0.15);
    border-top: 0px;
    border: 1px solid rgba(0,0,0,0.2);
    box-shadow: inset 0px 0px 10px -2px rgba(0,0,0,0.2);
    overflow-y: auto;
  }
  .fl-content ul {
    list-style: none;
    margin: 0px;
    padding: 0px;

  }
  .fl-content ul li{
    display: block;
    clear: both;
    width: 100%;
    /* background-color: red; */
  }
  .fl-content ul li span {
    width: 39px;
    height: 39px;
    font-weight: 800px;
    font-size: 20px;
    color: #888;
    float: left;
    font-family: 'Arimo', Verdana, Helvetica, sans-serif;
    text-align: center;
    line-height: 39px;
    background-color: white;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    cursor: pointer;
  }
  .fl-content ul li span a{
    color: #495860;
    text-decoration: none;

  }
  .li-title {
    height: 39px;
    line-height: 39px;
    margin: 0px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    background-color: rgb(251,251,251);

  }
  .li-title-a {
    display: block;
    float: left;
    width: 50%;
    color: #337ab7;
    font-size: 14px;
    box-shadow: inset 0 0 1px 1px #fff;
    font-weight: 400;
    word-spacing: 3px;
    letter-spacing: .6px;
    text-decoration: none;
    margin-left: 10px;
  }
  .a-number {
    text-shadow: 0;
    color: #fff;
    background-color: rgba(47,54,61,0.5);
    /* display: inline-block; */
    padding: 2px 5px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    border-radius: 20px;
    margin-top: 11px;
    margin-right: 4px;
    display: block;
    float: right;
    font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .mfd { /*24, */
      width: 6%;
      height: 100%;
      float: right;
      border-right: 1px solid #000000;
    }
    .background-layer {
    width: 100%;
    height: 20%;

  }
  .active {
    background-color: rgb(146, 9, 176)!important;
  }
  .mfd-link {
    width: 96%;
    height: 100%;
    display: block;
    text-align: center;
    line-height: 92px;
    color: white;
    text-decoration: none;
    font-size: 12px;
    font-weight: 900;
    float: right;
    border-left: 1px solid #000000;
    cursor: pointer;

  }
  .mfd a:hover {
      background-color: rgb(146, 9, 176)!important;
      color: #ffffff!important;
  }
    .first-middle {
      width: 63%;
      height: 100%;
      margin-left: 28%;
      padding: 8px;
      /* border: 1px rgba(110,160,242, 0.5) solid; */
      /* box-shadow: 0 1px 4px 0 rgba(0,0,0,.1); */
      box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);
      border-radius: 10px;
      background-color: white;
    }

    .two-wrap {
      width: 100%;
      height: 800px;
      /* background: #f9f9f9; */
    }

    .model-title-h2 {
      text-align: center;
      /* margin-top: 0px !important; */
      /* margin-bottom: 16px !important; */
      padding-top: 0px !important;
      /* font-family: "Source Sans Pro"; */
      line-height: 40px;
      font-weight: 400;
      font-style: normal;
      font-size: 35px;
      color: #2b2b2b;
      text-transform: uppercase;
      margin-top: 5px;
    }
    .model-brief {
      line-height: 23px;
      font-weight: 400;
      font-style: normal;
      font-size: 17px;
      text-align: center;
      color: #666666;
      margin-top: 10px;

    }

    .second {
      width: 90%;
      height: 500px;
      margin: auto;
      margin-top: 40px;
    }
    .second-left {
      width: 21%;
      height: 100%;
      float: left;
      /* background-color: rgba(3, 3, 3, 0.1) */
    }

    .second-middle {
      width: 43%;
      height: 100%;
      margin-left: 23%;

      /* background-color: rgba(22, 113, 40, 0.1) */
    }
    .second-right {
      width: 30%;
      height: 90%;
      float: right;
      border: 1px solid #d1d5da;
      border-top: 0px;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
    }

  .tweets-container-title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color:  rgb(96,	162,	248	);
    border: 1px solid rgba(27,31,35,0.15);
    border-left: 0px;
    border-right: 0px;
    border-bottom: 0;
    border-radius: 3px 3px 0 0;

  }
  .model-title {
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  }
  .tweets-container ul {
    width: 100%;
    margin: 0px;
    padding: 0px;
    list-style: none;
    height: 395px;
    overflow-y: auto;

  }
  .tweets-container ul li{
    width: 100%;
    display: list-item;
    text-align: -webkit-match-parent;
    border-bottom: 1px solid #d1d5da;
    padding-top: 10px;
    padding-bottom: 10px;
    overflow: auto;
    min-height: 50px;
  }
  .tweets-user-content {
    width: 97%;
    float: left;
    /* background-color: red; */
    margin-left: 2%;
  }
  .user-name a{
    color: #333333;
    text-decoration: none;
    font-weight: bold;
    font-size: 12px;
  }
  .account-name a {
    color: #999;
    text-decoration: none;
    font-size: 12px;
  }
  .tweets-time {
    color: #999;
    font-size: 12px;
  }
  .tweets-user-content-down {
    color: rgb(51, 51, 51);
    font-size: 11px;
    line-height: 14px;
  }
  .tweets-user-content-down a {
    color: #0088cc;
    text-decoration: none;
  }
  .three-wrap {
    width: 100%;
    height: 800px;
    background: #f9f9f9;
  }
  .third {
    width: 90%;
    height: 400px;
    margin: auto;
    margin-top: 25px;
  }
  .third-left {
    width: 26%;
    height: 100%;
    /* background-color: rgba(255, 0, 0, 0.5); */
    float: left;
  }
  .third-left img {
    width: 100%;
  }
  .third-right {
    width: 30%;
    height: 100%;
    float: right;
    border: 1px solid #d1d5da;
    border-top: 0px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .third-right ul {
    height: 360px;
  }
  .third-middile {
    width: 38%;
    height: 100%;
    margin-left: 28%;
    /* background-color: rgba(2,100,22, 0.05); */
  }

  .index-footer {
    background-color: #2f3539;
    border-top: 1px solid #393f43;
    width: 100%;
    height: 70px;
    line-height: 70px;
    font-size: 16px;
    color: #cecece;
    text-align: center;
    margin-top: 80px;
  }


</style>
