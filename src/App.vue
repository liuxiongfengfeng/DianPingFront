<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import Me from "./pages/Me.vue";

export default {
  name: "App",
  components: {
    Home,
    Login,
    Me,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.app {
  height: 100%;
  width: 100%;
}
body {
  padding: 0px !important;
  margin: 0px !important;
  height: 100vh;
  width: 100vw;
  min-height: 500px;
  min-width: 300px;
  background-color: #e9ecef;
}
.el-message {
  min-width: max-content;
  height: 5%;
  text-align: center;
}
</style>
