<template>
  <div class="headList">
    <ul v-if="activeLists">
      <li v-for="(activeList , index) in activeLists" :key="activeList.id">
        <nuxt-link to="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx07107c87cb3c60ab&redirect_uri=details/1&response_type=code&scope=snsapi_base&state=1">
          <div class="activeImg">
            <img :src="`${activeList.ticket_info.stylist_link}`" alt="">
          </div>
          <div class="activeIntro">
            <p>{{activeList.ticket_info.brand}}</p>
            <span>{{activeList.ticket_info.tag_name}}</span>
            <span>{{activeList.ticket_info.start_activity_time | format1}}</span>
            <span>{{activeList.ticket_info.start_activity_time | format}}-{{activeList.ticket_info.end_activity_time | format}}</span>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import qs from 'querystring'
  import { formatDate } from '~/assets/js/util.js'

  export default ({
    props: {
      second: String,
      tagName: String,
      classify: String
    },
    data () {
      return {
        activeLists: null
      }
    },
    methods: {
      async applyInfo (second, tagName, classify) {
        try {
          const { code, data } = await this.$axios.$post('/ticket_alltagticket', qs.stringify({
            time: second, tag_name: tagName, classify: classify
          }))
          console.log(data)
          if (String(code) === '0') {
            this.activeLists = data
          }
        } catch (e) {
          console.error(e)
        }
      }
    },
    filters: {
      format (val) {
        return formatDate(new Date(val), 'hh:mm')
      },
      format1 (val) {
        return formatDate(new Date(val), 'MM.dd')
      }
    },
    // 监听数据是否变化的
    watch: {
      tagName (newValue) {
        if (newValue) {
          this.applyInfo()
        }
      },
      second (secondValue) {
        if (secondValue) {
          this.applyInfo()
        }
      }
    },
    created () {
      this.applyInfo()
    }
  })
</script>
<style lang="less">
  .headList {
    width: 93%;
    margin: 0 auto;
    overflow: hidden;
    ul {
      li {
        margin-top: 0.625rem;
        background-color: #faf0f0;
        a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          div {
            float: 1;
            margin: 0.625rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              width: 7rem;
              height: 7rem;
              border-radius: 50%;
            }
            p {
              font-size: 1.25rem /* 20/16 */;
              color: #000;
              line-height: 30px;
              font-weight: bold;
            }
            span {
              font-size: 0.8rem;
              line-height: 16px;
              color: #000;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          div+ div{
            flex:2;
            margin: 0rem;
          }
        }
      }
    }
  }
</style>
