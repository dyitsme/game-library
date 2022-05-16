<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="library-container">
        this is the library
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Library',
  components: {
    'Navbar': Navbar
  }
}
</script>