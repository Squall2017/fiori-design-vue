<template>
  <button ref="root" class="fi-button fi-button-default">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  name: 'FiButton',
  props: {},
  setup() {
    // function handleClick() {
    //   console.log('click')
    // }
    const root = ref(null)
    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      console.log(555, root.value) // <div>This is a root element</div>
      const el = root.value
      const HAS_WINDOWS = typeof window !== 'undefined'
      const HAS_NAVIGATOR = typeof navigator !== 'undefined'

      const HANDLERS_PROPERTY = '__v-click-outside'
      const IS_TOUCH =
        HAS_WINDOWS &&
        ('ontouchstart' in window ||
          (HAS_NAVIGATOR && navigator.msMaxTouchPoints > 0))
      const EVENTS = IS_TOUCH ? ['touchstart'] : ['click']
      function processDirectiveArguments(bindingValue) {
        const isFunction = typeof bindingValue === 'function'
        if (!isFunction && typeof bindingValue !== 'object') {
          throw new Error(
            'v-click-outside: Binding value must be a function or an object'
          )
        }

        return {
          handler: isFunction ? bindingValue : bindingValue.handler,
          middleware: bindingValue.middleware || (item => item),
          events: bindingValue.events || EVENTS,
          isActive: !(bindingValue.isActive === false)
        }
      }

      function onEvent({ el, event, handler, middleware }) {
        // Note: composedPath is not supported on IE and Edge, more information here:
        //       https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath
        //       In the meanwhile, we are using el.contains for those browsers, not
        //       the ideal solution, but using IE or EDGE is not ideal either.
        const path = event.path || (event.composedPath && event.composedPath())
        const isClickOutside = path
          ? path.indexOf(el) < 0
          : !el.contains(event.target)

        if (!isClickOutside) {
          return
        }
        if (middleware(event)) {
          handler(event)
        }
      }

      function handleOutsideClick() {
        console.log('outside')
        // const path = event.path || (event.composedPath && event.composedPath())
        // const isClickOutside = path
        //   ? path.indexOf(el) < 0
        //   : !el.contains(event.target)
      }
      const {
        events,
        handler,
        middleware,
        isActive
      } = processDirectiveArguments(handleOutsideClick)
      if (!isActive) {
        return
      }

      el[HANDLERS_PROPERTY] = events.map(eventName => ({
        event: eventName,
        handler: event => onEvent({ event, el, handler, middleware })
      }))

      el[HANDLERS_PROPERTY].forEach(({ event, handler }) =>
        setTimeout(() => {
          // Note: More info about this implementation can be found here:
          //       https://github.com/ndelvalle/v-click-outside/issues/137
          if (!el[HANDLERS_PROPERTY]) {
            return
          }
          document.documentElement.addEventListener(event, handler, false)
        }, 0)
      )
      // console.log('events', events)
      // console.log('handler', handler)
      // console.log('middleware', middleware)
      // console.log('isActive', isActive)
      // console.log('handleClick', handleOutsideClick)
    })

    return {
      // handleClick
      root
    }
  }
}
</script>
