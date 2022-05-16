<template>
  <Navbar></Navbar>
  <div class="container">
    <h1>Store</h1>
    <Searchbar></Searchbar>
    test
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Searchbar from '../components/Searchbar.vue'

export default {
  name: 'Store',
  components: {
    'Navbar': Navbar,
    'Searchbar': Searchbar
  }
}
</script>

<style>
  body {
    background-color: black;
  }
  .container {
    margin: 50px 100px 50px 100px; /* top | right | bottom | left */
  }
</style>