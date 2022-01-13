import PropTypes from "prop-types";
import Head from "next/head";
import useGlobalContext from "@/hooks/useGlobalContext";
import { nextURL } from "@/helpers";
import { useRouter } from "next/router";

export default function HtmlHead({
  title,
  description,
  featuredImage = {},
  children,
}) {
  const { siteInfo } = useGlobalContext();
  const imageUrl = featuredImage?.url || null;
  const { asPath } = useRouter();
  const url = nextURL(asPath);

  return (
    <Head>
      <title>{`${title} | Songer Audio`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description || siteInfo.description} />
      <meta name="og:url" content={url} />
      <meta name="og:type" content="article" />
      <meta name="og:title" content={title || siteInfo.title} />
      <meta
        name="og:description"
        content={description || siteInfo.description}
      />
      {children}
    </Head>
  );
}

HtmlHead.displayName = "Global.HtmlHead";

HtmlHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  featuredImage: PropTypes.object,
  children: PropTypes.node,
};
