import PropTypes from "prop-types"
import Heading from "@/components/atomic/Heading"
import HtmlHead from "@/global/HtmlHead"

const PageTemplate = ({content, hidePageTitle = false}) => {
    const c = {
        title: 'page title',
        description: 'page description',
        featuredImage: {}
    }
    return (
        <>
            <HtmlHead
                title={c.title}
                description={c.description}
                featuredImage={c.featuredImage}
            />
            <section className={hidePageTitle ? "a-hidden" : null}>
                <Heading as="h1">{c.title}</Heading>
            </section>
            CONTENT BLOCKS
        </>
    )
}

PageTemplate.propTypes = {
    content: PropTypes.object,
    hidePageTitle: PropTypes.bool,
}

export default PageTemplate
