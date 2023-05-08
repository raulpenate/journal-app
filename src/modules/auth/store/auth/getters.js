// export const myGetter =  (state) => {
// return state
// }

export const currentStatus = (state) => {
  return state.status
}

export const username = (state) => {
  return state.user?.name || ''
}

export const getLocalId = (state) => {
  return state.user.localId
}

export const modalStatus = (state) => {
  return state.modalStatus
}
