import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDialogState } from "reakit/Dialog";
import classNames from "classnames";
import IconFactory from "@/factories/IconFactory";
import * as Styled from "./styles";

const Modal = ({
  ariaLabel,
  type,
  content,
  footerCloseContent,
  disclosureContent,
  showCloseIcon = true,
  onClose,
  options = {},
  className,
  ...props
}) => {
  const dialog = useDialogState({ ...options });

  const doDismiss = () => {
    dialog.hide();
    if (onClose) {
      onClose();
    }
  };

  const doShow = () => {
    dialog.show();
  };

  useEffect(() => {
    document.addEventListener("closeDialog", () => {
      doDismiss();
    });
    document.addEventListener("openDialog", () => {
      doShow();
    });
  });

  return (
    <>
      {disclosureContent && (
        <Styled.Disclosure $type={type} {...dialog}>
          {disclosureContent}
        </Styled.Disclosure>
      )}
      <Styled.Backdrop $type={type} {...dialog}>
        <Styled.ModalDialog
          aria-label={ariaLabel}
          className={classNames({
            "a-bg-default": true,
            [className]: !!className,
          })}
          $type={type}
          {...dialog}
          {...props}
        >
          <Styled.DialogInner>
            {showCloseIcon && (
              <Styled.Close
                id="dialog_close"
                $type={type}
                onClick={doDismiss}
                aria-label="close"
                aria-controls={dialog.baseId}
              >
                <IconFactory width={17} height={17} icon="closeMenu" />
              </Styled.Close>
            )}
            <Styled.DialogContent $type={type}>
              {typeof content === "function" ? content(dialog) : content}
              {footerCloseContent && (
                <Styled.FooterClose $type={type} onClick={doDismiss}>
                  {footerCloseContent}
                </Styled.FooterClose>
              )}
            </Styled.DialogContent>
          </Styled.DialogInner>
        </Styled.ModalDialog>
      </Styled.Backdrop>
    </>
  );
};

Modal.propTypes = {
  ariaLabel: PropTypes.string,
  type: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  footerCloseContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disclosureContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  showCloseIcon: PropTypes.bool,
  onClose: PropTypes.func,
  options: PropTypes.object,
  logo: PropTypes.bool,
  className: PropTypes.string,
};

export default Modal;
