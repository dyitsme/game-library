<template>
  <Navbar></Navbar>
  <div class="parent-container">
    <div class="container">
      <div class="text-wrapper">
        <h1 class="header">Are you sure?</h1>
        <p class="text">This will delete Counter Strike: Global Offensive from the store and other users' libraries.</p>
      </div>
      <div class="btn-wrapper">
        <button class="cancel-btn" @click="$router.push({ name: 'view-game-developer'})">Cancel</button>
        <button class="delete-btn">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'DeleteGame1',
  components: {
    'Navbar': Navbar
  }
}
</script>

<style> 
body {
  --light-green: #00DD99;
  --dark-bg-grey: #111111;
  --form-grey: #151515;
  --grey: #222222;
  --light-grey: #444444;
  --white: #FFFFFF;
  --red: #F53649;
  background-color: var(--dark-bg-grey);
  font-size: 16px;
}
</style>

<style scoped>
.parent-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px 0px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--grey);
  width: 1000px;
  height: 500px;
  padding: 50px;
  border-top: 20px;
  border-color: var(--red);
  border-top-style: solid;
  border-radius: 8px;
}

.header {
  color: var(--white);
  text-align: center;
  font-size: 2.4em;
}

.text {
  color: var(--white);
  font-size: 1.8em;
  margin: 60px 0px;
}

.btn-wrapper {
  display: flex;
  justify-content: space-between;
}
.cancel-btn {
  background-color: var(--light-grey);
  color: var(--white);
  border: none;
  font-size: 1.4em;
  width: 300px;
  height: 70px;
  border-radius: 4px;
  cursor: pointer;
}

.delete-btn {
  background-color: var(--red);
  color: var(--white);
  border: none;
  font-size: 1.4em;
  width: 300px;
  height: 70px;
  border-radius: 4px;
  cursor: pointer;
}

</style>