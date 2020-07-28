import './styles/main.css'
import './styles/css_variables.css'
import * as components from './components/index.js'
import directive from './directive/index.js'
const plugin = {
  install: (app, options) => {
    if (typeof app !== 'undefined') {
      for (const name in directive) {
        app.directive(name, directive[name])
      }
      for (const key in components) {
        app.component(components[key].name, components[key])
      }
      console.log('插件选项', options)
    }
  }
}

export default plugin
