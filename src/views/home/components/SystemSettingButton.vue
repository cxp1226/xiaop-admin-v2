<template>
  <div class="system-setting-button el-icon-setting" @click="setOpenSystemSetting"></div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    ...mapActions('systemSetting', ['setOpenSystemSetting'])
  }
}
</script>

<style scope lang="less">
.system-setting-button{
  position: absolute;
  right: 0;
  top: 50%;
  font-size: 20px;
  padding: 12px;
  color: #fff;
  text-align: center;
  background-color: #409EFF;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
}
</style>
