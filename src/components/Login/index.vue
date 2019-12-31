<template>
  <div class="login_body">
    <div>
      <input class="login_text" type="text" v-model="username" placeholder="账户名/手机号/Email" />
    </div>
    <div>
      <input class="login_text" type="password" v-model="password" placeholder="请输入您的密码" />
    </div>
    <div class="login_btn">
      <input type="submit" value="登录" @touchstart="handleToLogin" />
    </div>
    <div class="login_link">
      <a href="#">立即注册</a>
      <a href="#">找回密码</a>
    </div>
  </div>
</template>
<script>
import { messageBox } from "@/components/JS";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleToLogin() {
      messageBox({
        title: "提示",
        content: "账号" + this.username +"\n"+ "密码" + this.password,
        cancel: "取消",
        ok: "确定",
        handleOk() {
          messageBox({
            title: "提示",
            content: "点我干嘛",
            cancel: "取消",
            ok: "确定",
            handleOk() {
              alert("我不爱你了");
            }
          });
        },
        handleCencel() {
          messageBox({
            title: "提示",
            content: "上班996你还想咋",
            cancel: "取消",
            ok: "确定",
          });
        }
      });
    }
  }
};
</script>
<style scoped>
#content .login_body {
  width: 100%;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  margin-bottom: 5px;
  outline: none;
  text-indent: 10px;
}
.login_body .login_btn {
  height: 50px;
  margin: 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 20px;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #e54847;
}
</style>