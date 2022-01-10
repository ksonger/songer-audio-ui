import React, { useState } from "react";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormMessage as FormMessage,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
import * as Styled from "./styles";
import Button from "@/components/atomic/Button";
import { sendComments } from "@/lib/api";
import IconFactory from "@/factories/IconFactory";

const ModalForm = ({ type = "subscribe", title = "Form Title", onClose }) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const valueSets = {
    subscribe: { given_name: "", family_name: "", email: "" },
    contact: { given_name: "", family_name: "", email: "", comments: "" },
  };
  const form = useFormState({
    resetOnSubmitSucceed: true,
    validateOnBlur: false,
    values: valueSets[type],
    onValidate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Please enter an email.";
      }
      if (type === "contact") {
        const comment = document.querySelector(`#comments`).value;
        if (!comment) {
          errors.comments = "Please provide a message.";
        } else {
          values.comments = comment;
        }
      }
      if (Object.keys(errors).length > 0) {
        throw errors;
      }
    },
    onSubmit: (values) => {
      const data = {
        givenName: values.given_name,
        familyName: values.family_name,
        emailAddress: values.email,
        comments: values.comments || "NEW SUBSCRIBER",
      };
      const reset = () => {
        setSubmitting(false);
        setSubmitted(false);
        setResponseMessage("");
        document.querySelector(`#comments`).value = "";
      };
      setSubmitting(true);
      sendComments(data)
        .then((response) => {
          setSubmitted(true);
          setResponseMessage("Thank you! The form submitted successfully.");
          setTimeout(() => {
            document.dispatchEvent(new Event("closeDialog"));
            reset();
          }, 3000);
        })
        .catch((e) => {
          setSubmitted(true);
          setResponseMessage(
            `We're sorry, something went wrong!  Please, try again, or email us directly at info@songeraudio.com`
          );
          setTimeout(() => {
            document.dispatchEvent(new Event("closeDialog"));
            reset();
          }, 7000);
        });
    },
  });
  return (
    <>
      <Styled.FormWrapper>
        <Styled.FormTitle>{title}</Styled.FormTitle>
        <Styled.FormBody>
          {submitting && (
            <Styled.Loader>
              <IconFactory size={50} icon="loader" style={{ color: "red" }} />
            </Styled.Loader>
          )}
          {submitted && (
            <Styled.Loader>
              <span>{responseMessage}</span>
            </Styled.Loader>
          )}
          <Form {...form}>
            <Styled.FormElement>
              <Styled.Input
                {...form}
                name="given_name"
                placeholder="First Name"
              />
            </Styled.FormElement>
            <Styled.FormElement>
              <Styled.Input
                {...form}
                name="family_name"
                placeholder="Last Name"
              />
            </Styled.FormElement>
            <Styled.FormElement>
              <Styled.Input
                {...form}
                name="email"
                placeholder="Email (required)"
              />
              <Styled.Message>
                <FormMessage {...form} name="email" />
              </Styled.Message>
            </Styled.FormElement>
            {type === "contact" && (
              <Styled.FormElement>
                <Styled.Input
                  id="comments"
                  {...form}
                  name="comments"
                  placeholder="Message (required)"
                  as="textarea"
                  rows="4"
                />
                <Styled.Message>
                  <FormMessage {...form} name="comments" />
                </Styled.Message>
              </Styled.FormElement>
            )}
            <Styled.FormActions>
              <Styled.CancelButton>Cancel</Styled.CancelButton>
              <FormSubmitButton {...form}>
                <Button>Submit</Button>
              </FormSubmitButton>
            </Styled.FormActions>
          </Form>
        </Styled.FormBody>
      </Styled.FormWrapper>
    </>
  );
};

export default ModalForm;
