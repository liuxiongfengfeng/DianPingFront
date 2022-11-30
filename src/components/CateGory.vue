<template>
  <div class="category-box">
    <div class="item" v-for="i in 10">
      <img src="../assets/blog1.jpg" class="view-img" alt="" />
      <span class="category-name">分类{{ i }}</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.category-box {
  display: grid;
  padding: 2% 0 0 0;
  gap: 0px 5px;
  grid-template-columns: repeat(5, auto);
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.view-img {
  height: 70%;
  width: 70%;
}
.category-name {
  font-size: 12px;
  font-weight: 400;
}
</style>
