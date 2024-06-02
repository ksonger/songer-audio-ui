import React from "react";
import Card from "@/blocks/Card";

const Show = ({current, heading, date, description, image, cta}) => {
    return (
        <Card current={current} heading={heading} date={date} description={description} image={image} cta={cta} />
    )
}

export default Show;