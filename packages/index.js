import './theme/css_variables.css'
import * as components from './components.js'
const plugin = {
  install: (app, options) => {
    if (typeof app !== 'undefined') {
      for (const key in components) {
        app.component(components[key].name, components[key])
      }
      console.log('插件选项', options)
    }
  }
}

export default plugin
