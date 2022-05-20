<template>
  <input class="search-input" type="text">
  <button class="search-btn">
  <img class="icon" src="../assets/svg/search_icon.svg">
  </button>
</template>

<script>

export default {
  name: 'Searchbar'
}

</script>

<style scoped>

.search-input {
  background-color: var(--semi-light-grey);
  color: var(--white);
  border: none;
  font-size: 1.6em;
  border-radius: 4px;
}

.search-btn {
  background-color: var(--light-green);
  color: var(--white);
  border: none;
  cursor: pointer;
  padding: 5px 20px;
  border-radius: 4px;
}

.icon {
  height: 1.4em;
  width: 1.4em;
}
</style>
