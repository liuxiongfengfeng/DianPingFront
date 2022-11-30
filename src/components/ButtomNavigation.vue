<template>
  <div class="box">
    <div class="inner-box">
      <div
        class="nav-box"
        @click="goto('/')"
        :class="activePath === '/' ? 'active' : ''"
      >
        <span class="iconfont icon-zhuye icon"></span>
        <span class="title">主页</span>
      </div>
      <div class="nav-box">
        <span class="el-icon-location-information icon"></span>
        <span class="title">地图</span>
      </div>

      <div class="nav-box publist-box">
        <span class="el-icon-circle-plus icon"></span>
      </div>
      <div class="nav-box">
        <span class="el-icon-chat-line-round icon"></span>
        <span class="title">消息</span>
      </div>

      <div
        class="nav-box"
        @click="goto('/me')"
        :class="activePath === '/me' ? 'active' : ''"
      >
        <span class="el-icon-user icon"></span>
        <span class="title">我的</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtomNav",
  data() {
    return {
      activePath: "",
    };
  },
  mounted() {
    this.activePath = this.$route.fullPath;
  },
  methods: {
    goto(path) {
      if (path === this.$route.fullPath) {
        return;
      }
      this.$router.push(path);
      this.activePath = this.$route.fullPath;
    },
  },
};
</script>

<style scoped>
.box {
  height: 50px;
}
.inner-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  bottom: 0;
}
.publist-box > .icon {
  font-size: 35px;
}
.inner-box > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.icon {
  font-size: 16px;
}
.title {
  font-size: 10px;
}
.nav-box {
  color: #adb5bd;
}
.active {
  color: #000000;
  font-weight: 700;
}

.active-title {
  font-size: 10px;
}
</style>
