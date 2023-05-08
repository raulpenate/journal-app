// export const myMutation = (state) => {

// }

export const loginUser = (state, { user, idToken, refreshToken }) => {
  if (idToken) {
    localStorage.setItem('idToken', idToken)
    state.idToken = idToken
  }

  if (refreshToken) {
    localStorage.setItem('refreshToken', refreshToken)
    state.refreshToken = refreshToken
  }

  state.user = user
  state.status = 'authenticated'
}

export const logout = (state) => {
  state.user = null
  state.idToken = null
  state.refreshToken = null
  state.status = 'non-authenticated'

  localStorage.removeItem('idToken')
  localStorage.removeItem('refreshToken')
}

export const changeModalStatus = (state) => {
  state.modalStatus = !state.modalStatus
}
