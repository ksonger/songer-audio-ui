import styled, { css } from "styled-components";
import { fluidScale, respond } from "@/styles/mixins";
import Button from "@/components/atomic/Button";
import { unstable_FormInput as FormInput } from "reakit/Form";

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 30px auto;
  position: relative;
  border: 1px solid #bbb;

  background-color: #eee;
`;

export const Loader = styled.div`
  position: absolute;
  top: 40%;
  max-width: 700px;
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
  color: #777;
  font-size: ${fluidScale("18px", "16px")};
  padding: 24px;
`;

export const FormSubsection = styled.div`
  font-style: italic;
  color: #888;
  font-size: ${fluidScale("16px", "14px")};
  padding: 10px;
`;

export const FormDate = styled.input`
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
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  border-radius: 0.2rem;
  padding: 0.85em 0.75em;
  font-size: 100%;
  border: 1px solid rgba(0, 0, 0, 0.25);
  color: #4d4d4d;
  margin: 0 !important;
  box-sizing: border-box;
  outline: none;
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
  color: var(--button-background-color);
`;

export const FormActions = styled.div`
  display: flex;
  flex-basis: 100%;
  grid-auto-flow: column;
  grid-template-columns: max-content max-content;
  margin-top: 50px;
  justify-content: end;
`;
