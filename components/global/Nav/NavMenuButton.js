import React from "react";
import PropTypes from "prop-types";
import IconFactory from "@/factories/IconFactory";

const NavMenuButton = ({ open, ...buttonProps }) => {
  return (
    <button {...buttonProps}>
      <span className="a-hidden">{open} navigation</span>
      {open ? (
        <IconFactory
          className="closeMenu"
          width={24}
          height={24}
          color="#fff"
          icon="close"
        />
      ) : (
        <IconFactory color="#fff" icon="hamburger" />
      )}
    </button>
  );
};

NavMenuButton.displayName = "Global.NavMenuButton";

NavMenuButton.propTypes = {
  open: PropTypes.bool,
};

export default NavMenuButton;
