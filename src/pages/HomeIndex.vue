<template>
  <div>
    <Header />
    <CateGory />
    <BlogList />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import CateGory from "../components/CateGory";
import BlogList from "../components/BlogList";
export default {
  components: {
    Header,
    CateGory,
    BlogList,
  },
};
</script>

<style scoped></style>
