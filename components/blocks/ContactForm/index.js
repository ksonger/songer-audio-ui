import React, {useState} from "react";
import {
    unstable_Form as Form,
    unstable_FormMessage as FormMessage,
    unstable_FormSubmitButton as FormSubmitButton,
    unstable_useFormState as useFormState,
} from "reakit/Form";
import {validEmail} from "@/helpers";
import * as Styled from "./styles";
import FormRow from "@/components/atomic/FormRow";
import Button from "@/components/atomic/Button";
import {sendComments} from "@/lib/api";
import IconFactory from "@/factories/IconFactory";

const ContactForm = ({
                         type = "listen",
                         models = [],
                         states = [],
                         title = "Form Title",
                         onClose,
                     }) => {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [hasComments, setHasComments] = React.useState(false);
    const [hasEmail, setHasEmail] = React.useState(false);
    const valueSets = {
        subscribe: {},
        contact: {
            given_name: "",
            family_name: "",
            email: "",
            phone: "",
            comments: "",
        },
        reservation: {},
    };

    const required = ["email", "comments"];
    const error_messages = {
        email: "Please provide a valid email.",
        comments: "Please provide a message.",
    };
    const form = useFormState({
        resetOnSubmitSucceed: true,
        validateOnBlur: false,
        values: valueSets[type],
        onValidate: (values) => {
            let errors = {};

            setHasEmail(validEmail(values.email))

            if (!validEmail(values.email)) {
                errors.email = error_messages["email"];
            }

            values.comments = document.querySelector(`#comments`).value;

            if (Object.keys(errors).length > 0) {
                throw errors;
            }
        },
        onSubmit: (values) => {
            if (typeof window !== "undefined") {
                window.scrollTo({top: 0, left: 0, behavior: "smooth"});
            }

            const data = {
                givenName: values.given_name,
                familyName: values.family_name,
                emailAddress: values.email,
                phoneNumber: values.phone,
                comments: values.comments,
            };
            const reset = () => {
                setSubmitting(false);
                setSubmitted(false);
                setHasComments(false);
                setHasEmail(false);
                setResponseMessage("");
                document.querySelector(`#comments`).value = "";
            };
            setSubmitting(true);
            sendComments(data)
                .then((response) => {
                    setSubmitting(false);
                    setSubmitted(true);
                    setResponseMessage(
                        "Thank you! Your message has been received, and we will be in contact shortly."
                    );
                })
                .catch((e) => {
                    window.scrollTo(0, 0);
                    setSubmitting(false);
                    setSubmitted(true);
                    setResponseMessage(
                        `We're sorry, something went wrong!  Please try again, or email us at info@songeraudio.com`
                    );
                })
        },
    });


    return (
        <>
            <Styled.FormWrapper>
                <Styled.FormBody>
                    {submitting && (
                        <Styled.Loader>
                            <IconFactory size={50} icon="loader" style={{color: "gray"}}/>
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
                        setHasComments(false);
                        setHasEmail(false);
                        setResponseMessage("");
                        const selectTags = document.getElementsByTagName("select");

                        for (var i = 0; i < selectTags.length; i++) {
                            selectTags[i].selectedIndex = 0;
                        }
                        document.querySelector(`#comments`).value = "";
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
                            <Styled.FormSection>Contact Songer Audio</Styled.FormSection>
                            <FormRow>
                                <Styled.FormElement>
                                    <Styled.Input
                                        {...form}
                                        name="given_name"
                                        placeholder="First Name"
                                    />
                                    <Styled.Message>
                                        <FormMessage {...form} name="given_name"/>
                                    </Styled.Message>
                                </Styled.FormElement>
                                <Styled.FormElement>
                                    <Styled.Input
                                        {...form}
                                        name="family_name"
                                        placeholder="Last Name"
                                    />
                                    <Styled.Message>
                                        <FormMessage {...form} name="family_name"/>
                                    </Styled.Message>
                                </Styled.FormElement>
                            </FormRow>
                            <FormRow>
                                <Styled.FormElement>
                                    <Styled.Input {...form} name="email" placeholder="Email*"/>
                                    <Styled.Message>
                                        <FormMessage {...form} name="email"/>
                                    </Styled.Message>
                                </Styled.FormElement>
                                <Styled.FormElement>
                                    <Styled.Input
                                        {...form}
                                        name="phone"
                                        placeholder="Phone Number"
                                    />
                                    <Styled.Message>
                                        <FormMessage {...form} name="phone"/>
                                    </Styled.Message>
                                </Styled.FormElement>
                            </FormRow>

                            <Styled.FormElement>
                                <Styled.Input
                                    id="comments"
                                    {...form}
                                    name="comments"
                                    placeholder="Your message*"
                                    as="textarea"
                                    rows="8"
                                    onChange={() => {
                                        setHasComments(document.querySelector(`#comments`).value.length > 0)
                                    }}
                                />
                                <Styled.Message>
                                    <FormMessage {...form} name="comments"/>
                                </Styled.Message>
                            </Styled.FormElement>
                            <Styled.FormActions>
                                <FormSubmitButton {...form}>
                                    <Button disabled={!hasComments || !hasEmail}>Submit</Button>
                                </FormSubmitButton>
                            </Styled.FormActions>
                        </Form>
                    </Styled.FormContainer>
                </Styled.FormBody>
            </Styled.FormWrapper>
        </>
    );
};

export default ContactForm;




