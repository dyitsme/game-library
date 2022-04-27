<template>
  <Navbar></Navbar>
  <dir class="container">
    <div class="edit-container">
      <h1>Edit Game</h1>
      <label>Poster</label>
      <input type="file">
      <label>Game Title</label>
      <input type="text" value="Counter Strike: Global Offensive">
      <label>Genre</label>
      <input type="text" value="Action">
      <label>Rating</label>
      <input type="number" value="4" min="1" max="5">
      <label>Description</label>
      <textarea>
        Counter Strike: Global Offensive is a tactical FPS game created by Valve
      </textarea>
      <a href="/">Back</a>
      <button>Edit</button>
    </div>
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

<style scoped>

</style>