import { useState, useEffect } from "react"
import styled from "styled-components"
import Modal from "@/atomics/Modal"
import { MainButton } from "@/atomics/Button"
import StandardLogo from "@/svgs/logos/StandardLogo"

const SESSION_KEY = "acknowledgedContentWarning"
const ACCENT_COLOR = "#9BC4CF"

function ContentWarningModal(props) {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    try {
      const item = window.sessionStorage.getItem(SESSION_KEY)
      setHidden(!!JSON.parse(item))
    } catch (error) {
      console.error(error)
    }
  }, [])

  function doDismiss(dialog) {
    setHidden(true)
    dialog.hide()
    window.sessionStorage.setItem(SESSION_KEY, "true")
  }

  if (hidden) return null

  return (
    <StyledModal
      role="alertDialog" // eslint-disable-line jsx-a11y/aria-role
      aria-label={null}
      aria-labelledby="warning-modal-label"
      aria-describedby="warning-modal-desc"
      disclosure={null}
      closeControl={null}
      hideOnEsc={false}
      hideOnClickOutside={false}
      options={{ visible: true }}
    >
      {(dialog) => (
        <StyledInner>
          <StyledLogo width={260.82} height={103.21} ruleFill={ACCENT_COLOR} />
          <p>
            Welcome to The American Soldier in World War II, an interactive
            digital publication and archive, preserving and making accessible
            the thoughts, opinions, and experiences of US service members—in
            their own, uncensored words.
          </p>
          <StyledInset>
            <StyledInsetHeading id="warning-modal-label">
              Notice of harmful content:
            </StyledInsetHeading>
            <p>
              This site contains unedited historical records related to the
              conduct of war that may be offensive, graphic, difficult to read,
              and for some users harmful. Certain content will be inappropriate
              for children. Visitors who proceed assume responsibility for their
              response to this unaltered content. Please visit our Harmful
              Content Statement for additional information.
            </p>
          </StyledInset>
          <StyledConsent id="warning-modal-desc">
            I understand and acknowledge the warning, and am ready to proceed.{" "}
          </StyledConsent>
          <StyledMainButton
            onClick={() => doDismiss(dialog)}
            aria-controls={dialog.baseId}
          >
            Continue
          </StyledMainButton>
        </StyledInner>
      )}
    </StyledModal>
  )
}

const StyledModal = styled(Modal)`
  --modal-padding: 3vw 6vw;
  --modal-background-color: var(--background-beige);

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 840px;
  margin-inline: auto;
`

const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  line-height: 1.6;
`

const StyledLogo = styled(StandardLogo)`
  align-self: center;
  margin-bottom: 32px;
`

const StyledInset = styled.div`
  padding: 28px;
  background-color: var(--background-cream);
`

const StyledInsetHeading = styled.h2`
  color: #437280;
  font-size: var(--font-size-h3);
  font-family: var(--font-face-headers-compact);
  letter-spacing: 1px;
`

const StyledConsent = styled.p`
  font-style: italic;
`

const StyledMainButton = styled(MainButton)`
  --button-padding: 0 34px;
  --button-background-color: ${ACCENT_COLOR};
  --button-hover-background-color: #8fb6c0;

  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 36px;
  text-transform: uppercase;
  letter-spacing: 1px;
`

ContentWarningModal.propTypes = {}

export default ContentWarningModal
