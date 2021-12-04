import React from "react"
import PropTypes from "prop-types"
import {useRouter} from "next/router"
import ContentLayout from "@/components/global/ContentLayout"
import PageTemplate from "@/templates/Page"
import Loader from "@/svgs/icons/unique/Loader"


const ContentPage = ({content, page}) => {
    const router = useRouter()

    if (router.isFallback) {
        return <Loader/>
    }
    console.log(page)
    return <PageTemplate content={content}/>
}

export async function getStaticPaths() {
    const paths = [
        {params: {page: []}},
        {params: {page: ["products"]}},
        {params: {page: ["technology"]}},
        {params: {page: ["media"]}},
        {params: {page: ["about"]}},
        {params: {page: ["contact"]}},
    ]
    return {paths, fallback: true}
}

export async function getStaticProps({params}) {
    return {
        props: {
            content: {},
        },
        revalidate: 30,
    };
}

ContentPage.Layout = ContentLayout

ContentPage.displayName = "Entry.ContentPage"

ContentPage.propTypes = {
    content: PropTypes.object,
    page: PropTypes.string,
}

export default ContentPage
