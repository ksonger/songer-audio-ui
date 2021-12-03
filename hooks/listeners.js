import { useEffect } from "react"
import { BREAKPOINTS, stripUnit } from "@/styles/mixins"

export const useEventListener = (event, callback) => {
  useEffect(() => {
    window.addEventListener(event, callback)
    callback()
    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}

export const useKeyDownEvent = (callback) => {
  useEventListener("keydown", callback)
}

export const useClickEvent = (callback) => {
  useEventListener("click", callback)
}

// Hook
export const useOnClickOutside = (ref, handler) => {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref?.current?.contains(event.target)) {
          return
        }

        handler(event)
      }

      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)

      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
}

/**
 * Subscribes a component to form factor changes at a provided breakpoint,
 * and executes a callback for that component on window resize events
 * @param {number} 30, 50, 60, 80, 100, 120, 130
 * @param {function} cb callback to execute on resize events
 * @returns {function(): void} Returns a method to unsubscribe
 */
export const useOnResize = (bp, cb) => {
  useEffect(() => {
    const subscribed = {}
    subscribed[bp] = subscribed[bp] || []
    subscribed[bp].push(cb)
    const onResize = () => {
      Object.keys(subscribed).forEach((key) => {
        subscribed[key].forEach((fn) => {
          fn(window.innerWidth <= stripUnit(BREAKPOINTS[key]))
        })
      })
    }
    window.addEventListener("resize", onResize)
    onResize()
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [bp, cb])
}
