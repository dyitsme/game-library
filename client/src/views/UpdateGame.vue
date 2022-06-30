<template>
  <Navbar></Navbar>
  <div class="parent-container">
    <dir class="container">
      <router-link class="back" :to="{ name: 'ViewGameDeveloper' }">Back</router-link>
      <h1>Edit Game</h1>
      <form class="edit-form">
        <div class="err-msg" v-for="error in errors" :key="error.id">
          {{ error }}
        </div>
        <label id="img-label">
          <img  class="icon" src="../assets/svg/upload_img.svg" @change="uploadImage">
          <div class="upload-btn">Upload Game Poster</div>
          <br>
          <input id="img-input" type="file" accept="image/*">
        </label>
        <div class="text-grp">
          <label class="label">Game title</label>
          <input class="input" type="text" v-model="title">
          <label class="label">Genre</label>
          <select class="input" v-model="genre">
            <option selected>Action</option>
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
          <label class="label">Rating</label>
          <input class="input" type="number" v-model="rating" min="1" max="5">
          <label class="label">Description</label>
          <textarea class="text-area" v-model="description">
          </textarea>
          <label class="label">Store link</label>
          <input class="input" type="text" v-model="storeurl">
        </div>
        <button class="edit-btn">Edit</button>
      </form>
    </dir>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'UpdateGame',
  components: {
    'Navbar': Navbar
  },
  data() {
    return {
      title: '',
      genre: '',
      rating: '',
      description: '',
      storeurl: '',
      image: '',
      errors: ''
    }
  },
  mounted() {
    const id = '62bd5ab5d3484238fa9dcaec'
    const url = `http://localhost:3000/api/games/${id}`
    const vm = this
    fetch(url, {
      mode: 'cors'
    })
    .then(res => {
      return res.json()
    })
    .then(data => { 
      vm.title = data.title
      vm.genre = data.genre
      vm.rating = data.rating
      vm.description = data.description
      vm.storeurl = data.storeurl
      vm.image = data.image
    })
    .catch(err => console.log(err))
  },
  methods: {
    changePass() {
      this.$router.push({ name: 'change-password' })
    },

    onFileSelected(event) {
      this.selectedImage = event.target.files[0]
      const reader = new FileReader()

      reader.onload = (event) => {
        this.imagePreview = event.target.result
      }
      reader.readAsDataURL(event.target.files[0])
    },
    async save() {
      const token = TokenService.getLocalAccessToken()
      const formData = new FormData()
      formData.append('username', this.username)
      formData.append('email', this.email)
      formData.append('description', this.description)
      formData.append('image', this.selectedImage)

      if (this.isValid()) {
        const id = TokenService.getDecoded()._id
        const url = `http://localhost:3000/api/users/${id}`
        const response = await fetch(url, {
          headers: {
            Authorization: `token ${token}` 
          },
          method: 'PATCH',
          body: formData,
          mode: 'cors'
        })

        if (!response.ok) {
          console.log('Something went wrong')
        }
        else {
          this.$router.push({ name: 'Account'})
        }
      }
    },
    isValid() {
      let bool = 1
      const invalid = []
      if (this.username == "") {
        invalid.push('Username field is empty.')
        bool = 0
      }
      if (this.email == "") {
        invalid.push('Email field is empty.')
        bool = 0
      }
      else if (!validator.isEmail(this.email)) {
        invalid.push('Please provide a valid email.')
        bool = 0
      }
      this.errors = invalid
      return bool
    }
  }
}
</script>

<style scoped> 
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