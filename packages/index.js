import * as components from './components.js'
const plugin = {
  install: (app, options) => {
    if (typeof app !== 'undefined') {
      for (const name in components) {
        app.component(name, components[name])
      }
      console.log(options)
    }
  }
}

export default plugin
