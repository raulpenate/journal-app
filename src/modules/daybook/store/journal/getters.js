// export const myGetter =  (state) => {
// return state
// }

// Ahora lo convertimos en una function
export const getEntriesByTerm =
  (state) =>
  (term = "") => {
    if (term.length === 0) return state.entries;
    return state.entries.filter((entry) =>
      entry.text.toLowerCase().includes(term.toLocaleLowerCase())
    );
  };

export const getEntryById =
  (state) =>
  (id = "") => {
    const entry = state.entries.find((entry) => entry.id === id);

    if (!entry) return;

    // Si no se esta pasando el valor por referencia
    // y se modificara el estado directamente
    return {
      ...entry,
    };
  };
