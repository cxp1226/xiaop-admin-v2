import { SET_THEME } from './mutations-type'
export default {
  setTheme ({ commit }, value) {
    commit(SET_THEME, value)
  }
}
