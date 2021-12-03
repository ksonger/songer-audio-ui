import { createContext } from "react"
import PropTypes from "prop-types"

const PageDataContext = createContext(null)

function PageDataProvider({ data, children }) {
  return (
    <PageDataContext.Provider value={data}>{children}</PageDataContext.Provider>
  )
}

PageDataProvider.displayName = "PageData.Provider"

PageDataProvider.propTypes = {
  children: PropTypes.node,
  data: PropTypes.any,
}

export default PageDataContext

export { PageDataProvider }
