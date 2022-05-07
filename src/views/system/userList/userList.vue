<template>
  <div class="users">
    <div class="header-search">
      <el-form ref="searchFormRef" :model="searchForm" inline>

        <el-form-item label="账号名:" prop="username">
          <el-input v-model="searchForm.username" placeholder="请输入账号" size="small" clearable></el-input>
        </el-form-item>

        <el-form-item label="昵称:" prop="nickname">
          <el-input v-model="searchForm.nickname" placeholder="请输入昵称" size="small" clearable></el-input>
        </el-form-item>

        <el-form-item class="el-form-item__content-center">
          <el-button type="primary" size="small" @click="getTableData(true)">查询</el-button>
          <el-button size="small">重置</el-button>
        </el-form-item>

      </el-form>
    </div>
    <div class="content-table">
      <xiaop-table :tableData="tableData" :total="50"
        @change="getTableData" :pageNum.sync="searchForm.pageNum" :pageSize.sync="searchForm.pageSize">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </xiaop-table>
    </div>
  </div>
</template>

<script>
import XiaopTable from '@/components/XiaopTable.vue'
export default {
  name: 'userList',
  data () {
    return {
      searchForm: {
        username: '',
        nickname: '',
        pageNum: 1,
        pageSize: 20
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods: {
    getTableData (reload) {
      console.log(this.searchForm, '获取数据')
    }
  },
  mounted () {
  },
  components: {
    'xiaop-table': XiaopTable
  }
}
</script>

<style scope lang="less">
@import "@/assets/css/mixin.less";
@import "@/assets/css/common.less";
.users{
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  .header-search{
    padding: 10px;
    .card_bg();
    .el-form-item{
      margin-bottom: 0;
    }
  }
  .content-table{
    flex: 1;
    height: 100px;
    margin-top: 16px;
    padding: 10px;
    .card_bg();
  }
}
</style>
