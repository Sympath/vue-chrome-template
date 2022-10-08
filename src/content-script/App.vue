<template>
  <div>
    <el-button @click="handleClick">点我看弹窗</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$notify({
        title: '演示弹窗',
        message: (
          <el-row>
            <el-col span={8}><el-link href="https://www.npmjs.com/package/vue-chrome-cli" target="_blank">脚手架npm地址</el-link></el-col>
            <el-col span={8}><el-link href="https://github.com/Sympath/vue-chrome-cli">脚手架 仓库</el-link></el-col>
            <el-col span={8}><el-link href="https://github.com/Sympath/vue-chrome-template">模版项目 仓库</el-link></el-col>
          </el-row>
        )
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
