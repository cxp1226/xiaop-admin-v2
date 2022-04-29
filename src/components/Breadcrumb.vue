<template>
  <div class="breadcrumb">
    <template v-for="(item, index) in $route.matched.filter(item => item.meta.title)">
      <template v-if="item.meta.children">
        <el-dropdown :key="item.title" @command="handleCommand">
          <span>
            {{item.meta.title}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item2 in item.meta.children" :key="item2.path" :command="item2.path">{{item2.title}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
      <template v-else>
        <span v-if="index !== 0" :key="index"> / </span>
        {{item.meta.title}}
      </template>
    </template>
  </div>
</template>

<script>

export default {
  methods: {
    handleCommand (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scope lang="less">
@import "@/assets/css/mixin.less";
@import "@/assets/css/common.less";
.breadcrumb{
  font-size: 14px;
  margin-left: 10px;
  .font_color();
  .el-dropdown{
    .font_color();
  }
}
.el-dropdown-menu.el-popper{
  .bg_color();
  .el-dropdown-menu__item{
    .font_h1_color();
    .hover_bg();
  }
}
</style>
