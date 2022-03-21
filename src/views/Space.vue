<template>
  <div class="login">
    <div class="selection">
      <div class="option">
        <input type="checkbox" @input="SelectAll" />
        全选
      </div>

      <div class="dir">
        <a :href="$route.path.substring(0, $route.path.lastIndexOf('/'))">..</a>
        <div v-for="dir in listDir" v-bind:key="dir">
          <input type="checkbox" :value="dir.name" />
          <a :href="$route.path + '/' + dir.name">{{ dir.name }}</a>
        </div>
      </div>
      <div class="file">
        <div v-for="file in listFile" v-bind:key="file">
          <input type="checkbox" :value="file.name" />
          <a :href="$route.path + '/' + file.name">{{ file.name }}</a>
        </div>
      </div>
    </div>

    <Button @click="DownLoad">下载</Button>
    <Button @click="ClickUpload">上传</Button>
    <input id="UploadInput" @change="Upload" type="file" />
  </div>
</template>

<script>
import Button from "@/components/Button";

const fileDownload = require("js-file-download");

export default {
  name: "SelectList",
  components: { Button },
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
      const input = document.querySelector("input");
      this.SetAll(input.checked);
    },
    SetAll(state) {
      const inputs = document.querySelectorAll("input");
      inputs.forEach((e) => (e.checked = state));
    },

    ClickUpload() {
      document.getElementById("UploadInput").click();
    },

    async Upload() {
      const input = document.getElementById("UploadInput");
      const form = new FormData();
      const file = input.files[0];
      form.append("file", file, file.name);
      form.append("path", window.location.pathname);
      await fetch("/api/upload", {
        method: "POST",
        body: form,
      });
      this.GetList();
    },

    async DownLoad() {
      let selectedDir = [];
      let selectedFile = [];
      document
        .querySelectorAll(".dir input:checked")
        .forEach((x) => selectedDir.push(x.value));
      document
        .querySelectorAll(".file input:checked")
        .forEach((x) => selectedFile.push(x.value));

      var msg = "准备下载";
      if (selectedDir.length > 0) msg += "\n以下文件夹：" + selectedDir;
      if (selectedFile.length > 0) msg += "\n以下文件：" + selectedFile;
      if (msg === "准备下载") {
        alert("您还未选择内容");
        return;
      } else {
        alert(msg);

        const url = this.$route.path;

        selectedDir.map(async (dir) => {
          try {
            const res = await fetch("/api/download", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                type: "dir",
                path: `${url}/${dir}`,
              }),
            });
            const text = await res.blob();
            fileDownload(text, `${dir}.zip`);
          } catch (err) {
            console.error(err);
          }
        });

        selectedFile.map(async (file) => {
          try {
            const res = await fetch("/api/download", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                type: "file",
                path: `${url}/${file}`,
              }),
            });
            const text = await res.blob();
            fileDownload(text, file);
          } catch (err) {
            console.error(err);
          }
        });

        this.SetAll(false);
      }
    },

    async GetList() {
      const res = await fetch(`/api/file/list?dir=${this.$route.path}`);
      if (res.redirected) {
        alert("请登录");
        return this.$router.push(res.url);
      }
      const list = await res.json();
      console.log(list);
      this.listDir = list["dir"];
      this.listFile = list["file"];
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
