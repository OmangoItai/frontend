<template>
  <div class="login">
    <div class="sub-item">
      Username
      <input v-model="username" />
    </div>

    <div class="sub-item">
      Password
      <input v-model="password" type="password" />
    </div>
    <Button @click="login">登录</Button>
    <Button @click="regis">注册</Button>
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
    };
  },
  methods: {
    async login() {
      this.$store.commit("set", true);
      const res = await fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });

      if (res.redirected) {
        this.$router.push(res.url);
      }

      if (res.status == 200) {
        this.$store.commit("set", this.username);
      }
    },
    regis() {
      this.$router.push("/register");
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
