

<template>
    <Navbar></Navbar>
    <div class="parent-container">
      <div class="body">
          <div class="profile-window">
            <div class="title">My Profile</div>
            <div class="main-box">
              <img src="../assets/img/ChristinePerry.png" alt="Christine Perry Profile" />
              <div class="">
                <div class="info">
                  <div>
                    <h3>Username</h3>
                    <h4>Christine Perry</h4>
                  </div>
                  <div>
                    <h3>Email</h3>
                    <h4>Christine.Perry@gmail.com</h4>
                  </div>
                  <div>
                    <h3>Status</h3>
                    <h4>Coffee advocate. Beer ninja. Incurable web geek. Certified communicator. Travel enthusiast.</h4>
                  </div>
                </div>
                <a href="/edit-account/1">
                  <button id="edit-button" >Edit account</button> 
                </a>
              </div>
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
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
    color: #f53649;
  }
  .profile-window{
    padding: 5%;
  }
  button{
    border: 0ch;
  }
  .parent-container {
      margin: 5%;
      display: block;
      align-items: center;
      justify-content: center;
      height: 100vh;
  }
      .main-box {
        margin-left: 97px;
        margin-right: 97px;
        margin-bottom: 153px;
        margin-top: 46px;
      }
      .title {
        text-align: center;
        vertical-align: text-bottom;
        /* My Profile */
        height: 54px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;

        color: #ffffff;

        margin-top: 20px;


      }
      h2 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;

        color: #ffffff;

        margin-top: 10%;
        margin-bottom: 64px;
      }
      h3 {
        width: 171px;
        height: 45px;
        margin-bottom: 1.6px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 39px;

        color: rgba(255, 255, 255, 0.6);

        margin-top: 20px;
        margin-bottom: 1px;
      }
      h4 {
        vertical-align: text-bottom;

        width: auto;
        height: auto;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 39px;

        color: #ffffff;

        margin-top: 0;
        margin-bottom: 40;
      }
      img {
        float: left;
        width: 241px;
        height: 241px;

        border: 9px solid #323232;
        border-radius: 50%;
        box-sizing: border-box;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        margin-right: 97px;
      }
      .body {
        width: 1100px;
        height: auto;

        background: #222222;
        border-radius: 8px;
        padding: 1000;

        
        
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: auto;
      }
      #edit-button {
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

        margin-top: 12%;

        color: #ffffff;
      }

      #change-password {
        width: 377px;
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
      }
      #delete {
        background-color: transparent;
        opacity: 100%;
        width: 374px;
        height: 92px;

        border: 1px solid #f53649;
        box-sizing: border-box;
        border-radius: 4px;

        /* Fonts*/
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 39px;
        /* identical to box height */

        color: #f53649;
      }

      .two-buttons {
        display: flex;
        justify-content: space-between;
      }
    </style>