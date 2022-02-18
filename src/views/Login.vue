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
    <LoginButton @click="Login" />
    <RegisterButton />
  </div>
</template>

<script>
import LoginButton from "@/components/LoginButton";
import RegisterButton from "@/components/RegisterButton";
export default {
  name: "Login",
  components: { RegisterButton, LoginButton },
  data: () => {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async Login() {
      this.$store.commit("set", true);
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });
      alert(res);
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
