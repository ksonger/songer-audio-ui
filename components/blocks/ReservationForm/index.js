import React, {useState} from "react";
import {
    unstable_Form as Form,
    unstable_FormMessage as FormMessage,
    unstable_FormSubmitButton as FormSubmitButton,
    unstable_useFormState as useFormState,
} from "reakit/Form";
import {Checkbox} from "reakit/Checkbox";
import * as Styled from "./styles";
import FormRow from "@/components/atomic/FormRow";
import Button from "@/components/atomic/Button";
import {sendComments} from "@/lib/api";
import IconFactory from "@/factories/IconFactory";

const ReservationForm = ({
                             type = "listen",
                             models = [],
                             states = [],
                             title = "Form Title",
                             onClose,
                         }) => {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [checked, setChecked] = React.useState(false);
    const toggle = () => setChecked(!checked);
    const valueSets = {
        subscribe: {},
        contact: {},
        reservation: {
            given_name: "",
            family_name: "",
            address: "",
            city: "",
            state: "",
            zip_code: "",
            email: "",
            phone: "",
            model: "",
            price: "",
            requests: "",
        },
    };
    const required = ["given_name", "family_name", "email", "phone", "model"];
    const error_messages = {
        given_name: "Please provide a first name.",
        family_name: "Please provide a last name.",
        email: "Please provide a valid email.",
        phone: "Please provide a valid phone number.",
        model: "Please specify which model you would like."
    };
    const form = useFormState({
        resetOnSubmitSucceed: true,
        validateOnBlur: false,
        values: valueSets[type],
        onValidate: (values) => {
            let errors = {};
            if (values.given_name.length === 0) {
                errors.given_name = error_messages["given_name"];
            }
            if (!values.family_name) {
                errors.family_name = error_messages["family_name"];
            }
            if (!values.email) {
                errors.email = error_messages["email"];
            }
            if (!values.phone) {
                errors.phone = error_messages["phone"];
            }
            values.model = document.getElementById("model").value;
            if (values.model === "Select Model") {
                errors.model = error_messages["model"];
            }
            values.state = document.getElementById("state").value;
            values.requests = document.querySelector(`#requests`).value;

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
                address: values.address,
                city: values.city,
                state: values.state,
                zipCode: values.zip_code,
                emailAddress: values.email,
                phoneNumber: values.phone,
                speakerModel: values.model,
                price: values.price,
                requests: values.requests,
                comments: "SPEAKER RESERVATION",
            };
            const reset = () => {
                setSubmitting(false);
                setSubmitted(false);
                setChecked(false);
                setResponseMessage("");
                document.querySelector(`#requests`).value = "";
            };
            setSubmitting(true);
            sendComments(data)
                .then((response) => {
                    setSubmitting(false);
                    setSubmitted(true);
                    setResponseMessage(
                        "Thank you! Your reservation has been received, and we will be in contact shortly."
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
                        setChecked(false);
                        setResponseMessage("");
                        const selectTags = document.getElementsByTagName("select");

                        for (var i = 0; i < selectTags.length; i++) {
                            selectTags[i].selectedIndex = 0;
                        }
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
                                    <Styled.Input
                                        {...form}
                                        name="address"
                                        placeholder="Address"
                                    />
                                </Styled.FormElement>
                                <Styled.FormElement>
                                    <Styled.Input
                                        {...form}
                                        name="city"
                                        placeholder="City"
                                    />
                                </Styled.FormElement>
                            </FormRow>
                            <FormRow>
                                <Styled.FormElement>
                                    <Styled.Select id="state">
                                        $
                                        {states.map((state, i) => (
                                            <option key={i} value={state}>
                                                {state}
                                            </option>
                                        ))}
                                    </Styled.Select>
                                    <Styled.Icon icon="caretDown" width={10} height={7.5}/>
                                    <Styled.Message>
                                        <FormMessage {...form} name="time"/>
                                    </Styled.Message>
                                </Styled.FormElement>
                                <Styled.FormElement>
                                    <Styled.Input
                                        {...form}
                                        name="zip_code"
                                        placeholder="Zip Code"
                                    />
                                </Styled.FormElement>
                            </FormRow>
                            <FormRow>
                                <Styled.FormElement>
                                    <Styled.Input {...form} name="email" placeholder="Email"/>
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
                            <Styled.FormSection>
                                Reservation Details
                            </Styled.FormSection>
                            <FormRow>
                                <Styled.FormElement>
                                    <Styled.Select id="model">
                                        $
                                        {models.map((model, i) => (
                                            <option key={i} value={model}>
                                                {model}
                                            </option>
                                        ))}
                                    </Styled.Select>
                                    <Styled.Icon icon="caretDown" width={10} height={7.5}/>
                                    <Styled.Message>
                                        <FormMessage {...form} name="model"/>
                                    </Styled.Message>
                                </Styled.FormElement>
                                <Styled.FormElement>
                                    <Styled.Input
                                        {...form}
                                        name="price"
                                        placeholder="Purchase Price"
                                    />
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
                                    <FormMessage {...form} name="requests"/>
                                </Styled.Message>
                            </Styled.FormElement>

                            <Styled.Terms>
                                Submission of this form confirms your reservation in our 2024 build schedule. Your
                                $10,000 deposit is refundable for 30 days, and may be subject to a 2.6% processing fee.
                                After the 30 days, it will be applied to the purchase price of your order and
                                you will receive an invoice for the remainder of the purchase price. When your order is
                                ready you will be notified, and with payment in full your speakers will ship to you.
                                Checking the &quot;I accept&quot; box below indicates that you have read and accept
                                these terms.
                            </Styled.Terms>

                            <FormRow>
                                <Styled.FormElement>
                                    <Styled.TermsCheckbox>
                                        <Checkbox checked={checked} onChange={toggle}/>
                                        <Styled.Label>
                                            I accept
                                        </Styled.Label>
                                    </Styled.TermsCheckbox>
                                </Styled.FormElement>
                            </FormRow>
                            <Styled.FormActions>
                                <FormSubmitButton {...form}>
                                    <Button disabled={!checked}>Place Reservation</Button>
                                </FormSubmitButton>
                            </Styled.FormActions>
                        </Form>
                    </Styled.FormContainer>
                </Styled.FormBody>
            </Styled.FormWrapper>
        </>
    );
};

export default ReservationForm;




