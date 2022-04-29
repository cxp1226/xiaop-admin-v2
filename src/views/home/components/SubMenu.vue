<template>
  <div>
    <el-submenu :index="subMenu.id + ''">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{subMenu.title}}</span>
      </template>
      <template v-for="item in subMenu.children">
        <template v-if="!item.children">
          <el-menu-item :key="item.id" :index="item.path">
            <i :class="item.icon"></i>
            {{item.title}}
          </el-menu-item>
        </template>
        <template v-else>
          <sub-menu :key="item.id" :subMenu="item"></sub-menu>
        </template>
      </template>
    </el-submenu>
  </div>
</template>

<script>
import SubMenu from '@/views/home/components/SubMenu'

export default {
  name: 'sub-menu',
  props: {
    subMenu: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    'sub-menu': SubMenu
  }
}
</script>

<style scope lang="less">
#app > section > aside > div > .el-menu--collapse > div > li > div > span{
  display: none;
}
#app > section > aside > div > .el-menu--collapse > div > li > div > i.el-submenu__icon-arrow.el-icon-arrow-right{
  display: none;
}
</style>
