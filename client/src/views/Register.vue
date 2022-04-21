<template>
  <div class="container">
    <div class="background">
    
    </div>
    <div class="register-container">
      <h1>Create Account</h1>
        <label class="label">Username</label>
        <input type="text"/>
        <label class="label">Email</label>
        <input type="text"/>
        <label class="label">Password</label>
        <input type="password"/>
        <label class="label">Confirm password</label>
        <input type="password"/>
        <button class="register">Register</button>
        <p class="to-login">Already have an account?<a class="link" href="/login">Sign in.</a></p>
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
    --grey: #222222;
    --white: #FFFFFF;
  } 

  .register {
    background-color: var(--light-green);
    border: 0;
    color: var(--white);
    height: 5vh;
    cursor: pointer;
  }

  .background {
    flex: 1;
    background-color: var(--dark-bg-grey);
  }

  .register-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    background-color: var(--grey);
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
  }
  .label {
    color: var(--white);
  }

  .to-login {
    color: var(--white);
  }

  .to-login .link {
    color: var(--white);
  }

  /* temporary (to be changed)*/
  input {
    background-color: var(--dark-bg-grey);
    border: 0;
    height: 5vh;
    color: var(--white);
  }

  h1 {
    color: var(--white);
    text-align: center;
  }
</style>