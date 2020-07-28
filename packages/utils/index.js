export const HAS_WINDOWS = typeof window !== 'undefined'
export const HAS_NAVIGATOR = typeof navigator !== 'undefined'
export const IS_TOUCH =
  HAS_WINDOWS &&
  ('ontouchstart' in window ||
    (HAS_NAVIGATOR && navigator.msMaxTouchPoints > 0))
