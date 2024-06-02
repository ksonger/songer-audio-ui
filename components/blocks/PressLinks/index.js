import React from "react";
import * as Styled from "./styles";

const PressLinks = ({ links }) => {
    return (
        <Styled.PressLinksWrapper>
            <Styled.PressLinksHeader>Reports & Show Coverage</Styled.PressLinksHeader>

                {links.map(function (link, i) {
                    return (
                        <Styled.PressLink key={i}>
                            <a target={link.target || "_blank"} href={link.url} rel="noreferrer">
                                <Styled.Message
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                ></Styled.Message>
                                <Styled.Attribution>- {link.source} -</Styled.Attribution>
                            </a>
                        </Styled.PressLink>
                    );
                })}

        </Styled.PressLinksWrapper>
    );
};

export default PressLinks;
