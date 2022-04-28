<template>
  <Navbar></Navbar>
  <dir class="container">
    <form class="edit-container">
      <h1>Edit Game</h1>
      <label class="label">Game Poster</label>
      <input class="input" type="file">
      <label class="label">Game Title</label>
      <input class="input" type="text" value="Counter Strike: Global Offensive">
      <label class="label">Genre</label>
      <input class="input" type="text" value="Action">
      <label class="label">Rating</label>
      <input class="input" type="number" value="4" min="1" max="5">
      <label class="label">Description</label>
      <textarea class="text-area">
        Counter Strike: Global Offensive is a tactical FPS game created by Valve
      </textarea>
      <a class="back-btn" href="/">Back</a>
      <button class="edit-btn">Edit</button>
    </form>
  </dir>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'UpdateGame1',
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
  background-color: var(--dark-bg-grey);
  font-size: 16px;
}
</style>

<style scoped>
.edit-container {
  display: grid;
  /* grid-template-areas:  */
  background-color: var(--grey);
}

h1 {
  color: var(--white);
  text-align: center;
}

.label {
  color: var(--white);
  font-size: 1.2em;
}

.input {
  background-color: var(--form-grey);
  color: var(--white);
  font-size: 1.2em;
  padding: 0.7em;
  border: 0;
  border-radius: 4px;
}

.text-area {
  font-size: 1.2em;
  background-color: var(--form-grey);
  color: var(--white);
  font-size: 1.2em;
  border: 0;
  border-radius: 4px;
}

.edit-btn {
  background-color: var(--light-green);
  color: var(--white);
  border: 0;
  cursor: pointer;
  padding: 1em;
  font-size: 1em;
}

.back-btn {
  background-color: var(--light-grey);
  color: var(--white);
  text-decoration: none;
  padding: 1em;
  text-align: center;
}

</style>