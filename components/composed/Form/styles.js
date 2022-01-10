import styled, { css } from "styled-components";
import { respond } from "@/styles/mixins";
import Button from "@/components/atomic/Button";
import { unstable_FormInput as FormInput } from "reakit/Form";

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

export const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 1001;

  svg {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
  }

  span {
    color: var(--button-background-color);
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    text-align: center;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
`;

export const FormTitle = styled.div`
  text-align: center;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export const FormBody = styled.div`
  margin-top: 48px;
`;

export const Input = styled(FormInput)`
  display: block;
  width: 100%;
  border-radius: 0.2rem;
  padding: 0.5em 0.75em;
  font-size: 100%;
  border: 1px solid rgba(0, 0, 0, 0.25);
  color: #4d4d4d;
  margin: 0 !important;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border: 2px solid rgba(131, 184, 201, 1);
    border-color: rgba(131, 184, 201, 0.85) !important;
  }
`;

export const FormElement = styled.div`
  display: grid;
  grid-auto-flow: row;
  margin: 20px 0;

  input {
    padding: 10px;
    max-width: 700px;

    &:focus {
      border-color: rgba(0, 0, 0, 0.25);
    }
  }
`;

export const Message = styled.div`
  margin-top: 10px;
  color: var(--button-background-color);
`;

export const FormActions = styled.div`
  display: grid;
  gap: 1em;
  grid-auto-flow: column;
  grid-template-columns: max-content max-content;
  margin-top: 48px;
`;

export const CancelButton = styled(Button)`
  background: #ccc;
  color: #fff;
`;
