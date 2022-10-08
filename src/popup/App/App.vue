<template>
  <div class="main_app">
    <h1>Hello popup</h1>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    this.$notify.success({
      title: "Info",
      message: "这是一条没有关闭按钮的消息",
      showClose: false,
    });
  },
};
</script>

<style>
.main_app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
