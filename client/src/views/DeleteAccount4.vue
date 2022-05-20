

<template>
    <Navbar></Navbar>
    <div class="parent-container">
      
      <div class="container">
        <div class="bar"></div>
        <div class="content-box">
          <div class="image-box"><img src="..\assets\img\WarningSign.png" alt="Warning Sign Image"></div>
          <h1>Are you sure?</h1>
          <h2>Tina Lewis, this will permanently delete your account.</h2>
          <div class="flex-1">
            <a href="/profile2/">
              <button class="cancel-button">Cancel</button>
            </a>
            <button class="confirm-button">Confirm</button>
          </div>
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

<style>
  body{
    background-color: #111111;

  }
</style>
<style scoped>
    .parent-container {

    margin: 5%;
    display: block;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
.content-box {
  margin-left: 54px;
  margin-top: 45px;
  margin-right: 54px;
  margin-bottom: 45px;

}

  .flex-1 {
    margin-top: 136px;
    display: flex;
    justify-content: space-between;
  }
button {
  border: 0px;  
}
  .cancel-button {
    width: 306px;
    height: 73px;

    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    text-align: center;

    background: #444444;
    color: #FFFFFF;

  }

  .confirm-button {
    width: 306px;
    height: 73px;

    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    border-radius: 4px;
    background: #F53649;
    text-align: center;

    color: #FFFFFF;
  }
  .image-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 137px;
    height: 137px;

    
    
  }
  h1 {
    margin-top: 22px;

    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: center;

    color: #FFFFFF;

  }

  h2 {
    margin-top: 29px;

    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;

    color: #E6E6E6;
  }
  .bar {
    width: 978px;
    height: 30px;

    background: #F53649;
    border-radius: 4px;
  }

  .container {
    width: 978px;
    height: 646px;

    background: #222222;

    margin: 0;

  }
</style>