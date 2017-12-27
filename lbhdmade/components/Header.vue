<template>
  <div id="mobile-header">
    <div class="mobild-header-img">
      <img :src="headImgActive">
    </div>
    <div class="mobile-header-data">
      <ul>
        <li classify="1" :tagName="newTag" :second="dataSecond" v-for="(dataTime, index) in dataTimes" @click="clickTime(index, dataTime)" :class="{'active':idx === index }">
          <p>{{dataTime}}</p>
        </li>
        <li @click="clickMove">
          <div class="movePicture" :class="{'activeHeight' : isCLicked === true}">
            <img :src="backgroundImg" alt="">
          </div>
          <div class="hiddenList" v-if="showList" :style="innerStyle">
            <ul>
              <li v-for="(fashion, index) in this.$store.state.fashionList" @click="clickFashion(fashion.content)">
                <div>{{fashion.content}}</div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <active-list :tagName="newTag" :second="dataSecond" classify="1"></active-list>
  </div>
</template>
<script>
  import ActiveList from '~/components/ActiveLists'
  import qs from 'querystring'

  export default {
    components: { ActiveList },
    data () {
      return {
        dataTimes: [
          '10.11', '10.12', '10.13', '10.14'
        ],
        idx: 0,
        backgroundImg: '/style/images/whitePic.png',
        isCLicked: false,
        showList: false,
        barWidth: 0,
        barHeight: 0,
        headImgActive: [],
        dataSecond: '10-11',
        newTag: 'FASHION EXHIBITION'
      }
    },
    computed: {
      innerStyle () {
        if (this.showList === true) {
          return {
            width: `${this.barWidth}px`,
            height: `${this.barHeight}px`
          }
        }
      }
    },
    created () {
      this.headImg()
    },
    methods: {
      clickTime (index, context) {
        this.idx = index
        this.dataSecond = context.replace('.', '-')
      },
      clickMove (e) {
        let delet = 20
        if (this.isCLicked === true) {
          this.backgroundImg = 'style/images/whitePic.png'
          this.isCLicked = false
          this.showList = false
        } else {
          this.backgroundImg = 'style/images/redPic.png'
          this.isCLicked = true
          this.showList = true
          let screenWidth = document.documentElement.clientWidth
          let screenHeight = document.documentElement.clientHeight
          console.log(e.target.getBoundingClientRect())
          let selfBounding = e.target.getBoundingClientRect().top
          this.barHeight = screenHeight - selfBounding - delet
          this.barWidth = screenWidth
        }
      },
      clickFashion (content) {
        console.log(content)
        this.newTag = content
      },
      async headImg () {
        try {
          let { code, data } = await this.$axios.$post('/ticket_activity', qs.stringify())
          console.log(data[0])
          if (String(code) === '0') {
            this.headImgActive = data[0].activity
          }
        } catch (e) {
          console.error(e)
        }
      }
    }
  }
</script>
<style lang="less">
  #mobile-header {
    width: 100%;
    height: auto;
    background-image: url(/assets/微信图片_20170819134737.png);
    background-size: 100%;
    .mobild-header-img {
      width: 100%;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 60%;
        height: 90%;
        margin: 5% 10% 5% 20%;
      }
    }
    .mobile-header-data {
      width: 94%;
      height: 1.375rem;
      background-color: #b50005;
      margin: 0 auto;
      ul {
        width: 100%;
        height: 100%;
        float: left;
        position: relative;
        li {
          float: left;
          width: 15%;
          height: 1.1875rem;
          margin: 0.1875rem 2% auto 2%;
          display: flex;
          align-items: center;
          justify-content: center;
          p {
            font-size: 0.8125rem;
            color: #fff;
            font-weight: bold;
          }
        }
        li:nth-child(1) {
          margin-left: 0.5rem;
        }
        li:last-child {
          width: 17%;
          margin: 0.1875rem 2% auto 2%;
          .movePicture {
            width: 100%;
            height: 100%;
            img {
              width: 100%;
            }
          }
          .activeHeight {
            height: 1.25rem;
          }
          .hiddenList {
            position: absolute;
            top: 1.375rem;
            left: -3.1%;
            background: #d7777a;
            ul {
              width: 100%;
              height: 10rem;
              background: #fff;
              li {
                border: 2px solid #b50005;
                width: auto;
                height: auto;
                div {
                  padding: 0.25rem 1.375rem;
                  font-size: 0.8125rem;
                  color: #b50005;
                  font-weight: bold;
                }
              }
              li:nth-of-type(odd) {
                float: left;
                margin-left: 3%;
                margin-top: 0.625rem;
              }
              li:nth-of-type(even) {
                float: right;
                margin-right: 3%;
                margin-top: 0.625rem;
              }
              li:last-child {
                width: 94%;
                margin-left: 3%;
                margin-top: 0.625rem;
              }
            }
          }
        }
        .active {
          background-color: #ffffff;
          p {
            color: red;
            border-bottom: 2px solid red;
          }
        }
      }
    }
  }
</style>