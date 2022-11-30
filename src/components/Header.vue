<template>
  <div class="header">
    <el-row class="header-inner-box">
      <el-col :span="4">
        <div class="grid-content bg-purple city-option-box">
          <span>长沙</span>
          <span class="el-icon-arrow-down"></span>
        </div>
      </el-col>

      <el-col :span="16" class="search-box">
        <div class="grid-content bg-purple-light search-box_inner">
          <input
            type="text"
            name=""
            id=""
            placeholder="请输入店铺名、商品名"
            class="search-input input"
          />
          <span class="el-icon-search span"></span>
        </div>
      </el-col>
      <el-col :span="4" class="user-box">
        <div class="grid-content bg-purple">
          <span class="el-icon-user"></span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  height: 50px;
  /* width: 100%; */
}

.header-inner-box {
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: #fff;
  padding: 5px 0px;
}

.city-option-box {
  font-size: 10px;
  text-align: center;
}

.city-option-box span:last-child {
  margin-left: 3px;
}

.search-input::-webkit-input-placeholder {
  font-size: 10px;
}

.search-input {
  outline: none;
  border: 0px;
  border-radius: 20px;
  height: 28px;
  width: 90%;
  padding: 0px 0px 0px 30px;
  box-shadow: 0 0 5px #ced4da;
}

.search-box {
  text-align: center;
}

.search-box_inner {
  width: 100%;
  padding: 0px 10px;
  position: relative;
  display: inline-block;
}

.user-box {
  display: flex;
  justify-content: center;
}

.span {
  position: absolute;
  top: 0px;
  left: 20px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  padding: 0;
  color: #000;
  font-size: 15px;
  cursor: pointer;
}
</style>
