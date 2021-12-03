import { createContext } from "react"
import PropTypes from "prop-types"

const GlobalDataContext = createContext(null)

function GlobalDataProvider({ data, children }) {
  return (
    <GlobalDataContext.Provider value={data}>
      {children}
    </GlobalDataContext.Provider>
  )
}

GlobalDataProvider.displayName = "GlobalData.Provider"

GlobalDataProvider.propTypes = {
  children: PropTypes.node,
  data: PropTypes.any,
}

export default GlobalDataContext

export { GlobalDataProvider }
