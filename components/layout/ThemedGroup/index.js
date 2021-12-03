import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ThemedGroupContext from "@/contexts/ThemedGroup";
import { getVariable } from "@/styles/mixins/common";
import * as Styled from "./styles";

function ThemedGroup({
  children,
  bgColor = "white",
  gradient,
  bgImage,
  className,
  ...restProps
}) {
  const baseClassName = `a-bg-${getVariable(
    "containerBackgroundColor",
    bgColor
  )}`;
  return (
    <Styled.Wrapper
      className={classNames({
        [`${baseClassName}${gradient ? "-gradient" : ""}`]: true,
        [className]: !!className,
      })}
      {...restProps}
    >
      {!!bgImage?.length && (
        <Styled.BgImage
          image={bgImage[0]}
          layout="fill"
          objectFit="cover"
          sizes="100vw"
          quality={100}
          placeholder={null}
        />
      )}
      <ThemedGroupContext.Provider value={true}>
        <Styled.Inner>{children}</Styled.Inner>
      </ThemedGroupContext.Provider>
    </Styled.Wrapper>
  );
}

ThemedGroup.displayName = "Layout.ThemedGroup";

ThemedGroup.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.oneOf(["green", "white", "gray"]),
  gradient: PropTypes.bool,
  className: PropTypes.string,
};

export default ThemedGroup;
