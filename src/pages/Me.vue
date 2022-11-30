<template>
  <div class="box">
    <div class="header-box">
      <div class="header" :style="{ opacity: opacity }"></div>
      <span class="setting iconfont icon-setting"> </span>
    </div>
    <div class="nav-user-box">
      <div class="userinfo-box" ref="userinfo">
        <img
          :src="
            userDTO.icon
              ? userDTO.icon
              : 'https://qcloud.dpfile.com/pc/EJfL47OWRY4WSI1LxRsqZF2Sgj-LIYFm3s_BbGov49LChLLd2xH9HfqaUw41LpAh5IF8sFWgcpuunIkrBDXGQ8m_qA1Pf8rFcayTY-n-rG8.jpg'
          "
          class="photo"
          alt=""
        />
        <div class="account-info">
          <span class="username">{{ userDTO.nickName }}</span>
          <span class="account">账号: 1231241414</span>
        </div>
        <span class="signature">点击这里，填写简介</span>
        <div class="relation-box">
          <div class="attention">
            <span>{{ userinfo.follow }}</span>
            <span>关注</span>
          </div>
          <div class="fans">
            <span>{{ userinfo.fans }}</span>
            <span>粉丝</span>
          </div>
          <div class="reap">
            <span>1</span>
            <span>获赞</span>
          </div>
        </div>
        <div class="edit-info">
          <span>编辑资料</span>
        </div>
      </div>
      <div class="blog-nav-box">
        <div>
          <span> 创作 </span>
          <div class="nav-bar"></div>
        </div>
        <div>
          <span>喜欢</span>
          <div class="nav-bar"></div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <BlogList />
    </div>
  </div>
</template>

<script>
import BlogList from "../components/BlogList";
export default {
  name: "Me",
  data() {
    return {
      opacity: 0,
      offsetTop1: 0,
      num: 0,
      userDTO: {},
      userinfo: {},
    };
  },
  components: {
    BlogList,
  },
  methods: {
    isBlur() {
      let offsetTop2 = this.$refs.userinfo.getBoundingClientRect().top;
      this.num = (this.offsetTop1 - offsetTop2) / 100;
      this.offsetTop1 = offsetTop2;
      this.opacity += this.num;
    },
  },
  mounted() {
    if (localStorage.getItem("user")) {
      console.log(1231312);
      this.userDTO = JSON.parse(localStorage.getItem("user"));

      this.$axios({
        method: "get",
        url: `/api/user/info/${this.userDTO.id}`,
      })
        .then((res) => {
          this.userinfo = res.data.data;
          console.log(this.userinfo);
        })
        .catch((error) => {
          this.$message({
            message: "用户未登录",
            type: "warning",
          });
        });
      window.addEventListener("scroll", this.isBlur);
    }
    console.log("fgsfgsfgsf");
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.isBlur);
  },
  destroyed() {
    window.removeEventListener("scroll", this.isBlur);
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  position: fixed;
  backdrop-filter: blur(16px);
}

.header-box {
  display: flex;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 50px;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
}

.userinfo-box {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(8, 1fr);
  padding: 0 20px;
  gap: 5px;
  color: #fff;
  font-size: 12px;
}
.nav-user-box {
  background-image: url("https://qcloud.dpfile.com/pc/ITNoBGEiG4Ak0DAeEymJMRhnqa8JQMvLfn3UxXd_6ydFEh9gDnVrGIULq943m8ZxG45IiB1YIyNuDTtqzVRwesm_qA1Pf8rFcayTY-n-rG8.jpg");
  background-position: center;
  background-size: cover;
  position: sticky;
  top: calc(50px - 35vh);
}
.nav-user-box::before {
  position: absolute;
  content: "";
  height: calc(35vh + 40px);
  width: 100%;
  display: block;
  background-color: rgba(0, 0, 0, 0.3);
}

.userinfo-box {
  height: 35vh;
}
.blog-nav-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #495057;
  font-size: 14px;
  height: 40px;
  background-color: #fff;
  position: sticky;
  top: 50px;
  border-radius: 8px 8px 0 0;
  z-index: 1000;
}
.blog-nav-box .nav-bar {
  height: 3px;
  background-color: red;
  border-radius: 20%;
}
.photo {
  width: 70px;
  height: 70px;
  grid-area: 3 / 1 / 5 / 1;
  box-shadow: 0 0 5px #fff;
  border-radius: 50%;
  z-index: 9999;
}

.account-info {
  grid-area: 3 / 2 / 5 / 4;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.account-info > span {
  margin-top: 5px;
}

.username {
  color: #fff;
}

.account {
  font-size: 12px;
  z-index: 100;
  color: #ced4da;
}

.signature {
  z-index: 100;
  font-size: 12px;
  grid-area: 6 / 1 / 6 / 3;
  display: flex;
  align-items: center;
}

.relation-box {
  z-index: 100;
  grid-area: 7 / 1 / 7 / 3;
  display: flex;
}
.edit-info {
  display: flex;
  align-items: center;
  z-index: 100;
  grid-area: 7 / 4 / 7 / 4;
}
.edit-info > span {
  background-color: rgba(255, 255, 255, 0.3);
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid #fff;
}
.relation-box > div {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  text-align: center;
  margin-right: 18%;
}

.setting {
  font-size: 30px;
  z-index: 999;
  margin-right: 5%;
}
</style>
