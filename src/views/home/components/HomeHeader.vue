<template>
  <div class="header">
    <div class="header-left">
      <div class="collapse" @click="setIsCollapse" v-if="showNavMenu">
        <i :class="['iconfont', isCollapse ? 'icon-zhankai' : 'icon-shousuo']"></i>
      </div>
      <breadcrumb v-if="breadcrumbDisplay"></breadcrumb>
    </div>
    <div class="header-right">
      <fullscreen/>
      <el-dropdown placement="bottom">
        <div class="user">
          <el-avatar size="medium" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <span style="margin-left: 5px;">username</span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="setting" @click="setOpenSystemSetting">
        <i class="el-icon-setting"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import breadcrumb from '@/components/Breadcrumb.vue'
import fullscreen from '@/components/Fullscreen.vue'
export default {
  data () {
    return {
      isFullscreen: false
    }
  },
  computed: {
    ...mapGetters('systemSetting', ['openSystemSetting', 'isCollapse', 'breadcrumbDisplay', 'showNavMenu'])
  },
  props: {
    // 是否显示系统设置
    showSystemSetting: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions('systemSetting', ['setOpenSystemSetting', 'setIsCollapse']),
    setFullscreen () {
      // document.documentElement.requestFullscreen()
      document.querySelector('.el-main.main').requestFullscreen()

      this.isFullscreen = !this.isFullscreen
    }
  },
  components: {
    breadcrumb,
    fullscreen
  }
}
</script>

<style scope lang="less">
@import "@/assets/css/mixin.less";
@import "@/assets/css/common.less";
.header{
  width: 100%;
  height: 100%;
  .flex_between_center();
  .header-left{
    height: 100%;
    .flex_start_center();
    .collapse{
      height: 100%;
      cursor: pointer;
      padding: 0 10px;
      font-size: 20px;
      .hover_bg();
      .flex_center();
      .iconfont{
        font-size: 20px;
      }
    }
  }
  .header-right{
    height: 100%;
    .flex_end_center();
    .setting{
      height: 100%;
      cursor: pointer;
      padding: 0 10px;
      font-size: 20px;
      .flex_center();
      .hover_bg();
    }
    .user{
      height: 100%;
      .font_color();
      .flex_center();
    }
  }
}

</style>
