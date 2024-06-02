import styled, { css } from "styled-components";
import { fluidScale, respond } from "@/styles/mixins";
import Button from "@/components/atomic/Button";
import IconFactory from "@/factories/IconFactory";
import { unstable_FormInput as FormInput } from "reakit/Form";

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 30px auto;
  position: relative;
  border: 1px solid #555;
  background-color: rgba(63, 63, 63, 0.3);

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid #444;
    -webkit-text-fill-color: #aaa;
    -webkit-box-shadow: 0 0 0px 1000px #111 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const Loader = styled.div`
  position: absolute;
  top: 40%;
  max-width: 800px;
  margin: 0 auto;
  z-index: 1001;
  justify-self: center;

  svg {
    position: absolute;
  }

  span {
    display: flex;
    color: var(--button-background-color);
    font-size: ${fluidScale("18px", "16px")};
    line-height: 24px;
    font-weight: bold;
    text-align: center;
    padding: 0 24px;
    justify-content: center;

    button {
      margin-top: 24px;
      span {
        color: #fff;
      }
    }
  }
`;

export const FormBody = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
`;

export const FormContainer = styled.div`
  padding: 24px;
  transition: opacity 300ms;
  opacity: ${(p) => {
    return p.responseMessage.length > 0 ? ".1" : "1";
}};
`;

export const FormSection = styled.div`
  width: 100%;
  text-align: center;
  font-style: italic;
  color: rgba(255, 255, 255, 0.7);
  font-size: ${fluidScale("18px", "16px")};
  padding: 24px;
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  border-radius: 0.2rem;
  padding: 0.85em 0.75em;
  font-size: 100%;
  border: 1px solid #444;
  color: #aaa;
  background-color: #111;
  margin: 0 !important;
  box-sizing: border-box;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  option {
    padding: 20px;
  }
`;

export const Icon = styled(IconFactory)`
  position: absolute;
  inset-block-start: 50%;
  inset-inline-end: 40px;
  transform: translateY(-50%);
  right: 20px;
  pointer-events: none;
`;

export const Input = styled(FormInput)`
  display: block;
  width: 100%;
  border-radius: 0.2rem;
  padding: 0.5em 0.75em;
  font-size: 100%;
  border: 1px solid #444;
  color: #aaa;
  background-color: #111;
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
  margin: 20px 5px;
  position: relative;
  input {
      height: 45px;
    padding: 10px;
    max-width: 700px;

    &:focus {
      border-color: rgba(0, 0, 0, 0.25);
    }
  }
`;

export const Message = styled.div`
  color: var(--button-background-color);
    margin-top: 4px;
`;

export const FormActions = styled.div`
  display: flex;
  flex-basis: 100%;
  grid-auto-flow: column;
  grid-template-columns: max-content max-content;
  margin-top: 50px;
  justify-content: end;
`;
