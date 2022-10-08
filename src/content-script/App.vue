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
      debugger;
      this.$notify.success({
        title: "Info",
        message: "我是贤亮",
        showClose: false,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
