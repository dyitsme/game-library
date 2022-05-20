<template>
  <div class="nav-container">
    <ul class="nav-group">
      <li class="nav-links" id="logo">Logo</li>
      <li class="nav-links">Create Game</li>
      <li class="nav-links">Store</li>
      <li class="nav-links">Library</li>
      <li class="nav-links"><router-link :to="{ name: 'account' }">Profile</router-link></li>
      <li class="nav-links"><a href="/about">About</a></li>
      <li class="nav-links"><a href="/login">Login</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Navbar'
}

</script>
<style scoped>

.nav-container {
  --light-green: #00DD99;
  --dark-bg-grey: #111111;
  --form-grey: #151515;
  --grey: #222222;
  --white: #FFFFFF;

  font-size: 16px;
} 

.nav-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--grey);
  list-style-type: none;
  height: 10vh;
}

.nav-links {
  color: var(--white);
  font-size: 1.2em;
  padding: 0px 20px;
}

.nav-links a {
  color: var(--white);
  text-decoration: none;
}

#logo {
  flex: 1;
}
</style>