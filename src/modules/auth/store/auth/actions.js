// export const myAction = async ({commit}) => {
// }

import authApi from '@/modules/auth/api/authApi'

export const createUser = async ({ commit }, user) => {
  const { name, email, password } = user

  try {
    const { data } = await authApi.post(':signUp', {
      email,
      password,
      returnSecureToken: true,
    })

    const { idToken, refreshToken, localId } = data

    await authApi.post(':update', {
      displayName: name,
      idToken,
      refreshToken,
    })

    user.localId = localId
    delete user.password
    commit('loginUser', { user, idToken, refreshToken })

    return { ok: true }
  } catch (error) {
    return { ok: false, message: error.response.data.error.message }
  }
}

export const signInUser = async ({ commit }, user) => {
  const { email, password } = user

  try {
    const { data } = await authApi.post(':signInWithPassword', {
      email,
      password,
      returnSecureToken: true,
    })

    const { displayName, idToken, refreshToken, localId } = data
    user.name = displayName
    user.localId = localId

    delete user.password
    commit('loginUser', { user, idToken, refreshToken })

    return { ok: true }
  } catch (error) {
    return { ok: false, message: error.response.data.error.message }
  }
}

export const checkAuthentication = async ({ commit }) => {
  const idToken = localStorage.getItem('idToken')
  const refreshToken = localStorage.getItem('idToken')

  if (!idToken) {
    commit('logout')
    return {
      ok: false,
      message: 'No hay token en la peticion',
    }
  }

  try {
    const { data } = await authApi.post(':lookup', { idToken })

    const { displayName: name, email, localId } = data.users[0]
    const user = {
      name,
      email,
      localId,
    }

    commit('loginUser', { user, idToken, refreshToken })

    return { ok: true }
  } catch (error) {
    commit('logout')
    return {
      ok: false,
      message: error.response.data.message,
    }
  }
}
