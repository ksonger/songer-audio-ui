import NavList from "./NavList"
import { GLOBAL_DATA } from "@/constants/globalData"

export default {
  title: "global/Nav/NavList",
  component: NavList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
}

const navItems = GLOBAL_DATA.navItems

const Template = (args) => <NavList {...args} />

export const Standard = Template.bind({})
Standard.args = { navItems: navItems }

export const Compact = Template.bind({})
Compact.args = {
  navItems: navItems,
  activeHref: "/surveys",
}

export const Footer = Template.bind({})
Footer.args = {
  navItems: navItems,
  footer: true,
}

export const Mobile = Template.bind({})
Mobile.args = {
  navItems: navItems,
  mobile: true,
}

export const MobileFooter = Template.bind({})
MobileFooter.args = {
  navItems: navItems,
  mobile: true,
  footer: true,
}
