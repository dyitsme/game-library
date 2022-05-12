<template>
  <div class="container">
    <div class="login-container">
      <h1>Welcome Back!</h1>
        <div class="input-wrapper">
          <div class="err-msg" v-if="error">{{ error }}</div>
          <div class="input-group">
            <label class="label">Username</label>
            <input type="text" v-model="username">
          </div>
          <div class="input-group">
            <label class="label">Password</label>
            <input type="password" v-model="password">
          </div>
          <button class="login-btn" @click="login()">Login</button>
          <p class="to-register">Already have an account? <a class="link" href="/register">Sign up.</a></p>
        </div>
      </div>
      <div class="background">
      
      </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },

  methods: {
    async login() {
      const vm = this
      const { username, password } = vm
      
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password,
        }),
        mode: 'cors'
      })

      if (!response.ok) {
        vm.error = await response.text()
      }
    }
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

.login-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: var(--grey);
  justify-content: center;
}

.login-btn {
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

.to-register {
  color: var(--white);
}

.to-register .link {
  color: var(--white);
}

.err-msg {
  color: var(--red);
  font-size: 1.2em;
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

h1 {
  color: var(--white);
  text-align: center;
}
</style>