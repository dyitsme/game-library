<template>
  <Navbar></Navbar>
  <h1>Store</h1>
  <Searchbar></Searchbar>
  <div class="container">
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