<template>
  <Navbar></Navbar>
  <div class="container">
    <h1>Store</h1>
    <Searchbar></Searchbar>
    <StoreSortbar></StoreSortbar>
    <div class="store-container">
      <img class="image1" src="../assets/games/csgo_icon.png"><br>
      CounterStrike: Global Offensive<br>
      <img class="rating" src="../assets/games/4_stars.png">
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Searchbar from '../components/Searchbar.vue'
import StoreSortbar from '../components/StoreSortbar.vue'

export default {
  name: 'Store',
  components: {
    "Navbar": Navbar,
    "Searchbar": Searchbar,
    "StoreSortbar": StoreSortbar
  }
}
</script>

<style>
  .image1 {
    height: 200px;
    width: 200px;
  }

  body {
    background-color: black;
    color: white;
  }

  h1 {
    font-size: 36px;
    color: white;
  }

  .container {
    margin: 50px 100px 50px 100px;
  }

  .store-container {
    margin-top: 25px;
    font-size: 20px;
    vertical-align: middle;
  }
</style>