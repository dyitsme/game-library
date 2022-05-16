<template>
  <button class="sort-btn">
    <img class="icon" src="../assets/sort3_icon.svg">
  </button>
  <button class="sort-btn">
    <img class="icon" src="../assets/sort2_icon.svg">
  </button>
</template>

<script>
export default {
  name: 'StoreSortbar'
}
</script>

<style>
  button {
    background-color: Transparent;
  }
  .sort-btn {
    float: right;
  }

  .icon {
  height: 1.4em;
  width: 1.4em;
  }
</style>