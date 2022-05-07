<template>
  <el-pagination
    :background="background"
    :current-page.sync="currentPage"
    :page-size.sync="limit"
    :layout="layout"
    :page-sizes="pageSizes"
    :total="total"
    @size-change="$emit('change')"
    @current-change="$emit('change')"
  />
</template>

<script>
export default {
  props: {
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
  }
}
</script>

<style scoped lang="less">
</style>
