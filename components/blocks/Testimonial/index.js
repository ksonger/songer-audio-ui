import React from "react";
import * as Styled from "./styles";

const Testimonial = ({ message }) => {
  return (
    <Styled.TestimonialWrapper>
      <Styled.TestimonialMain>
        <Styled.Testimonial>
          <Styled.Message>
            <q>{message}</q>
          </Styled.Message>
        </Styled.Testimonial>
      </Styled.TestimonialMain>
    </Styled.TestimonialWrapper>
  );
};

export default Testimonial;
