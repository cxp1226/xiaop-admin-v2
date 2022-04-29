<template>
  <div class="system-setting-drawer">
    <div>
      <div class="title">主题</div>
      <el-switch @change="setTheme" :value="theme" active-value="light" inactive-value="dark" active-color="#303133" inactive-color="#CCC"></el-switch>
    </div>
    <div>
      <div class="title">界面功能</div>
      <div class="option">
        <div>折叠菜单</div>
        <el-switch :value="isCollapse" @change="setIsCollapse"></el-switch>
      </div>
    </div>
    <div>
      <div class="title">界面显示</div>
      <div class="option">
        <div>面包屑</div>
        <el-switch :value="breadcrumbDisplay" @change="switchBreadcrumbDisplay"></el-switch>
      </div>
      <div class="option">
        <div>按钮大小</div>
        <el-select :value="buttonSize" @change="setButtonSize" :size="buttonSize">
          <el-option v-for="item in btnSizeOptions" :key="item.label" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="option">
        <div>Logo</div>
        <el-switch :value="logoDisplay" @change="switchLogoDisplay"></el-switch>
      </div>
      <div class="option">
        <div>顶栏</div>
        <el-switch :value="showTopBar" @change="setShowTopBar" :active-value="true" :inactive-value="false"></el-switch>
      </div>
      <div class="option">
        <div>左侧菜单</div>
        <el-switch :value="showNavMenu" @change="setShowNavMenu" :active-value="true" :inactive-value="false"></el-switch>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      btnSizeOptions: [
        { label: '默认尺寸', value: '' },
        { label: '中等尺寸', value: 'medium' },
        { label: '小型尺寸', value: 'small' },
        { label: '超小尺寸', value: 'mini' }
      ]
    }
  },
  computed: {
    ...mapGetters('systemSetting', [
      'theme', 'buttonSize', 'isCollapse', 'logoDisplay', 'breadcrumbDisplay', 'showNavMenu', 'showTopBar'
    ])
  },
  methods: {
    ...mapActions('systemSetting', [
      'setTheme', 'setButtonSize', 'setIsCollapse', 'switchLogoDisplay', 'switchBreadcrumbDisplay', 'setShowNavMenu', 'setShowTopBar'
    ])
  }
}
</script>

<style scope lang="less">
@import "@/assets/css/mixin.less";
@import "@/assets/css/common.less";
.system-setting-drawer{
  width: 100%;
  height: 100%;
  padding: 20px;
  .bg_color();
  .font_h1_color();
  .title{
    padding: 20px 0;
    text-align: center;
    .font_h2_color();
  }
  .option{
    padding: 5px 0;
    .flex_between_center();
  }
  &>div:nth-child(1){
    flex-direction: column;
    .flex_center();
  }
}
</style>
