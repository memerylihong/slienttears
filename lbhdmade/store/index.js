import Vue from 'vue'
import Vuex from 'vuex'
// import qs from 'querystring'

Vue.use(Vuex)
const store = () => new Vuex.Store({
  state: {
    fashionList: [
      {
        id: 1,
        content: 'ALL'
      },
      {
        id: 2,
        content: 'FASHION PRESENTATION'
      },
      {
        id: 3,
        content: 'FASHION EXHIBITION'
      },
      {
        id: 4,
        content: 'HALL A'
      },
      {
        id: 5,
        content: 'BRAND EXPERIENCE CENTER'
      }
    ],
    activeLists: [
    ],
    fashionsHead: [],
    headImg: []
  },
  getters: {},
  mutations: {
    updateFahionsHead (state, payload) {
      Vue.set(state, 'fashionsHead', payload)
    },
    updateHeadImg (state, payload) {
      Vue.set(state, 'headImg', payload)
    }
  },
  actions: {
    // 初始化 请求列表
    // async init (context) {
    //   try {
    //     let { code, data } = await this.$axios.$post('/ticket_activity', qs.stringify())
    //     if (String(code) === '0') {
    //       console.log(data)
    //       context.commit('updateHeadImg', data[0].activity)
    //     }
    //   } catch (e) {
    //     console.error(e)
    //   }
    // }
    // async applyInfo (context, payload) {
    // }
  }
})

export default store
