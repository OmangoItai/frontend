<template>
  <div class="center">
    <div class="relative">
      <div style="position: absolute">
        <div id="top-bar">
          | <router-link to="/">Home</router-link> |
          <router-link to="/login">Login</router-link> |
          <router-link to="/space">Space</router-link> |
          <router-link to="/register">Register</router-link> |
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;

  background-color: #c1f1dc;
}

.center {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.relative {
  position: relative;

  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transform: translateY(-40px);
}

#app {
  font-family: fangsong, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  min-width: 900px;
  max-width: 1400px;
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
