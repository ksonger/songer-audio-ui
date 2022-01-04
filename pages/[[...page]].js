import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import ContentLayout from "@/components/global/ContentLayout";
import PageTemplate from "@/templates/Page";
import Loader from "@/svgs/icons/unique/Loader";
import { getPageData } from "@/helpers";
import { GlobalDataProvider } from "@/contexts/GlobalData";
import { GLOBAL_DATA as globalData } from "@/constants/globalData";

let router;

const ContentPage = ({ content }) => {
  router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <GlobalDataProvider data={globalData}>
      <PageTemplate content={content} />
    </GlobalDataProvider>
  );
};

export async function getStaticPaths() {
  const paths = [
    { params: { page: [] } },
    { params: { page: ["products"] } },
    { params: { page: ["technology"] } },
    { params: { page: ["media"] } },
    { params: { page: ["news"] } },
    { params: { page: ["contact"] } },
  ];
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const page = params.page ? params.page[0] : "home";
  return {
    props: {
      content: {
        pageData: getPageData(page),
      },
    },
    revalidate: 30,
  };
}

ContentPage.Layout = ContentLayout;

ContentPage.displayName = "Entry.ContentPage";

ContentPage.propTypes = {
  content: PropTypes.object,
  page: PropTypes.string,
};

export default ContentPage;
