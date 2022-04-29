<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('list', JSON.stringify(this.$store.state))
    })
    try {
      localStorage.getItem('list') && this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem('list'))))
      document.documentElement.setAttribute('data-theme', this.$store.state.systemSetting.theme)
    } catch (err) {
      console.log(err)
    }
    localStorage.removeItem('list')
  }
}
</script>

<style lang="less">
@import "@/assets/css/mixin.less";
#app {
  .bg_color();
  .font_color();
}
</style>
