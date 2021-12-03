import { useContext } from "react"
import PageDataContext from "@/contexts/PageData"

export default function usePageContext() {
  return useContext(PageDataContext)
}
