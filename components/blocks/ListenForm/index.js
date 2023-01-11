import React, { useState } from "react";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormMessage as FormMessage,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
import * as Styled from "./styles";
import FormRow from "@/components/atomic/FormRow";
import Button from "@/components/atomic/Button";
import { sendComments } from "@/lib/api";
import IconFactory from "@/factories/IconFactory";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

const ListenForm = ({
  type = "listen",
  times = [],
  title = "Form Title",
  onClose,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const valueSets = {
    subscribe: { given_name: "", family_name: "", email: "" },
    contact: { given_name: "", family_name: "", email: "", comments: "" },
    listen: {
      given_name: "",
      family_name: "",
      email: "",
      phone: "",
      date_time_1: "",
      date_time_2: "",
      requests: "",
      comments: "",
    },
  };
  const form = useFormState({
    resetOnSubmitSucceed: true,
    validateOnBlur: false,
    values: valueSets[type],
    onValidate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Please provide an email.";
      }
      if (!values.phone) {
        errors.phone = "Please provide a phone number.";
      }
      const request = document.querySelector(`#requests`).value;
      values.requests = request;
      if (Object.keys(errors).length > 0) {
        throw errors;
      }

      values.date_time_1 = `${document.getElementById("date_1").value} ${
        document.getElementById("time_1").value
      }`;
      values.date_time_2 = `${document.getElementById("date_2").value} ${
        document.getElementById("time_2").value
      }`;
    },
    onSubmit: (values) => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }

      const data = {
        givenName: values.given_name,
        familyName: values.family_name,
        emailAddress: values.email,
        phoneNumber: values.phone,
        requests: values.requests,
        dateTime1: values.date_time_1,
        dateTime2: values.date_time_2,
        comments: "LISTENING SESSION",
      };
      const reset = () => {
        setSubmitting(false);
        setSubmitted(false);
        setResponseMessage("");
        document.querySelector(`#requests`).value = "";
      };
      setSubmitting(true);
      sendComments(data)
        .then((response) => {
          setSubmitting(false);
          setSubmitted(true);
          setResponseMessage(
            "Thank you! Your appointment request has been sent, and we will be in contact shortly."
          );
        })
        .catch((e) => {
          window.scrollTo(0, 0);
          setSubmitting(false);
          setSubmitted(true);
          setResponseMessage(
            `We're sorry, something went wrong!  Please try again, or email us with your schedule request directly at ken@songeraudio.com`
          );
        });
    },
  });

  return (
    <>
      <Styled.FormWrapper>
        <Styled.FormBody>
          {submitting && (
            <Styled.Loader>
              <IconFactory size={50} icon="loader" style={{ color: "gray" }} />
            </Styled.Loader>
          )}
          {submitted && (
            <Styled.Loader>
              <span>{responseMessage}</span>
              <span>
                <Button
                  onClick={() => {
                    setSubmitting(false);
                    setSubmitted(false);
                    setResponseMessage("");
                    document.querySelector(`#requests`).value = "";
                  }}
                >
                  OK
                </Button>
              </span>
            </Styled.Loader>
          )}
          <Styled.FormContainer
            responseMessage={responseMessage}
            submitting={submitting}
          >
            <Form {...form}>
              <Styled.FormSection>Contact Information</Styled.FormSection>
              <FormRow>
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
              </FormRow>
              <FormRow>
                <Styled.FormElement>
                  <Styled.Input {...form} name="email" placeholder="Email" />
                  <Styled.Message>
                    <FormMessage {...form} name="email" />
                  </Styled.Message>
                </Styled.FormElement>
                <Styled.FormElement>
                  <Styled.Input
                    {...form}
                    name="phone"
                    placeholder="Phone Number"
                  />
                  <Styled.Message>
                    <FormMessage {...form} name="phone" />
                  </Styled.Message>
                </Styled.FormElement>
              </FormRow>
              <Styled.FormSection>
                Select your preferred dates and times below.
              </Styled.FormSection>
              <Styled.FormSubsection>
                Preferred Appointment
              </Styled.FormSubsection>
              <FormRow>
                <Styled.FormElement>
                  <Styled.FormDate
                    type="date"
                    {...form}
                    name="date_1"
                    id="date_1"
                  />
                  <Styled.Message>
                    <FormMessage {...form} name="date" />
                  </Styled.Message>
                </Styled.FormElement>
                <Styled.FormElement>
                  <Styled.Select id="time_1">
                    $
                    {times.map((time, i) => (
                      <option key={i} value={time}>
                        {time}
                      </option>
                    ))}
                  </Styled.Select>
                  <Styled.Message>
                    <FormMessage {...form} name="time" />
                  </Styled.Message>
                </Styled.FormElement>
              </FormRow>
              <Styled.FormSubsection>Alternate</Styled.FormSubsection>
              <FormRow>
                <Styled.FormElement>
                  <Styled.FormDate
                    type="date"
                    {...form}
                    name="date_2"
                    id="date_2"
                  />
                  <Styled.Message>
                    <FormMessage {...form} name="date" />
                  </Styled.Message>
                </Styled.FormElement>
                <Styled.FormElement>
                  <Styled.Select id="time_2">
                    $
                    {times.map((time, i) => (
                      <option key={i} value={time}>
                        {time}
                      </option>
                    ))}
                  </Styled.Select>
                  <Styled.Message>
                    <FormMessage {...form} name="time" />
                  </Styled.Message>
                </Styled.FormElement>
              </FormRow>

              <Styled.FormElement>
                <Styled.Input
                  id="requests"
                  {...form}
                  name="requests"
                  placeholder="Special requests"
                  as="textarea"
                  rows="4"
                />
                <Styled.Message>
                  <FormMessage {...form} name="requests" />
                </Styled.Message>
              </Styled.FormElement>

              <Styled.FormActions>
                <FormSubmitButton {...form}>
                  <Button>Request Appointment</Button>
                </FormSubmitButton>
              </Styled.FormActions>
            </Form>
          </Styled.FormContainer>
        </Styled.FormBody>
      </Styled.FormWrapper>
    </>
  );
};

export default ListenForm;
