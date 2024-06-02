import React from "react";
import AtomicImage from "@/components/atomic/Image";
import * as Styled from "./styles";
import Button from "@/components/atomic/Button";
import Link from "next/link";
import {useRouter} from "next/router";

const Card = ({
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
        <Styled.CardWrapper $current={current} $type={type} {...props}>
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
                    {date && (
                        <Styled.CardDate>
                            {date}
                        </Styled.CardDate>
                    )}
                    <Styled.CardDescription
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
                </Styled.CardContent>
            </Styled.CardMain>
        </Styled.CardWrapper>
    );
};

export default Card;
