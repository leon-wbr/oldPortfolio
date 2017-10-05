/* This helps me organize my locale files and separate them into different files.
   I just need to come up with a better file structure. */
const locales = {}
const languages = ['en', 'de', 'fr']
const pages = ['index', 'about-me', 'contact', 'jekyll-sites', 'mockup']

languages.forEach(l => {
  locales[l] = {}

  pages.forEach(p => {
    try {
      locales[l][p] = require(`./pages/${p}.${l}.json`)
    } catch (ex) {
      // File not found -- ignore
    }
  })
})

export default locales
