import PropTypes from "prop-types";
import IconFactory from "@/factories/IconFactory";
import * as Styled from "./styles";

const Button = ({
  icon,
  iconAlign = "right",
  block,
  children,
  onClick,
  style = {},
  iconProps,
  ...props
}) => {
  return (
    <Styled.BaseButton
      block={block ? "true" : undefined}
      onClick={onClick}
      style={style}
      {...props}
    >
      <Styled.ButtonContent>
        {children && <span>{children}</span>}
        {icon && (
          <span
            className="icon"
            style={{
              float: iconAlign,
              transform: "translateY(1px)",
              paddingLeft: children ? "0.7em" : "",
            }}
          >
            <IconFactory {...iconProps} icon={icon} />
          </span>
        )}
      </Styled.ButtonContent>
    </Styled.BaseButton>
  );
};

Button.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.array,
  ]),
  icon: PropTypes.string,
  iconAlign: PropTypes.string,
  iconProps: PropTypes.object,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
