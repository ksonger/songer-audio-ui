import React from "react";
import PropTypes from "prop-types";
import IconFactory from "@/factories/IconFactory";
import styled, { css } from "styled-components";
import { respond } from "@/styles/mixins";

const Item = ({ className, label, url }) => {
  if (!label || !url) return null;
  return (
    <li className={`${className}__item`}>
      <a href={url} target="_blank" rel="noreferrer">
        <IconFactory
          color="var(--footer-social-color)"
          icon={label.toLowerCase()}
          className={`${className}__icon`}
        />
      </a>
    </li>
  );
};

Item.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const Social = ({ socialInfo, className }) => {
  return (
    <div className={className}>
      <div className={`${className}__inner`}>
        <ul className={`${className}__list`}>
          {socialInfo.map((account) => (
            <Item
              className={className}
              key={account.label}
              label={account.label}
              url={account.url}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const StyledSocial = styled(Social)`
  &__list {
    display: grid;
    grid-auto-flow: column;
    justify-content: end;

    ${respond(
      css`
        justify-content: space-between;
        max-inline-size: 100%;
        width: 100%;
      `
    )}
  }

  &__item {
    margin: auto 30px auto 0;
    cursor: pointer;

    &:last-child {
      margin: auto 0;
    }

    ${respond(
      css`
        margin: auto 15px;

        &:last-child {
          margin: auto 15px;
        }
      `
    )}
  }
`;

Social.displayName = "Global.Footer.Social";

Social.propTypes = {
  socialInfo: PropTypes.array,
};

export default StyledSocial;
