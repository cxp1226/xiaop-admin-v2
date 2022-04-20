import { SET_THEME } from './mutations-type'
export default {
  // 设置主题
  [SET_THEME] (state, value) {
    document.documentElement.setAttribute('data-theme', value)
    state.theme = value
  }
}
