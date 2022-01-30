<template>
  <div class="login">
    <div class="selection">
      <div class="option">
        <input type="checkbox" @input="SelectAll" />
        all
      </div>

      <div class="dir">
        <div v-for="dir in listDir" v-bind:key="dir">
          <input type="checkbox" v-model="selectedDir" :value="dir.name" />
          <a href="dir.name">{{ dir.name }}</a>
        </div>
      </div>

      <div class="file">
        <div v-for="file in listFile" v-bind:key="file">
          <input type="checkbox" v-model="selectedFile" :value="file.name" />
          <a href="file.name">{{ file.name }}</a>
        </div>
      </div>
    </div>

    <DownloadButton @click="DownLoad" />
  </div>
</template>

<script>
import DownloadButton from "@/components/DownloadButton";
export default {
  name: "SelectList",
  components: { DownloadButton },
  data: () => {
    return {
      listDir: [],
      listFile: [],
    };
  },
  mounted() {
    this.GetList();
  },
  methods: {
    SelectAll: function () {
      const inputs = document.querySelectorAll("input");
      const input = document.querySelector("input");
      inputs.forEach((e) => (e.checked = input.checked));
    },

    DownLoad: function () {
      let selectedDir = [];
      let selectedFile = [];
      document
        .querySelectorAll(".dir input:checked")
        .forEach((x) => selectedDir.push(x.value));
      document
        .querySelectorAll(".file input:checked")
        .forEach((x) => selectedFile.push(x.value));

      alert("DOWNLOADING " + selectedDir + ", and " + selectedFile);
    },

    GetList() {
      this.listDir = [
        { name: "gay video", path: "" },
        { name: "animals", path: "" },
      ];
      this.listFile = [
        { name: "f", path: "" },
        { name: "u", path: "" },
        { name: "3", path: "" },
      ];
    },
  },
};
</script>

<style scoped>
.selection {
  font-size: 1.5em;
}
.login a {
  text-decoration: none;
}
.login {
  outline: 3px solid #32b97b;
  border-radius: 3px;
  background-color: #87deb6;
  color: #fcfcfd;
  font-weight: bold;

  padding: 30px;
}
.option {
  outline: 2px solid #42ba84;
  border-radius: 3px;
  margin-top: 25px;
  margin-bottom: 15px;
  text-align: left;
  padding: 10px;

  width: 500px;

  background: white;

  color: #2c3e50;
}
.dir {
  outline: 2px solid #eea069;
  border-radius: 3px;
  margin-top: 25px;
  margin-bottom: 15px;
  text-align: left;
  padding: 10px;

  width: 500px;

  background: white;

  color: #2c3e50;
}
.file {
  outline: 2px solid #5879b7;
  border-radius: 3px;
  margin-top: 25px;
  margin-bottom: 15px;
  text-align: left;
  padding: 10px;

  width: 500px;

  background: white;

  color: #2c3e50;
}
</style>
