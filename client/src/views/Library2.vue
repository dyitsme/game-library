<template>
  <Navbar></Navbar>
  <div class="container">
    <h1>Library</h1>
    <Searchbar></Searchbar>
    <LibrarySortbar></LibrarySortbar>
    <div class="store-container">
      <div class="store-element"><img class="image-game2" src="../assets/games/csgo_icon.png"><br>CounterStrike: Glo...<br><img class="rating" src="../assets/games/4_stars.png"></div>
      <div class="store-element"><img class="image-game2" src="../assets/games/elden_ring_icon.png"><br>Elden Ring<br><img class="rating" src="../assets/games/5_stars.png"></div>
      <div class="store-element"><img class="image-game2" src="../assets/games/fortnite_icon.png"><br>Fortnite<br><img class="rating" src="../assets/games/2_stars.png"></div>
      <div class="store-element"><img class="image-game2" src="../assets/games/minecraft_icon.png"><br>Minecraft<br><img class="rating" src="../assets/games/5_stars.png"></div>
      <div class="break"></div>
      <div class="store-element"><img class="image-game2" src="../assets/games/genshin_impact_icon.png"><br>Genshin Impact<br><img class="rating" src="../assets/games/4_stars.png"></div>
      <div class="store-element"><img class="image-game2" src="../assets/games/honkai_impact_icon.png"><br>Honkai Impact<br><img class="rating" src="../assets/games/4_stars.png"></div>
      <div class="store-element"><img class="image-game2" src="../assets/games/among_us_icon.png"><br>Among Us<br><img class="rating" src="../assets/games/4_stars.png"></div>
      <div class="store-element"><img class="image-game2" src="../assets/games/control_icon.png"><br>Control<br><img class="rating" src="../assets/games/4_stars.png"></div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Searchbar from '../components/Searchbar.vue'
import LibrarySortbar from '../components/LibrarySortbar.vue'

export default {
  name: 'Library2',
  components: {
    "Navbar": Navbar,
    "Searchbar": Searchbar,
    "LibrarySortbar": LibrarySortbar
  }
}
</script>

<style scoped>
  .image-game2{
    height: 180px;
    width: 180px;
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
    flex-wrap: wrap;
    flex-direction: row;
  }

  .store-element {
    flex: 1;
    padding: 10px;
    font-size: 22px;
  }

  .break {
    display: flex;
    flex-basis: 100%;
    height: 0;
  }
</style>