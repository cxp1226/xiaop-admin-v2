<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import "@/assets/css/mixin.less";
#app {
  .bg_color();
  .font_color();
}
</style>
