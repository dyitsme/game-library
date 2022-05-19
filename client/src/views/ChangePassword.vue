

<template>
    <Navbar></Navbar>

    <div class="parent-container">
      <div id="inner">
        <a href="/delete-account/">
          <button class="back-button"><img src="..\assets\BackButton.png" alt="Back Button Image" class="back-image"></button>
        </a>
        <div id="main">Change Password</div>
        <div id="inputs">
          <div class="text"> Current Password <input type="text"></div>
          <div class="text" id="new-password"> New Password <input type="text"></div>
          <div class="text" id="confirm-password"> Confirm Password <input type="text"></div>
        </div>
        <div><button id="change-password">Change Password</button></div>
      </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    'Navbar': Navbar
  }
}
</script>

<style scoped>
  .back-image {
    position: absolute;
    width: 50px;
    height: 50px;

    
  }
  .back-button{
    background-color: transparent;
    padding: 0px;
    border: 0ch;

  }

  #inputs{
    display: block;
    flex-flow: column wrap;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 8%;
    width: min-content;
  }
  input[type=text] {
    display: inline;
    width: auto;
    height: auto;

    background: #151515;
    border-radius: 4px;
    border: 0ch;

    justify-content: space-between;
  }
  input{
    height: 20px;
    flex: 0 0 200px;
    margin-left: 10px;
  }
  .text{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    text-align: left;
    width: auto;
    line-height: 26px;
    margin-bottom: 10px;
    left: 100%;
    white-space: nowrap;

    height: 5%;
    margin: 3%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;

    color: rgba(255, 255, 255, 0.6);
  }
  #inner{ 
    position: relative;
    padding: 2.5%;
    width: 50%;
    height: auto;
    background: #222222;
    border-radius: 8px;
    padding: 1000;
  }
  #main{
    text-align: center;
    vertical-align: text-bottom;
    /* My Profile */
    height: auto;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;

    color: #ffffff;

    margin-top: 20px;
  }
  .parent-container {
      margin: 5%;
      display: block;
      align-items: center;
      justify-content: center;
      height: 200vh;

      
  }

  #change-password {
    width: 100%;
    height: 92px;

    background: #444444;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    color: #ffffff;

    display: block;
    border: 0ch;

  }

</style>