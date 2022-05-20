<template>
  <div class="nav-container">
    <ul class="nav-group">
      <li class="nav-links" id="logo"><a href="/"><img src="../assets/lib_logo.svg" height="50px" width="50px"></a></li>
      <li class="nav-links"><a href="/create">Create Game</a></li>
      <li class="nav-links"><a href="/store">Store</a></li>
      <li class="nav-links"><a href="/library">Library</a></li>
      <li class="nav-links"><a href="/account">Profile</a></li>
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

a {
  font-size: 1.0em;
}
</style>