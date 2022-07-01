<template>
  <Navbar></Navbar>
  <div class="container">
    <h1>Library</h1>
    <Searchbar></Searchbar>
    <div class="store-container">
      <router-link v-for="ownedgame in ownedgames" :key="ownedgame._id" :to="{ name: 'ViewGame', params: { id: ownedgame._id }}">
        <div class="store-element" ><img class="image-game" :src="'http://localhost:3000/' + ownedgame.image"><br><br>{{ ownedgame.title }}<br><img class="rating" src="../assets/games/4_stars.png"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Searchbar from '../components/Searchbar.vue'
import TokenService from '../services/TokenService'

export default {
  name: 'Library',
  components: {
    "Navbar": Navbar,
    "Searchbar": Searchbar,
  },
  data() {
    return {
      ownedgames: [],
    }
  },
  mounted() {
    const id = TokenService.getDecoded()._id
    const url = `http://localhost:3000/api/users/games/${id}`
    const vm = this

    fetch(url, {
      mode: 'cors'
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      vm.ownedgames = data.ownedgames
    })
    .catch(err => console.log(err))
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;

    color: #FFFFFF;

    padding-bottom: 50px;
    margin-top: 33px;
    padding-right: 20px;

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
    width: 100vw;
    flex-wrap: wrap;
  }

  .store-element {
    flex: 1;
    padding: 10px;
    font-size: 22px;
  }
</style>