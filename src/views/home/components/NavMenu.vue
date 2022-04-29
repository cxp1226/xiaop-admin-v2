<template>
  <div class="menu">
    <el-menu
      :collapse="isCollapse"
      router
      unique-opened
      collapse-transition
      :default-active="$route.path"
      :background-color="theme === 'dark'? '#1F1F1F' : ''"
      :text-color="theme === 'dark'? '#c9d1d9' : ''"
      :active-text-color="theme === 'dark'? '#ffd04b' : ''"
    >
      <el-menu-item :index="null" v-if="logoDisplay">
          <img src="../../../../public/assets/logo.png" style="width: 35px; height: 35px;">
          <span style="font-weight: bold;font-size: 18px;margin-left: 10px;">XiaopAdmin</span>
      </el-menu-item>
      <template v-for="item in menulist">
        <template v-if="!item.children">
            <el-menu-item :index="item.path" :key="item.id">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
        </template>
        <template v-else>
          <sub-menu :key="item.id" :subMenu="item"></sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SubMenu from '@/views/home/components/SubMenu'
export default {
  data () {
    return {
      menulist: [
        {
          id: 1,
          title: '首页',
          path: '/analysis',
          icon: 'el-icon-s-marketing'
        },
        {
          id: 2,
          title: '系统管理',
          icon: 'el-icon-setting',
          children: [
            {
              id: 3,
              title: '用户列表',
              path: '/system/userList',
              icon: 'el-icon-user-solid'
            },
            {
              id: 4,
              title: '角色列表',
              path: '/system/roleList',
              icon: 'el-icon-user'
            },
            {
              id: 5,
              title: '权限列表',
              path: '/system/rightList',
              icon: 'el-icon-lock'
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters('systemSetting', ['isCollapse', 'theme', 'logoDisplay'])
  },
  components: {
    'sub-menu': SubMenu
  }
}
</script>

<style scope lang="less">
@import "@/assets/css/mixin.less";
@import "@/assets/css/common.less";
.menu {
  height: 100%;
  .el-menu{
    height: 100%;
    border: none;
    &:not(.el-menu--collapse) {
      width: 200px;
    }
  }
}
</style>
