import PropTypes from "prop-types"
import styled from "styled-components"
import Nav from "../Nav"
import Image from "@/components/atomic/Image"
import * as Styled from "./styles"


const Header = ({activeHref, mobile, standard = true}) => {
    return (
        <Styled.Header>
            <Styled.Background standard={standard}>
                <Image
                    image={{"url": "/home_background.png", "width": 2000, "height": 1491, "alt": "Onimaru"}}
                    layout="fill"
                    objectFit="cover"
                    sizes={`(max-width: "960px") 100vw, 50vw`}
                    priority
                />
            </Styled.Background>
            <Styled.HeaderContent standard={standard} role="banner">
                <Styled.LogoNav>
                    <Styled.Logo>
                        <Image
                            image={{"url": "/sa_logo_e6cc8e.png", "width": 200, "height": 100, "alt": "Onimaru"}}
                            layout="fill"
                            objectFit="cover"
                            sizes={`(max-width: "200px")`}
                            priority
                        />
                    </Styled.Logo>
                    <Styled.Nav>
                        <Nav standard={standard} mobile={mobile} activeHref={activeHref}/>
                    </Styled.Nav>
                </Styled.LogoNav>
            </Styled.HeaderContent>
            <Styled.Shadow></Styled.Shadow>
        </Styled.Header>
    )
}

Header.propTypes = {
    activeHref: PropTypes.string,
    mobile: PropTypes.bool,
    standard: PropTypes.bool,
}

export default Header
