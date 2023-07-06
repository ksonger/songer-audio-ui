import React from "react";
import * as Styled from "./styles";
import Testimonial from "@/blocks/Testimonial";

const Testimonials = ({ testimonials }) => {
  return (
    <>
      <p id="testimonials" />
      <Styled.TestimonialsWrapper>
        <Styled.TestimonialsHeading>
          A Few Listener Quotes
        </Styled.TestimonialsHeading>
        <Styled.TestimonialsMain>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} message={testimonial.message} />
          ))}
        </Styled.TestimonialsMain>
      </Styled.TestimonialsWrapper>
    </>
  );
};

export default Testimonials;
