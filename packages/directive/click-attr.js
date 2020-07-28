import { HAS_WINDOWS } from '../utils/index.js'
import clickOutside from './click-outside.js'
const HANDLERS_PROPERTY = '__v-focused'

function onClickOutside({ el }) {
  return () => {
    el.removeAttribute('focused')
  }
}

function onMousedown({ el }) {
  return () => {
    el.setAttribute('focused', '')
    el.setAttribute('active', '')
  }
}

function onMouseup({ el }) {
  return () => {
    el.removeAttribute('active')
  }
}

function beforeMount(el) {
  clickOutside.beforeMount(el, { value: onClickOutside({ el }) })

  el[HANDLERS_PROPERTY] = [
    {
      event: 'mousedown',
      handler: onMousedown({ el })
    },
    {
      event: 'mouseup',
      handler: onMouseup({ el })
    }
  ]
  el[HANDLERS_PROPERTY].forEach(({ event, handler }) =>
    setTimeout(() => {
      if (!el[HANDLERS_PROPERTY]) {
        return
      }
      el.addEventListener(event, handler, false)
    }, 0)
  )
}

function unmounted(el) {
  clickOutside.unmounted(el)
  const handlers = el[HANDLERS_PROPERTY] || []
  handlers.forEach(({ event, handler }) =>
    el.removeEventListener(event, handler, false)
  )
  delete el[HANDLERS_PROPERTY]
}

const directive = {
  beforeMount,
  unmounted
}

export default HAS_WINDOWS ? directive : {}
