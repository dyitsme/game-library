<template>
  <div class="container">
    <div class="background">
    
    </div>
    <div class="register-container">
      <h1>Create Account</h1>
        <div class="input-wrapper">
          <div class="input-group">
            <label class="label">Username</label>
            <input type="text"/>
          </div>
          <div class="input-group">
            <label class="label">Email</label>
            <input type="text"/>
          </div>
          <div class="input-group">
            <label class="label">Password</label>
            <input type="password"/>
          </div>
          <div class="input-group">
            <label class="label">Confirm password</label>
            <input type="password"/>
          </div>
          <button class="register-btn">Register</button>
          <p class="to-login">Already have an account? <a class="link" href="/login">Sign in.</a></p>
        </div>
      </div>
    </div>
</template>

<script>
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
  --light-green: #00DD99;
  --dark-bg-grey: #111111;
  --form-grey: #151515;
  --grey: #222222;
  --white: #FFFFFF;

  font-size: 16px;
} 

.register-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: var(--grey);
  justify-content: center;
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
  position: relative;
  right: 7.5em;
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

h1 {
  color: var(--white);
  text-align: center;
}
</style>