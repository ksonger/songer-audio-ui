import React from "react";
import AtomicImage from "@/components/atomic/Image";
import * as Styled from "./styles";
import Button from "@/components/atomic/Button";
import Link from "next/link";
import {useRouter} from "next/router";

const Review = ({
                  type = "default",
                  current = null,
                  orientation = "left",
                  imageBleed = "none",
                  heading,
                  date,
                  description,
                  image,
                  cta,
                  ...props
              }) => {
    const router = useRouter();
    return (
        <Styled.ReviewWrapper $current={current} $type={type} {...props}>
            <Styled.ReviewMain $type={type} $orientation={orientation}>
                {image && (
                    <Styled.ReviewImage $type={type} $image={image}>
                        <AtomicImage
                            alt="Product Image"
                            className="__image"
                            image={image}
                            layout="fill"
                            objectFit="cover"
                        />
                    </Styled.ReviewImage>
                )}
                <Styled.ReviewContent className="__content" $orientation={orientation}>
                    <Styled.ReviewHeading className="__heading">
                        {heading}
                    </Styled.ReviewHeading>
                    {date && (
                        <Styled.ReviewDate>
                            {date}
                        </Styled.ReviewDate>
                    )}
                    <Styled.ReviewDescription
                        className="__description"
                        dangerouslySetInnerHTML={{__html: description}}
                    />
                    {cta && (
                        <a href={cta.uri} target={cta.target || "_self"}>
                            <Button>
                                {cta.label}
                            </Button>
                        </a>
                    )}
                </Styled.ReviewContent>
            </Styled.ReviewMain>
        </Styled.ReviewWrapper>
    );
};

export default Review;
