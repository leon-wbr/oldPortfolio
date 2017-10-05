function cleanRouteName (str) {
  if (str === 'lang') {
    return 'Index'
  }

  return str
    .replace('lang-', '')
}

function camelize (str) {
  return cleanRouteName(str)
    .replace('-', ' ')
    .replace(/\s(.)/g, function ($1) { return $1.toUpperCase() })
    .replace(/\s/g, '')
    .replace(/^(.)/, function ($1) { return $1.toUpperCase() })
}

// TODO: I need to refactor this function to eliminate duplicate code in the header
export default function ({ app, store, route, params, error, redirect, hotReload }) {
  store.commit('SET_PAGE_CLASSNAME', camelize(route.name))
}
