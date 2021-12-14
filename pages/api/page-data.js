import {GLOBAL_DATA} from "@/constants/globalData"

const getPageData = (page) => {
  return GLOBAL_DATA.navItems.filter((item) => {
    return page === item.label.toLowerCase();
  })
}

export default function handler(req, res) {
  res.status(200).json(getPageData("home"))
}
