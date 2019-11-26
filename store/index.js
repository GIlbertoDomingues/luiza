export const state = () => ({
  isLoading: false,
  language: false,
  phone: '5541991617090',
  locales: ['en', 'pt-br'],
  locale: 'pt-br'
})

export const mutations = {
  'TOGGLE_LOADING' (state, payload = false) {
    state.isLoading = !!payload
  },
  'TOGGLE_LANGUAGE' (state, payload) {
    state.language = payload
  },

  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

export const actions = {
  toggleLoading ({ commit }, isLoading = false) {
    commit('TOGGLE_LOADING', isLoading)
  },
  changeLanguage ({ commit }, field) {
    commit('TOGGLE_LANGUAGE', field)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
