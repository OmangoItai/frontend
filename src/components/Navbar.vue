<template>
  <div id="top-bar">
    <router-link to="/">
      <img src="@/assets/home.svg" /><br />首页
    </router-link>
    <router-link to="/space"
      ><img src="@/assets/files.svg" /><br />空间
    </router-link>
    <router-link to="/register">
      <img src="@/assets/register.svg" /><br />注册
    </router-link>
    <router-link v-if="isLogined" to="#" @click="logout">
      <img src="@/assets/login.svg" /><br />登出
    </router-link>
    <router-link v-else to="/login">
      <img src="@/assets/login.svg" /><br />登入
    </router-link>
  </div>
</template>

<script>
export default {
  name: "navbar",
  mounted() {
    fetch("/api/user/login").then(async (res) => {
      const json = await res.json();
      this.$store.commit("set", json.username);
    });
  },
  methods: {
    logout() {
      fetch("/api/user/logout");
      this.$store.commit("set", "");
      this.$router.push("/login");
    },
  },
  computed: {
    isLogined() {
      return this.$store.state.username != "";
    },
  },
};
</script>

<style scoped>
#top-bar {
  display: grid;
  grid-template-columns: auto auto auto auto;
  position: fixed;
  top: 3px;
  outline: 3px solid;
  padding: 10px;
  color: #42b983;
  background-color: #42b983;
  width: 100%;
}

#top-bar a {
  font-weight: bold;
  color: #5fdea4;
  text-decoration: none;
}

#top-bar img {
  width: 25px;
  height: 25px;
}

#top-bar a.router-link-exact-active {
  color: #42735c;
}
</style>
