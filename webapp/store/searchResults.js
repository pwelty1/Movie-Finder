export const state = () => ({
    list: []
  })
  
  export const mutations = {
    set(state, results) {
      state.list = results
    },
  }