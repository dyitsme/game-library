<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="store-container">

    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Store',
  components: {
    'Navbar': Navbar
  }
}
</script>