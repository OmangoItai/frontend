<template>
  <div class="login">
    <div class="sub-item">
      Username
      <input v-model="username" />
      {{ username }}
    </div>

    <div class="sub-item">
      Password
      <input v-model="password" type="password" />
      {{ password }}
    </div>
    <div class="sub-item">
      Repeat
      <input style="margin-left: 35px" v-model="repeat" type="password" />
      {{ repeat }}
    </div>
    <RegisterButton @click="Register" />
  </div>
</template>

<script>
import RegisterButton from "@/components/RegisterButton";
export default {
  name: "Login",
  components: { RegisterButton },
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
        alert("2 password are same");
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });
        alert(res);
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
