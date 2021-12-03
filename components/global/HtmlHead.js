import PropTypes from "prop-types"
import Head from "next/head"
import useGlobalContext from "@/hooks/useGlobalContext"
import { nextURL, strapiURL } from "@/helpers"
import { useRouter } from "next/router"

export default function HtmlHead({
  title,
  description,
  featuredImage = {},
  children,
}) {
  const { siteInfo } = useGlobalContext()
  const imageUrl = featuredImage?.url ? strapiURL(featuredImage?.url) : null
  const { asPath } = useRouter()
  const url = nextURL(asPath)

  return (
    <Head>
      <title>{`${title} | American Soldier in WWII`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description || siteInfo.description} />
      <meta name="og:url" content={url} />
      <meta name="og:type" content="article" />
      <meta name="og:title" content={title || siteInfo.title} />
      <meta
        name="og:description"
        content={description || siteInfo.description}
      />
      <meta name="twitter:title" content={title || siteInfo.title} />
      <meta name="twitter:card" content="summary" />
      {featuredImage?.url && (
        <>
          <meta name="og:image" content={imageUrl} />
          {featuredImage.caption && (
            <meta name="og:image:alt" content={featuredImage.caption} />
          )}
          <meta name="twitter:image" content={imageUrl} />
          {featuredImage.caption && (
            <meta name="twitter:image:alt" content={featuredImage.caption} />
          )}
        </>
      )}
      {children}
    </Head>
  )
}

HtmlHead.displayName = "Global.HtmlHead"

HtmlHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  featuredImage: PropTypes.object,
  children: PropTypes.node,
}
