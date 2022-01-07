import PropTypes from "prop-types";
import HtmlHead from "@/global/HtmlHead";
import BlockFactory from "@/factories/BlockFactory";
import useGlobalContext from "@/hooks/useGlobalContext";
import React from "react";

const PageTemplate = ({ content, hidePageTitle = false }) => {
  const global = useGlobalContext();

  const blocks = global[content?.pageData?.label?.toLowerCase()] || [];
  const c = {
    title: content.pageData.label.toLowerCase(),
    description: "page description",
    featuredImage: {},
  };

  const HR = ({ i, l }) => (
    <div
      style={{
        borderTop: "1px solid #ccc",
      }}
    />
  );

  return (
    <>
      <HtmlHead
        title={c.title}
        description={c.description}
        featuredImage={c.featuredImage}
      />
      <section className={hidePageTitle ? "a-hidden" : null}></section>
      {blocks.map((block, i) => {
        return (
          <div key={i}>
            <BlockFactory type={block.blockType} data={block} />
          </div>
        );
      })}
    </>
  );
};

PageTemplate.propTypes = {
  content: PropTypes.object,
  hidePageTitle: PropTypes.bool,
};

export default PageTemplate;
