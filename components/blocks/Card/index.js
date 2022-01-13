import React from "react";
import AtomicImage from "@/components/atomic/Image";
import * as Styled from "./styles";
import Button from "@/components/atomic/Button";
import { useRouter } from "next/router";

const Card = ({
  type = "default",
  orientation = "left",
  imageBleed = "none",
  heading,
  description,
  image,
  cta,
  ...props
}) => {
  const router = useRouter();
  return (
    <Styled.CardWrapper $type={type} {...props}>
      <Styled.CardMain $type={type} $orientation={orientation}>
        {image && (
          <Styled.CardImage $type={type} $image={image}>
            <AtomicImage
              alt="Product Image"
              className="__image"
              image={image}
              layout="fill"
              objectFit="cover"
            />
          </Styled.CardImage>
        )}
        <Styled.CardContent className="__content" $orientation={orientation}>
          <Styled.CardHeading className="__heading">
            {heading}
          </Styled.CardHeading>
          <Styled.CardDescription
            className="__description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {cta && (
            <Styled.CTA>
              <Button
                onClick={() => {
                  router.push(cta.uri);
                }}
              >
                {cta.label}
              </Button>
            </Styled.CTA>
          )}
        </Styled.CardContent>
      </Styled.CardMain>
    </Styled.CardWrapper>
  );
};

export default Card;
