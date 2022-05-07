<template>
  <div class="xiaop-table">
    <el-table :data="tableData" border size="small" height="100%">
      <slot>我是默认数据</slot>
    </el-table>
    <div class="xiaop-table-pagination" v-if="showPagination">
      <pagination
        :background="background"
        :pageNum.sync="currentPage"
        :pageSize.sync="limit"
        :layout="layout"
        :page-sizes="pageSizes"
        :total="total"
        @change="$emit('change')"
      />
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    // 总数
    total: {
      type: Number,
      required: true
    },
    // 页码
    pageNum: {
      type: Number,
      default: 1
    },
    // 条数
    pageSize: {
      type: Number,
      default: 20
    },
    // 每页显示个数选择器的选项设置
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 50]
    },
    // 组件布局，子组件名用逗号分隔
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    // 是否为分页按钮添加背景色
    background: {
      type: Boolean,
      default: true
    },
    // 是否显示分页器
    showPagination: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    currentPage: {
      get () {
        return this.pageNum
      },
      set (val) {
        this.$emit('update:pageNum', val)
      }
    },
    limit: {
      get () {
        return this.pageSize
      },
      set (val) {
        this.$emit('update:pageSize', val)
      }
    }
  },
  methods: {
  },
  components: {
    pagination: Pagination
  }
}
</script>

<style scoped lang="less">
.xiaop-table{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .el-table{
    flex: 1;
  }
  .xiaop-table-pagination{
    margin-top: 10px;
  }
}
</style>
