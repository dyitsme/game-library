

<template>
    <div class="view-game-rectangle">
      <div class="container">
        <div class="game-image"><img src="..\assets\CounterStrike.png" alt="Counter Strike Image"></div>
        <button class="buy-game-button">BUY GAME</button>
      </div>

      <div class="information">
        <div class="flex-1">
          <div class="title">Counter Strike: Global Offense</div>
          <div class="green-bullet"><img src="..\assets\GreenBullet.png" alt="Green Bullet Image"></div>
          <div class="genre">First Person Shooter</div>
        </div>
        <div class="four-stars"> <img src="..\assets\FourStars.png" alt="Four Stars Image"></div>
        <div class="definition">Counter-Strike: Global Offensive (CS: GO) expands upon the team-</div>
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
        isAscending: true
      }
    },

    methods: {
      toggleSortButton() {
        this.isAscending = !this.isAscending
      }
    },

  }

  

</script>

<style scoped>
  
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
    margin-top: 33px;
    width: 1170px;
    height: 42px;

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
    height: 748px;

    background: #222222;
    border-radius: 8px;
  }
  .game-image {
    width: 100%;
  }
  .information {
    margin-left: 29px;
    margin-top: 28px;
  }
</style>