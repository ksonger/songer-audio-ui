import React from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";
import TopLevelLink from "./TopLevelLink";
import * as Styled from "./styles";

const NavList = ({
  activeHref,
  className,
  onClick,
  footer,
  mobile,
  navItems,
  ...listProps
}) => {
  const context = {
    footer,
    mobile,
    activeHref,
  };

  return (
    <Styled.Nav
      className={className}
      footer={footer}
      mobile={mobile}
      {...listProps}
      onClick={() => onClick()}
    >
      {navItems.map((item, i) => (
        <Fragment key={i}>
          <TopLevelLink context={context} {...item} />
        </Fragment>
      ))}
    </Styled.Nav>
  );
};

NavList.displayName = "Global.NavList";

NavList.propTypes = {
  activeHref: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  footer: PropTypes.bool,
  mobile: PropTypes.bool,
  navItems: PropTypes.array,
};

export default NavList;
