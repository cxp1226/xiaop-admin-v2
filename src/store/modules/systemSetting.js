const state = {
  // 系统主题（光明light/黑暗dark）
  theme: 'light',
  // 是否显示系统设置
  openSystemSetting: false,
  // 按钮大小
  buttonSize: 'small',
  // 是否折叠面板
  isCollapse: false,
  // 是否显示菜单logo
  logoDisplay: true,
  // 是否显示面包屑
  breadcrumbDisplay: true,
  // 是否显示左侧菜单
  showNavMenu: true,
  // 是否显示顶栏
  showTopBar: true
}
const getters = {
  theme: (state) => state.theme,
  openSystemSetting: (state) => state.openSystemSetting,
  buttonSize: (state) => state.buttonSize,
  isCollapse: (state) => state.isCollapse,
  logoDisplay: (state) => state.logoDisplay,
  breadcrumbDisplay: (state) => state.breadcrumbDisplay,
  showNavMenu: (state) => state.showNavMenu,
  showTopBar: (state) => state.showTopBar
}

const mutations = {
  // 设置系统主题
  SET_THEME: (state, value) => {
    document.documentElement.setAttribute('data-theme', value)
    state.theme = value
  },
  // 设置是否显示系统设置
  SET_OPEN_SYSTEM_SETTING: (state) => {
    state.openSystemSetting = !state.openSystemSetting
  },
  // 设置按钮大小
  SET_BUTTON_SIZE: (state, value) => {
    state.buttonSize = value
  },
  // 设置是否折叠菜单
  SET_IS_COLLAPSE: (state) => {
    state.isCollapse = !state.isCollapse
  },
  // 是否显示logo
  SWITCH_LOGO_DISPLAY: (state) => {
    state.logoDisplay = !state.logoDisplay
  },
  // 是否显示面包屑
  SWITCH_BREADCRUMB_DISPLAY: (state) => {
    state.breadcrumbDisplay = !state.breadcrumbDisplay
  },
  // 是否显示左侧菜单
  SET_SHOW_NAV_MENU: (state, value) => {
    state.showNavMenu = value
  },
  // 是否显示顶栏
  SET_SHOW_TOP_BAR: (state, value) => {
    state.showTopBar = value
  }
}

const actions = {
  setTheme: ({ commit }, value) => {
    commit('SET_THEME', value)
  },
  setOpenSystemSetting: ({ commit }) => {
    commit('SET_OPEN_SYSTEM_SETTING')
  },
  setButtonSize: ({ commit }, value) => {
    commit('SET_BUTTON_SIZE', value)
  },
  setIsCollapse: ({ commit }) => {
    commit('SET_IS_COLLAPSE')
  },
  switchLogoDisplay: ({ commit }) => {
    commit('SWITCH_LOGO_DISPLAY')
  },
  switchBreadcrumbDisplay: ({ commit }) => {
    commit('SWITCH_BREADCRUMB_DISPLAY')
  },
  setShowNavMenu: ({ commit }, value) => {
    commit('SET_SHOW_NAV_MENU', value)
  },
  setShowTopBar: ({ commit }, value) => {
    commit('SET_SHOW_TOP_BAR', value)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
