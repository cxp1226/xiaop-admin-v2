import Vue from 'vue'
import Vuex from 'vuex'

import systemSetting from './modules/systemSetting'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    systemSetting
  }
})
export default store
