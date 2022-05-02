

<template>
    <Navbar></Navbar>
    <div class="body">
        <div class="profile-window">
          <h1>My Profile</h1>
          <div class="main-box">
            <img src="../assets/Holland.png" alt="Diego Holland Profile" />
            <div class="">
              <div class="info">
                <div>
                  <h3>Username</h3>
                  <h4>Diego Holland</h4>
                </div>
                <div>
                  <h3>Email</h3>
                  <h4>diego.holland@gmail.com</h4>
                </div>
                <div>
                  <h3>Status</h3>
                  <h4>Rome was...</h4>
                </div>
              </div>
              <button id="edit-button">Edit account</button>
              <h2>Security</h2>
              <div class="two-buttons">
                <button id="change-password">Change password</button>
                <button id="delete">Delete Account</button>
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
      .main-box {
        margin-left: 97px;
        margin-right: 97px;
        margin-bottom: 153px;
        margin-top: 46px;
      }
      h1 {
        text-align: center;
        /* My Profile */
        height: 54px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;

        color: #ffffff;
      }
      h2 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;

        color: #ffffff;

        margin-top: 191px;
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

        margin-top: 0px;
        margin-bottom: 16px;
      }
      h4 {
        width: 227px;
        height: 47px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 39px;

        color: #ffffff;

        margin-top: 0;
        margin-bottom: 31;
      }
      img {
        float: left;
        width: 241px;
        height: 241px;
        left: 97px;
        top: 153px;

        border: 9px solid #323232;
        border-radius: 50%;
        box-sizing: border-box;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        margin-right: 97px;
      }
      .body {
        width: 1104px;
        height: 1148px;

        background: #222222;
        border-radius: 8px;
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
      #edit-button {
        width: 348px;
        height: 92px;
        background: #444444;
        border-radius: 4px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 39px;
        /* identical to box height */

        margin-top: 30px;

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