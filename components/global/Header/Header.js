import PropTypes from "prop-types"
import styled from "styled-components"
import Nav from "../Nav"
import Image from "@/components/atomic/Image"
import * as Styled from "./styles"


const Header = ({activeHref, mobile, standard = true}) => {
    return (
        <Styled.Header>
            <Styled.HeaderContent standard={standard} role="banner">
                <Styled.Background>
                    <Image
                        image={{"url": "/home_background.png", "width": 2000, "height": 1491, "alt": "Onimaru"}}
                        layout="fill"
                        objectFit="cover"
                        sizes={`(max-width: "960px") 100vw, 50vw`}
                        priority
                    />
                </Styled.Background>
                <Styled.Nav>
                    <Nav standard={standard} mobile={mobile} activeHref={activeHref}/>
                </Styled.Nav>
            </Styled.HeaderContent>
        </Styled.Header>
    )
}

Header.propTypes = {
    activeHref: PropTypes.string,
    mobile: PropTypes.bool,
    standard: PropTypes.bool,
}

export default Header
