<template>
  <div class='selectButtonContainer'>
    <a href='#'>
      <div :class='{selected: selected}' class='selectButton'>
        <img v-if='selected'  src='@/assets/caret.svg'/>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    selected: Boolean
  }
}
</script>

<style scoped>

  a {
    text-decoration: none;

    display: grid;
    justify-items: center;
    align-items: center;

    color: #1a1a1a;
  }

  .selectButtonContainer {
    width: 150px;
    display: grid;
    justify-items: center;
    align-items: center;
  }

  .selectButton {
    width: 15px;
    height: 15px;

    color: #304c72;

    display: grid;
    justify-items: center;
    align-items: center;

    border-radius: 50%;
    background: rgba(95, 220, 48, 0.9);

    box-shadow: 0px 3px 5px #00000030;
  }

  img {

    transform: scale(1.2) translate(1px, 1px)
  }

  .selected {
    background: #eef5ff;
  }

</style>
