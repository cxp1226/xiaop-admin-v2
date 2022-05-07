<template>
  <el-container class="home">
    <el-aside width="" class="aside" v-if="showNavMenu">
      <nav-menu></nav-menu>
    </el-aside>
    <el-container>
      <el-header class="header" v-if="showTopBar">
        <home-header></home-header>
      </el-header>
      <el-main class="main">
        <system-setting-button v-if="!showTopBar"/>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-drawer title="项目配置" :visible="openSystemSetting" size="18%" @close="setOpenSystemSetting">
      <system-setting-drawer/>
    </el-drawer>
  </el-container>
</template>

<script>
import HomeHeader from '@/views/home/components/HomeHeader.vue'
import SystemSettingDrawer from '@/views/home/components/SystemSettingDrawer.vue'
import SystemSettingButton from '@/views/home/components/SystemSettingButton.vue'
import NavMenu from '@/views/home/components/NavMenu.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'myHome',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('systemSetting', ['openSystemSetting', 'showNavMenu', 'showTopBar'])
  },
  methods: {
    ...mapActions('systemSetting', ['setOpenSystemSetting'])
  },
  components: {
    'home-header': HomeHeader,
    'system-setting-drawer': SystemSettingDrawer,
    'nav-menu': NavMenu,
    'system-setting-button': SystemSettingButton
  }
}
</script>

<style scope lang="less">
@import "@/assets/css/mixin.less";
@import "@/assets/css/common.less";
.main_bg(){
  [data-theme=light] & {
    background-color: #F0F2F5;
  }
}
.home {
  width: 100%;
  height: 100%;
  .aside{
    .border(Right, 1px);
  }
  .header{
    height: 50px !important;
    padding: 0;
    .border(Bottom, 1px);
  }
  .main {
    position: relative;
    padding: 0;
    .main_bg();
  }
  .el-drawer{
    .bg_h1_color();
    .el-drawer__header{
      margin-bottom: 0;
      padding: 20px;
      .font_h1_color();
      .border(Bottom, 1px);
    }
  }
}
</style>
