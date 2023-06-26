export const getters = {
    isAuthenticated(state) {
      console.log(state);
      return state.auth.loggedIn
    },
    loggedInUser(state) {
        return state.auth.user
    }
}
