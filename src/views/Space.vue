<template>

  <DownloadButton @click="DownLoad"/>
  <div class="selection">
    <div class="option">
      <input type="checkbox" @input="SelectAll">
      all
    </div>

    <div class="dir">
      <div v-for="dir in listDir" v-bind:key="dir">
        <input type="checkbox" v-model="selectedDir" :value="dir.name"> {{dir.name}}
      </div>
      selected dirs:{{selectedDir}}, {{selectedDir.length}}
    </div>

    <div class="file">
      <div v-for="file in listFile" v-bind:key="file">
        <input type="checkbox" v-model="selectedFile" :value="file.name"> {{file.name}}
      </div>
      selected files:{{selectedFile}}
    </div>

  </div>
</template>

<script>
import DownloadButton from "@/components/DownloadButton";
export default {
  name: "SelectList",
  components: {DownloadButton},
  data: ()=>{
    return {
      listDir: [{name:'gay video', path:''},{name:'animals',path:''}],
      selectedDir: [],
      listFile: [{name:'f', path:''}, {name:'u', path:''},{name:'3', path:''}],
      selectedFile:[],
    }
  },
  methods:{
    SelectAll: function(){
      if(this.selectedDir.length < this.listDir.length &&
          this.selectedFile.length < this.listFile.length) {
        this.selectedDir = this.listDir
        this.selectedFile = this.listFile
      }
      else {
        this.selectedDir.clear()
        this.selectedFile.clear()
      }
    },

    DownLoad: function(){
      alert('DOWNLOADING ' + this.selectedDir + ', and ' + this.selectedFile)
    }
  }
}

</script>

<style scoped>
.selection{
  font-size: 1.5em;
}
.option{
  outline: 2px solid #42ba84;
  border-radius: 3px;
  margin-top: 25px;
  margin-bottom: 15px;
  text-align: left;
}
.dir{
  outline: 2px solid #eea069;
  border-radius: 3px;
  margin-top: 25px;
  margin-bottom: 15px;
  text-align: left;
}
.file{
  outline: 2px solid #5879b7;
  border-radius: 3px;
  margin-top: 25px;
  margin-bottom: 15px;
  text-align: left;
}
</style>
