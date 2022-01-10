<template>
  <div class='borderBox'>
    <div class='grid-item input'><input v-model="text"></div>
  </div>
</template>

<script>
export default {
  data: ()=>{
    return {
      text:'this is a string'
    }
  }
}
</script>

<style scoped>

  .borderBox {
    display: grid;
    grid-template-columns: 1fr 2fr;
    outline: 2px solid #5371a4;
    border-radius: 3px;

    margin-top: 25px;
    margin-bottom: 15px;

    text-align: center;
  }

  .borderBox .grid-item:not(:first-child) {
    border-left: 2px solid #5371a4;
  }

  .input {
    padding: 10px;
  }

  input {
    display: block;

    width: 100%;
    height: 100%;

    border: none;
    border-width: 0;

    text-overflow: ellipsis;

    font-size: 1.2rem;
  }

  input:focus {
    outline:none!important;
  }

</style>
