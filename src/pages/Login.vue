<template>
  <div class="box">
    <div class="out-box">
      <div class="photo-box">
        <img
          src="https://qcloud.dpfile.com/pc/ITNoBGEiG4Ak0DAeEymJMRhnqa8JQMvLfn3UxXd_6ydFEh9gDnVrGIULq943m8ZxG45IiB1YIyNuDTtqzVRwesm_qA1Pf8rFcayTY-n-rG8.jpg"
          alt=""
          class="photo"
        />
      </div>
      <div class="banner">
        <span class="welcome"> Welcome Back, </span>
        <br />
        <span class="username"> John </span>
      </div>
      <div class="form-box">
        <div class="form-input-box">
          <span class="input-title">Phone Number</span>
          <input
            type="number"
            @blur="isWarning('phone')"
            :class="{ warning: rules.phone.isWarning }"
            v-model="loginForm.phone"
          />
        </div>
        <div class="form-input-box">
          <span class="input-title">Verification Code</span>
          <div class="form-inner-box">
            <input
              type="number"
              v-model="loginForm.code"
              @blur="isWarning('code')"
              :class="{ warning: rules.code.isWarning }"
            />
            <button
              class="code-btn"
              @click="getCode"
              :disabled="isDisabledCodeBtn"
            >
              {{ codeContent }}
            </button>
          </div>
        </div>
        <span class="to-password"> Password Login </span>
      </div>
      <div class="buttom-box">
        <button class="login-btn" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isDisabledCodeBtn: false,
      codeContent: "get code",
      loginForm: {
        phone: "",
        code: "",
      },
      rules: {
        phone: {
          isWarning: false,
          patterns:
            /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
          alias: "电话号码",
        },
        code: {
          isWarning: false,
          patterns: /^\d{6}$/,
          alias: "验证码",
        },
      },
    };
  },
  methods: {
    isWarning(val) {
      if (!this.loginForm[val]) {
        this.rules[val].isWarning = true;
      } else {
        this.rules[val].isWarning = false;
      }
    },
    verifyFormIvalid() {
      for (let key of Object.keys(this.loginForm)) {
        let data = this.loginForm[key];
        if (!data) {
          this.$message({
            message: `请输入${this.rules[key].alias}`,
            type: "warning",
          });
          return true;
        } else if (!this.rules[key].patterns.test(data)) {
          this.$message({
            message: `${this.rules[key].alias}格式错误`,
            type: "warning",
          });
          return true;
        }
      }
    },
    getCode() {
      let phone = this.loginForm.phone;
      if (!phone) {
        this.$message({
          message: "请输入电话号码",
          type: "warning",
        });
        return;
      } else if (!this.rules.phone.patterns.test(phone)) {
        this.$message({
          message: `电话号码格式错误`,
          type: "warning",
        });
        return;
      }
      this.$axios({
        method: "post",
        url: "/api/user/code",
        params: {
          phone: phone,
        },
      }).catch((error) => {
        this.$message({
          message: "验证码获取失败",
        });
        return;
      });
      this.codeTimer();
      clearInterval("asdfasfas", this.timer);
    },
    login() {
      let flag = this.verifyFormIvalid();
      if (flag) {
        return;
      }
      this.$axios({
        method: "post",
        url: "/api/user/login",
        data: this.loginForm,
      })
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem("token", res.data.data);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          this.$message({
            message: "登录失败",
            type: "warning",
          });
        });
      clearInterval(this.timer);
    },
    codeTimer() {
      this.codeContent = 60;
      this.isDisabledCodeBtn = true;
      this.timer = setInterval(() => {
        if (this.codeContent <= 0) {
          this.codeContent = "get code";
          this.isDisabledCodeBtn = false;
          clearInterval(timer);
        } else {
          this.codeContent -= 1;
        }
      }, 1000);
    },
  },
  deactivated() {
    clearInterval(this.timer);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
.box {
  padding: 20% 10%;
  background-image: url("../assets/a.jpg");
  background-position: center;
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.out-box {
  width: 100%;
  background: rgba(255, 266, 255, 0.4);
  padding: 10% 10%;
  border-radius: 24px;
  backdrop-filter: blur(18px);
}

.photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.banner {
  margin-top: 10%;
}

.welcome {
  font-size: 25px;
}

.username {
  display: inline-block;
  font-size: 25px;
  font-weight: 700;
  margin-top: 2%;
}

.form-box {
  margin-top: 10%;
  width: 100%;
}

.form-box .input-title {
  display: block;
  font-size: 8px;
  margin-bottom: 2%;
  font-weight: 600;
  color: #454545;
}

.form-box input {
  outline: none;
  width: 100%;
  border: 0;
  transition: all 0.8s ease;
  padding: 8px 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.6);
}

.form-box input:focus {
  box-shadow: 0 0 6px #f55555;
}

.warning {
  box-shadow: 0 0 6px #f55555;
}

.form-input-box {
  width: 100%;
}

.form-box .form-input-box:nth-child(2) {
  margin-top: 8%;
}

.buttom-box {
  margin-top: 8%;
}

.to-password {
  display: block;
  text-align: right;
  font-size: 10px;
  margin-top: 3%;
  cursor: pointer;
  color: #485563;
}

.buttom-box {
  text-align: center;
}

.login-btn {
  width: 60%;
  height: 40px;
  border-radius: 20px;
  outline: none;
  border: none;
  background-color: #485563;
  color: #fff;
}

.code-btn {
  outline: none;
  border: 0px;
  background: rgba(255, 255, 255, 0);
  color: #485563;
  position: absolute;
  right: 3%;
  top: 0px;
  bottom: 0px;
}

.form-inner-box {
  /* display: flex; */
  position: relative;
}
</style>
