<template>
  <div class="home-box">
    <router-view></router-view>
    <ButtomNavigation />
  </div>
</template>

<script>
import ButtomNavigation from "../components/ButtomNavigation";
export default {
  data() {
    return {
      userDTO: {},
    };
  },
  mounted() {
    this.$axios({
      method: "get",
      url: "/api/user/me",
    }).then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data.data));
      this.userDTO = res.data.data;
    });
  },
  components: {
    ButtomNavigation,
  },
};
</script>

<style scoped></style>
