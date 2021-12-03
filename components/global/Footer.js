import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import HomeLink from "@/global/HomeLink"
import useGlobalContext from "@/hooks/useGlobalContext"
import { respond } from "@/styles/mixins"

const Footer = ({ activeHref, mobile, standard }) => {
  const { footerContent } = useGlobalContext()

  return (
    <Wrapper>
      <StyledFooter role="banner">
        <HomeLink footer mobile={mobile} standard={standard} />
        <div>NAV</div>
        <div className="siteDescription">
          <div
            dangerouslySetInnerHTML={{ __html: footerContent.siteDescription }}
          />
        </div>
        <div
          className="siteCopyright"
          dangerouslySetInnerHTML={{ __html: footerContent.siteCopyright }}
        />
      </StyledFooter>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  transition: background-color 200ms;
  background-color: var(--color-primary-light);
`

const StyledFooter = styled.footer`
  max-width: var(--l-content-max);
  margin: auto;
  z-index: var(--z-index-footer);
  min-height: 30vh;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    "logo footerNav"
    "description footerNav"
    "copyright .";
  gap: 20px;
  justify-content: start;
  align-content: center;
  align-items: center;
  padding: 55px 0 40px 0;

  .homeLink {
    grid-area: logo;
  }

  .footer {
    align-self: start;
    grid-area: footerNav;
  }

  .siteDescription {
    grid-area: description;
    font-size: var(--font-size-xs);
    align-self: start;
    max-width: 36em;
    padding-bottom: 8em;
    line-height: 1.8em;
    a {
      text-decoration: underline;
    }
  }

  .siteCopyright {
    grid-area: copyright;
    align-self: center;
    font-size: var(--font-size-xxs);
  }

  ${respond(css`
    grid-template-areas:
      "logo"
      "footerNav"
      "description"
      "copyright";
    gap: 4em;
    .siteDescription {
      padding-bottom: 0;
    }
  `)}
`

Footer.propTypes = {
  activeHref: PropTypes.string,
  mobile: PropTypes.bool,
  standard: PropTypes.bool,
}

export default Footer
