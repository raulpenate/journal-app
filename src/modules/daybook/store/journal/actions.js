// export const myAction = async ({commit}) => {
// }

import journalApi from '../../api/journalApi'

export const loadEntries = async ({ commit }, localId) => {
  const { data } = await journalApi.get(`/entry-${localId}.json`)

  if (!data) {
    commit('setEntries', [])
    return
  }

  const entries = []
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    })
  }

  commit('setEntries', entries)
}

export const updateEntry = async ({ commit }, entry) => {
  const { id, date, text, picture, localId } = entry
  await journalApi.put(`/entry-${localId}/${id}.json`, { text, date, picture })
  // Usando el then se miraria asi:
  // .then(({ data }) => {
  //   commit("updateEntries", ...data);
  // })
  commit('updateEntry', { ...entry })
}

export const createEntry = async ({ commit }, entry) => {
  const { date, text, picture, localId } = entry
  const { data } = await journalApi.post(`/entry-${localId}.json`, {
    text,
    date,
    picture,
  })
  const newEntry = { id: data.name, text, picture, date }
  commit('addEntry', newEntry)
  return newEntry.id
}

export const deleteEntry = async ({ commit }, ids) => {
  const { id, localId } = ids
  await journalApi.delete(`/entry-${localId}/${id}.json`)
  commit('deleteEntry', id)

  return id
}
