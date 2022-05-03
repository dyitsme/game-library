

<template>
    <Navbar></Navbar>
    <div class="parent-container">
      <div class="view-game-rectangle">
        <div class="container">
          <div class="game-image"><img src="../assets/img/BabaIsYou.png" alt="Baba Is You Image"></div>
          <button class="back-button"><img src="../assets/img/BackButton.png" alt="Back Button Image" class="back-image"></button>
          <button @click="toggleBuyButton" class="buy-game-button">
            <div v-if="isOwned">In Library</div> 
            <div v-else>BUY GAME</div>
          </button>
        </div>
        <div class="information">
          <div class="flex-1">
            <div class="title">Baba Is You</div>
            <div class="green-bullet"><img src="../assets/img/GreenBullet.png" alt="Green Bullet Image"></div>
            <div class="genre">Puzzle</div>
          </div>
          <div class="four-stars"> <img src="../assets/img/FourStars.png" alt="Four Stars Image"></div>
          <div class="definition">Baba Is You is an award-winning puzzle game where you can change the rules by which you play. In every level, the rules themselves are present as blocks you can interact with; by manipulating them, you can change how the level works and cause surprising, unexpected interactions! With some simple block-pushing you can turn yourself into a rock, turn patches of grass into dangerously hot obstacles, and even change the goal you need to reach to something entirely different.</div>
          <div><a href="https://store.steampowered.com/app/736260/Baba_Is_You/">https://store.steampowered.com/app/736260/Baba_Is_You/</a></div>
        </div>
      </div>
    </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'

  export default {
    name: 'Home',
    components: {
      'Navbar': Navbar
    },


    data() {
      return {
        isOwned: false
      }
    },

    methods: {
      toggleBuyButton() {
        this.isOwned = true
      }
    },

  }

  

</script>
<style>
  
  
  body{
    background-color: #111111;

  }
</style>
<style scoped>

  img {
      width:100%;
      height:100%;
      object-fit:cover;
  }
  a {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    padding-bottom: 100%;
    height: au;

    color: #FFFFFF;
  }

  button{
    border: 0ch;
  }
  .back-image {
    position: absolute;
    width: 53px;
    height: 58px;
    left: 20px;
    top: 20px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .back-button{
    background-color: transparent;
    padding: 0px;
    border: 0px;
  }
  .parent-container {
      margin: 10%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .four-stars {
    margin-top: 3px;
    width: 186px;
    height: 37.99px;
  }
  .green-bullet {

    width: 11px;
    height: 12px; 
  }

  .definition {
    padding-bottom: 50px;
    margin-top: 33px;
    padding-right: 20px;

    width: 1170px;
    height: auto;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;

    color: #FFFFFF;
  }
  .flex-1 {
    display: flex;
    align-items: center;
    gap: 35px;
  }


  .title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;

    color: #FFFFFF;
  }

  .genre {
    width: 343px;
    height: 42px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 29px;
    line-height: 35px;

    color: #FFFFFF;
  }
  .buy-game-button {
    position: absolute;
    width: 269px;
    height: 81px;
    left: 905px;
    top: 416px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    text-align: center;

    color: #FFFFFF;

    background: #00DD99;
    border-radius: 4px;

  }
  .container {
    position: relative;
    width: 1199px;
    height: 523px;  
  }
  .view-game-rectangle {
    width: 1199px;
    height: auto;
    padding-bottom: 2%;


    background: #222222;
    border-radius: 8px;
  }
  .game-image {
    width:100%;
    height:100%;
    object-fit:cover;
  }
  .information {
    margin-left: 29px;
    margin-top: 28px;
    height: auto;
  }
</style>