<template>
  <Navbar></Navbar>
  <div class="container">
    <h1>Store</h1>
    <Searchbar></Searchbar>
    <StoreSortbar></StoreSortbar>
    <div class="store-container">
      <a href="/view-game-customer/1">
        <div class="store-element" ><img class="image-game" src="../assets/games/csgo_icon.png"><br><br>CounterStrike: Global Offensive<br><img class="rating" src="../assets/games/4_stars.png"></div>
      </a>
      <a href="/view-game-customer/2">
        <div class="store-element"><img class="image-game" src="../assets/img/BabaIsYou.png"><br><br>Baba Is You<br><img class="rating" src="../assets/games/5_stars.png"></div>
      </a>
      <a href="/view-game-customer/3">
        <div class="store-element"><img class="image-game" src="..\assets\img\Train Simulator Classic.png"><br><br>Train Simulator Classic<br><img class="rating" src="../assets/games/2_stars.png"></div>
      </a>
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
  a{
    text-decoration: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;

    color: #FFFFFF;

    padding-bottom: 50px;
    margin-top: 33px;
    padding-right: 20px;

    width: 1170px;
    height: auto;
  }
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