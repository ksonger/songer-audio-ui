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
        {children && <Styled.ButtonLabel>{children}</Styled.ButtonLabel>}
        {icon && (
          <Styled.ButtonIcon $iconAlign={iconAlign} className="icon">
            <IconFactory {...iconProps} icon={icon} />
          </Styled.ButtonIcon>
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
