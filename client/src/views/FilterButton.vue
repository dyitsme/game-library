

<template>
  <div class="tempBackground">
    <div class="flex-1">
      <select class="input">
        <option selected>Genre</option>
        <option>Action</option>
        <option>Action-adventure</option>
        <option>Adventure</option>
        <option>Puzzle</option>
        <option>Role-playing</option>
        <option>Simulation</option>
        <option>Strategy</option>
        <option>Sports</option>
        <option>MMO</option>
        <option>Other</option>
      </select>
    </div>
    
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'

  export default {
    name: 'Home',
    components: {
      'Navbar': Navbar
    },
  }

  

</script>

<style scoped>
  .tempBackground {
    background-color: #222222;
    width: 1104px;
    height: 1148px;
  }
  .input {
  background-color: #151515;
  color: #FFFFFF;
  font-size: 1.2em;
  padding: 0.7em;
  border: 0;
  border-radius: 4px;

  
}
  .flex-1{
    height: 36;
  }
</style>