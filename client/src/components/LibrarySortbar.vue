<template>
  <button class="sort-btn" @click="sortThree()">
    <img class="icon" src="../assets/sort3_icon.svg">
  </button>
  <button class="sort-btn" @click="sortTwo()">
    <img class="icon" src="../assets/sort2_icon.svg">
  </button>
  <button class="sort-btn" @click="sortOne()">
    <img class="icon" src="../assets/sort1_icon.svg">
  </button>
</template>

<script>
export default {
  name: 'LibrarySortbar',
    
    methods: {
      sortOne(){
        this.$router.push({name: 'Library' })
      },
      sortTwo(){
        this.$router.push({name: 'Library2' })
      },
      sortThree(){
        this.$router.push({name: 'Library3'})
      }
    }
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