import { defineStore } from 'pinia'

export const authStore = defineStore({
  state: () => ({
    successMsg: '',
    errorMsg: ''
  }),
  getters: {
    getSuccessMsg: (state) => state.successMsg,
    getErrorMsg: (state) => state.errorMsg
  },
  actions: {
    modSuccessMsg(successMsg) {
      this.successMsg = successMsg
    },
    modErrorMsg(errorMsg) {
      this.errorMsg = errorMsg
    }
  }
  
})