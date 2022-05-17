<template>
  <Navbar></Navbar>
  <div class="container">
    <h1>Store</h1>
    <Searchbar></Searchbar>
    <LibrarySortbar></LibrarySortbar>
    <div class="store-container">
      <div class="store-element"><img class="image-game" src="../assets/games/csgo_icon.png"><br><br>CounterStrike: Global Offensive<br><img class="rating" src="../assets/games/4_stars.png"></div>
      <div class="store-element"><img class="image-game" src="../assets/games/elden_ring_icon.png"><br><br>Elden Ring<br><img class="rating" src="../assets/games/5_stars.png"></div>
      <div class="store-element"><img class="image-game" src="../assets/games/fortnite_icon.png"><br><br>Fortnite<br><img class="rating" src="../assets/games/2_stars.png"></div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Searchbar from '../components/Searchbar.vue'
import LibrarySortbar from '../components/LibrarySortbar.vue'

export default {
  name: 'Store',
  components: {
    "Navbar": Navbar,
    "Searchbar": Searchbar,
    "LibrarySortbar": LibrarySortbar
  }
}
</script>

<style>
  .image-game{
    height: 350px;
    width: 350px;
  }

  .rating {
    height:25px;
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
    vertical-align: middle;
    display: flex;
    
  }

  .store-element {
    flex: 1;
    padding: 10px;
    font-size: 22px;
  }
</style>