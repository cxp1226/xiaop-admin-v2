<template>
  <div class="fullscreen" @click="click" >
    <i :class="['iconfont', isFullscreen ? 'icon-tuichuquanping' : 'icon-quanping']"></i>
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'Screenfull',
  data () {
    return {
      isFullscreen: false
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    click () {
      if (!screenfull.isEnabled) {
        this.$message({ message: '你的浏览器不支持全屏', type: 'warning' })
        return false
      }
      screenfull.toggle()
    },
    change () {
      this.isFullscreen = screenfull.isFullscreen
    },
    init () {
      if (screenfull.isEnabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy () {
      if (screenfull.isEnabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "@/assets/css/mixin.less";
@import "@/assets/css/common.less";
.fullscreen{
  height: 100%;
  cursor: pointer;
  padding: 0 10px;
  .flex_center();
  .hover_bg();
  .iconfont{
    font-size: 20px;
  }
}
</style>
