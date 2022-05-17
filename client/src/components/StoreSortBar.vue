<template>
  <button class="sort-btn" @click="sortTwo()">
    <img class="icon" src="../assets/sort2_icon.svg">
  </button>
  <button class="sort-btn" @click="sortOne()">
    <img class="icon" src="../assets/sort1_icon.svg">
  </button>
  <button @click="sortOne()">Click me</button>
</template>

<script>
  export default {
    name: 'StoreSortbar',
    
    methods: {
      sortOne(){
        this.$router.push({name: 'Store' })
        console.log("hi")
      },
      sortTwo(){
        this.$router.push({name: 'Store' })
      }
    }
  }
  
</script>

<style>

  button {
    background-color: Transparent;
    color:white;
  }
  .sort-btn {
    float: right;
  }

  .icon {
  height: 1.4em;
  width: 1.4em;
  }
</style>