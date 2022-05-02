

<template>
    <div class="tempBackground">
      <button @click="toggleSortButton">
      <div v-if="isAscending">
        <img src="..\assets\SortButtonAscend.png" alt="Sort Button Ascend">
      </div>
      <div v-else> <img src="..\assets\SortButtonDescend.png" alt="Sort Button Descend"> </div>
      </button>
    </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'

  export default {
    name: 'Home',
    components: {
      'Navbar': Navbar
    },


    data() {
      return {
        isAscending: true
      }
    },

    methods: {
      toggleSortButton() {
        this.isAscending = !this.isAscending
      }
    },

  }

  

</script>

<style scoped>
  .tempBackground {
    background-color: #111111;
    width: 1104px;
    height: 1148px;
  }
  img {
    width: 60px;
    height: 36px;
    


    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  button {
    background: transparent;
    border: transparent;
    
  }
</style>