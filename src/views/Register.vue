<template>
  <div class="login">
    <div class="sub-item">
      用户名
      <input v-model="username" />
    </div>

    <div class="sub-item">
      密码
      <input v-model="password" type="password" />
    </div>
    <div class="sub-item">
      重复密码
      <input style="margin-left: 35px" v-model="repeat" type="password" />
    </div>
    <Button @click="Register">注册</Button>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "Login",
  components: { Button },
  data: () => {
    return {
      username: "",
      password: "",
      repeat: "",
    };
  },
  methods: {
    async Register() {
      if (this.password !== this.repeat)
        alert("you've repeat the wrong password");
      else {
        const res = await fetch("/api/user/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });
        const json = await res.json();
        alert(JSON.stringify(json));
      }
    },
  },
};
</script>

<style scoped>
input {
  outline: 3px solid #32b97b;
  border-radius: 3px;

  margin-top: 30px;
  margin-bottom: 15px;

  text-align: center;
  font-size: 1.6em;
}
.login {
  outline: 3px solid #32b97b;
  border-radius: 3px;
  background-color: #87deb6;
  color: #fcfcfd;
  font-weight: bold;

  padding: 30px;
}
.sub-item {
  font-size: 1.6em;
}
</style>
