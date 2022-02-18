<template>
  <div id="top-bar">
    <router-link to="/">
      <img src="@/assets/home.svg" /><br />Home
    </router-link>
    <router-link to="/space"
      ><img src="@/assets/files.svg" /><br />Space
    </router-link>
    <router-link to="/register">
      <img src="@/assets/register.svg" /><br />Register
    </router-link>
    <router-link to="/login">
      <img src="@/assets/login.svg" /><br />Login
    </router-link>
  </div>
</template>

<script>
export default {};
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
