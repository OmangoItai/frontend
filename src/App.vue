<template>
  <Navbar />
  <div class="center">
    <div class="relative">
      <div style="position: absolute"></div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: { Navbar },
};
</script>

<style>
body {
  font-family: "Times New Roman", Times, serif;
  margin: 0;
  background-color: #ccecde;
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
</style>
