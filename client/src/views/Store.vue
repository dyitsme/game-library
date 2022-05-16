<template>
  <Navbar></Navbar>
  <div class="container">
    <h1>Store</h1>
    <Searchbar></Searchbar>
    <StoreSortbar></StoreSortbar>
    <div class="store-container">
      <img src="../assets/games/csgo_icon.svg" height="100px" width="50px"><br>
      CounterStrike: Global Offensive<br>
      <img src="../assets/games/4_stars.svg" width="50px">
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