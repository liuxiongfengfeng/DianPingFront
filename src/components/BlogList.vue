<template>
  <div class="box">
    <div class="blog-item" v-for="i in 10">
      <div class="img-box">
        <img src="../assets/blog1.jpg" class="view" alt="" />
      </div>
      <div class="content-box">内容</div>
      <div class="floor-box">
        <div class="user-box">
          <img src="../assets/blog1.jpg" alt="" />
          <span>username</span>
        </div>
        <div class="dianzan">
          <span class="iconfont icon-dianzan"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.box {
  column-count: 2;
  padding: 10px 3px 0px 3px;
  column-gap: 5px;
}
.blog-item {
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 5px;
  overflow: auto;
}
.view {
  border-radius: 5px 5px 0 0;
  width: 100%;
}
.floor-box {
  display: flex;
  justify-content: space-between;
  padding: 5px 8px;
}
.user-box > img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
}
.dianzan {
  right: 10px;
  top: 0px;
  bottom: 0px;
}
</style>
