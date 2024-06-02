import React from "react";
import * as Styled from "./styles";
import { useRouter } from "next/router";
import Review from "@/blocks/Review";

const ReviewBlade = ({ reviews }) => {
  const router = useRouter();
  return (
    <Styled.ReviewBlade>
      <Styled.ReviewsHeader>Full Reviews</Styled.ReviewsHeader>
      {reviews.map(function (review, i) {
        return (
          <Styled.Review key={i}>
            <Review current={true} heading={review.heading} description={review.description} image={review.image} cta={review.cta} />
          </Styled.Review>
        );
      })}
    </Styled.ReviewBlade>
  );
};

export default ReviewBlade;
