import * as Icons from "@/svgs/icons";
import defaultProps from "@/svgs/icons/defaultProps";
import svgShape from "@/shapes/svgShape";

const ICON_MAP = {
  saLogo: Icons.SALogo,
  caretDown: Icons.CaretDown,
  caretLeft: Icons.CaretLeft,
  caretRight: Icons.CaretRight,
  checkbox: Icons.Checkbox,
  closeMenu: Icons.CloseMenu,
  close: Icons.Close,
  closeFill: Icons.CloseFill,
  geoMarker: Icons.GeoMarker,
  hamburger: Icons.Hamburger,
  play: Icons.Play,
  plusFill: Icons.PlusFill,
  quote: Icons.Quote,
  search: Icons.Search,
  facebook: Icons.Facebook,
  twitter: Icons.Twitter,
  instagram: Icons.Instagram,
  linkedin: Icons.LinkedIn,
  youtube: Icons.YouTube,
  loader: Icons.Loader,
};

export default function IconFactory({ icon, ...props }) {
  const Icon = ICON_MAP[icon];
  if (!Icon) {
    return null;
  }
  return Icon && <Icon {...defaultProps} {...props} />;
}

IconFactory.propTypes = {
  ...svgShape,
};
