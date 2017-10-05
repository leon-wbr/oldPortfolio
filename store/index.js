export const state = () => ({
  locales: ['en', 'de', 'fr'],
  pageTitle: 'Leon Weber',
  pageSubtitle: 'i do what i can.',
  pageClassName: null
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_PAGE_TITLE (state, title) {
    state.pageTitle = title
  },
  SET_PAGE_SUBTITLE (state, subtitle) {
    state.pageSubtitle = subtitle
  },
  SET_PAGE_CLASSNAME (state, className) {
    state.pageClassName = className
  }
}
