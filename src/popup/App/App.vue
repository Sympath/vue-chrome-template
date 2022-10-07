<template>
  <div class="main_app">
    <h1>Hello popup1</h1>
  </div>
</template>

<script>
// import googleUtils from "../../utils/google-utils";
export default {
  name: "app",
  async mounted() {
    // console.log(chrome.runtime);
    // googleUtils.getMessageObj('popup').postMessage({})
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
