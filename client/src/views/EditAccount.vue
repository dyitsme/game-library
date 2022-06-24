<template>
    <Navbar></Navbar>
    <div class="parent-container">
      <div class="body">
          <div class="profile-window">
            <div class="title">My Profile</div>
            <div class="main-box">
              <div class="err-msg" v-for="error in errors" :key="error.id">
                {{ error }}
              </div>
              <img src="../assets/img/Holland.png" alt="Diego Holland Profile" />
              <div class="upload-btn">Upload Image</div>
              <input id="img-input" type="file" accept="image/*">
              <div class="">
                <div class="info">
                  <div>
                    <h3>Username</h3>
                    <input class="input" type="text" v-model="username">
                  </div>
                  <div>
                    <h3>Email</h3>
                    <input class="input" type="text" v-model="email">
                  </div>
                  <div>
                    <h3>Status</h3>
                    <textarea class="text-area" v-model="description">
                    </textarea>
                  </div>
                </div>
                <button id="edit-button" @click="save()">Save</button>
                <br><br>
                <div class="two-buttons">
                  <button id="change-password" @click="changePass()">Change password</button>
                  <button id="delete" @click="$router.push({ name: 'DeleteAccount'})">Delete Account</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import TokenService from '../services/TokenService'
import validator from 'validator'

export default {
  name: 'EditAccount1',
  components: {
    'Navbar': Navbar
  },
  data() {
    return {
      username: '',
      email: '',
      description: '',
      errors: '',
      duplicateError: ''
    }
  },
  mounted() {
    const id = TokenService.getDecoded()._id
    const url = `http://localhost:3000/api/users/${id}`
    const vm = this
    fetch(url, {
      mode: 'cors'
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      vm.username = data.username
      vm.email = data.email
      vm.description = data.description
    })
    .catch(err => console.log(err))
  },
  methods: {
    changePass() {
      this.$router.push({ name: 'change-password' })
    },

    async save() {
      const { username, email, description } = this
      if (this.isValid()) {
        const id = TokenService.getDecoded()._id
        const url = `http://localhost:3000/api/users/${id}`
        const response = await fetch(url, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            email,
            description
          }),
          mode: 'cors'
        })

        if (!response.ok) {
          console.log('Not ok')
        }
        else {
          this.$router.push({ name: 'Account'})
        }
      }
    },
    isValid() {
      let bool = 1
      const invalid = []
      if (this.username == "") {
        invalid.push('Username field is empty.')
        bool = 0
      }
      if (this.email == "") {
        invalid.push('Email field is empty.')
        bool = 0
      }
      else if (!validator.isEmail(this.email)) {
        invalid.push('Please provide a valid email.')
        bool = 0
      }
      this.errors = invalid
      return bool
    }
  }
}
</script>

<style scoped>
.input {
  color: var(--white);
  background-color: var(--form-grey);
  font-size: 1.2em;
  padding: 0.7em;
  border: 0;
  border-radius: 4px;
  width: 100%;
}
.text-area {
  font-size: 1.2em;
  background-color: var(--form-grey);
  color: var(--white);
  font-size: 1.2em;
  border: 0;
  border-radius: 4px;
  height: 200px;
  width: 100%;
}
#img-input {
  display: none;
}
.upload-btn {
  background-color: var(--light-grey);
  font-size: 1em;
  margin: 30px 0;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
}
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
  height: 200vh;
}
.main-box {
  margin-left: 97px;
  margin-right: 97px;
  margin-bottom: 153px;
  margin-top: 46px;
}
.err-msg {
  color: var(--red);
  font-size: 1.4em;
  text-align: center;
}
.title {
  text-align: center;
  vertical-align: text-bottom;
  /* My Profile */
  height: 54px;

  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;

  color: #ffffff;

  margin-top: 20px;
}
h2 {
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

  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;

  color: rgba(255, 255, 255, 0.6);

  margin-top: 20px;
  margin-bottom: 1px;
}
img {
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
  background: var(--light-green);
  border-radius: 4px;

  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  margin-top: 12%;

  color: #ffffff;
  cursor: pointer;

}

#change-password {
  width: 377px;
  height: 92px;

  background: #444444;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  color: #ffffff;
  cursor: pointer;
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
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  color: var(--red);
  cursor: pointer;
}

#delete:hover {
  background-color: var(--red);
  color: var(--white);
  transition: 0.2s;
}
.two-buttons {
  display: flex;
  justify-content: space-between;
}

</style>