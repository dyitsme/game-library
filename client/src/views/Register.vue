<template>
  <div class="container">
    <div class="background">
    
    </div>
    <div class="register-container">
      <h1 class="header">Create Account</h1>
        <form class="input-wrapper">
          <div class="err-msg" v-for="error in errors" :key="error.id">
            {{ error }}
          </div>
          <div class="input-group">
            <label class="label">Username</label>
            <input type="text" v-model="username"/>
          </div>
          <div class="input-group">
            <label class="label">Email</label>
            <input type="text" v-model="email"/>
          </div>
          <div class="input-group">
            <label class="label">Password</label>
            <input type="password" v-model="password"/>
          </div>
          <div class="input-group">
            <label class="label">Confirm password</label>
            <input type="password" v-model="confirmPassword"/>
          </div>
          <button class="register-btn" @click.prevent="register()">Register</button>
          <p class="to-login">Already have an account? <a class="link" href="/login">Sign in.</a></p>
        </form>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
import { authStore } from '../stores/auth'

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: []
    }
  },

  methods: {
    async register() {
      const vm = this
      const { username, email, password, confirmPassword } = vm
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword
        }),
        mode: 'cors'
      })

      if (!response.ok) {
        const parsed = JSON.parse(await response.text())
        vm.errors = parsed
      }
      else {
        this.modSuccessMsg(await response.text())
        this.$router.push({ name: 'Login'})
      }
    },
    ...mapActions(authStore, ['modSuccessMsg']),
    ...mapActions(authStore, ['modErrorMsg']),
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  height: 100vh;

  font-size: 16px;
} 

.register-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: var(--grey);
  justify-content: center;
}

.err-msg {
  color: var(--red);
  font-size: 1.2em;
}
.register-btn {
  background-color: var(--light-green);
  border: 0;
  color: var(--white);
  height: 6vh;
  cursor: pointer;
  width: 70%;
  font-size: 1.5em;
  border-radius: 4px;
}

.background {
  flex: 1;
  background-color: var(--dark-bg-grey);
}


.input-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80%;
}

.input-group {
  display: flex;
  flex-direction: column;
  width: 70%;
}

.label {
  color: var(--white);
  font-size: 1.2em;
}

.to-login {
  color: var(--white);
}

.to-login .link {
  color: var(--white);
}

/* temporary (to be changed)*/
input {
  background-color: var(--form-grey);
  border: 0;
  height: 6vh;
  color: var(--white);
  margin: 10px 0 10px 0; 
  font-size: 1.1em;
  border-radius: 4px;
}

.header {
  color: var(--white);
  text-align: center;
  font-size: 2em;
}
</style>