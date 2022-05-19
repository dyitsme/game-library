

<template>
    <Navbar></Navbar>
    <div class="parent-container">
      <div class="view-game-rectangle">
        <div class="container">
          <div class="game-image"><img src="..\assets\Train Simulator Classic.png" alt="Train Simulator Classic Image"></div>
          <button class="back-button"><img src="..\assets\BackButton.png" alt="Back Button Image" class="back-image"></button>
          <button class="edit-button"><a href="/store/edit/3/">Edit</a></button>
          <button class="delete-button"><a href="/store/delete/3/">Delete</a></button>
        </div>
        <div class="information">
          <div class="flex-1">
            <div class="title">Train Simulator Classic</div>
            <div class="green-bullet"><img src="..\assets\GreenBullet.png" alt="Green Bullet Image"></div>
            <div class="genre">Simulation</div>
          </div>
          <div class="four-stars"> <img src="..\assets\FourStars.png" alt="Four Stars Image"></div>
          <div class="definition">Welcome to the ultimate railway hobby! Master complex operations on the DB BR 411 ICE T, BR Class 390 Pendolino, Union Pacific AC4400CW, and more as you explore authentic routes. Whatever you love about trains, Train Simulator Classic lets you take your hobby to the next level.</div>
          <a href="https://store.steampowered.com/app/24010/Train_Simulator_Classic/">https://store.steampowered.com/app/24010/Train_Simulator_Classic/</a>
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
  a {
    text-decoration: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;

    color: #FFFFFF;
  }

  button{
    border: 0ch;
  }

  .delete-button {
    left: 1062px;
  }
  .edit-button {
    left: 930px;

  }
  button{
    position: absolute;
    width: 59px;
    height: 39px;
    top: 27px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */


    color: #EBEBEB;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    background: transparent;
    border: 0px;
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
    display: block;
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
  img {
    width:100%;
    height:100%;
    object-fit:cover;
  }
  .game-image {
    width:100%;
    height:100%;
    object-fit:cover;
  }
  .information {
    margin-left: 29px;
    margin-top: 28px;
  }
</style>