<template>
  <div class="container">
    <div class="login-container">
      Welcome Back!
      <label>Username</label>
      <input type="text"/>
      <label>Password</label>
      <input type="password"/>
      <button class="login">Login</button>
      Don't have an account? <a href="/register">Create one.</a>
    </div>
    <div class="background">

    </div>
  </div>
</template>

<script>
</script>
<style scoped>
  .container {
    display: flex;
    flex-direction: row;
  } 
  .background {
    flex: 1;
  }
  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }
</style>