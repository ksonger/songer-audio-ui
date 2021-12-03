import * as Icons from "@/svgs/icons"
import defaultProps from "@/svgs/icons/defaultProps"
import svgShape from "@/shapes/svgShape"

const ICON_MAP = {}

export default function IconFactory({ icon, ...props }) {
    const Icon = ICON_MAP[icon]
    return Icon ? <Icon {...defaultProps} {...props} /> : null
}

IconFactory.propTypes = {
    ...svgShape,
}
