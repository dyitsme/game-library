<template>
  <Navbar></Navbar>
  <div class="parent-container">
    <dir class="container">
      <a class="back" href="/store">Back</a>
      <h1>Edit Game</h1>
      <form class="edit-form">
        <label id="img-label">
          <img  class="icon" src="../assets/svg/upload_img.svg">
          <div class="upload-btn">Upload Game Poster</div>
          <br>
          <input id="img-input" type="file" accept="image/*">
        </label>
        <div class="text-grp">
          <label class="label">Game title</label>
          <input class="input" type="text" value="Elden Ring">
          <label class="label">Genre</label>
          <select class="input">
            <option>Action</option>
            <option>Action-adventure</option>
            <option>Adventure</option>
            <option>Puzzle</option>
            <option selected>Role-playing</option>
            <option>Simulation</option>
            <option>Strategy</option>
            <option>Sports</option>
            <option>MMO</option>
            <option>Other</option>
          </select>
          <label class="label">Rating</label>
          <input class="input" type="number" value="5" min="1" max="5">
          <label class="label">Description</label>
          <textarea class="text-area">
Elden Ring is a game similar to Dark Souls.
          </textarea>
          <label class="label">Store link</label>
          <input class="input" type="text" value="https://store.steampowered.com/app/1245620/ELDEN_RING/">
        </div>
        <button class="edit-btn">Edit</button>
      </form>
    </dir>
  </div>
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

.parent-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px 0px;
}

.container {
  background-color: var(--grey);
  width: 1200px;
  padding: 50px;
  border-top: 20px;
  border-color: var(--light-green);
  border-top-style: solid;
  border-radius: 8px;
}

.back {
  text-decoration: none;
  color: var(--white);
}

.edit-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 30px;
}

h1 {
  color: var(--white);
  text-align: center;
  margin-bottom: 20px;
}

.label {
  color: var(--white);
  font-size: 1.2em;
}

#img-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px var(--light-green) dashed;
  text-align: center;
  cursor: pointer;
  color: var(--white);
}

.icon {
  height: 100px;
  width: 100px;
  margin: 30px 0;
}

.upload-btn {
  background-color: var(--light-green);
  font-size: 1em;
  margin: 30px 0;
  padding: 20px;
  border-radius: 4px;
}
.text-grp {
  display: grid;
  grid-template-columns: 300px 500px;
  grid-gap: 20px;
}

.input {
  background-color: var(--form-grey);
  color: var(--white);
  font-size: 1.2em;
  padding: 0.7em;
  border: 0;
  border-radius: 4px;
}

#img-input {
  border: 2px var(--light-green) dashed;
  display: none;
}

.text-area {
  font-size: 1.2em;
  background-color: var(--form-grey);
  color: var(--white);
  font-size: 1.2em;
  border: 0;
  border-radius: 4px;
  height: 200px;
}

.edit-btn {
  background-color: var(--light-green);
  color: var(--white);
  border: 0;
  cursor: pointer;
  padding: 1em;
  font-size: 1.2em;
  border-radius: 4px;
  font-weight: bold;
}

</style>