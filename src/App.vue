<template>
  <div id="top-bar">
    | <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/space">Space</router-link> |
    <router-link to="/register">Register</router-link> |
  </div>
  <router-view/>
</template>

<script>

export default {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#top-bar {
  padding: 30px;
}

#top-bar a {
  font-weight: bold;
  color: #2c3e50;
}

#top-bar a.router-link-exact-active {
  color: #42b983;
}
</style>
