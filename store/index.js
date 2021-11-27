export const state = () => ({
  response: null
})

export const mutations = {
  SAVE_RESPONSE(state, { response }) {
    state.response = response
  }
}
