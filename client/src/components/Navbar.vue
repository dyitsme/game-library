<template>
  <div class="nav-container">
    <ul class="nav-group">
      <li class="nav-links" id="logo"><a href="/"><img src="../assets/lib_logo.svg" height="50px" width="50px"></a></li>
      <li class="nav-links"><a href="/create">Create Game</a></li>
      <li class="nav-links"><a href="/store">Store</a></li>
      <li class="nav-links"><a href="/library">Library</a></li>
      <li class="nav-links"><a href="/account">Profile</a></li>
      <li class="nav-links"><a href="/about">About</a></li>
      <li v-if="!loggedIn" class="nav-links"><a href="/login">Login</a></li>
      <li v-if="loggedIn" class="nav-links"><button class="logout-btn" @click="logout()">Logout</button></li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useAuthStore } from '../stores/authStore'

export default {
  name: 'Navbar',
  computed: {
    ...mapState(useAuthStore, ['loggedIn'])
  },
  mounted() {
    this.checkLoggedIn()
  },
  methods: {
    logout() {
      this.logoutUser()
      this.$router.push({ name: 'Login' })
    },
    ...mapActions(useAuthStore, ['checkLoggedIn']),
    ...mapActions(useAuthStore, ['logoutUser'])
  }
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

.logout-btn {
  background-color: transparent;
  color: var(--white);
  border: none;
  font-size: 1.0em;
  cursor: pointer;
}
</style>