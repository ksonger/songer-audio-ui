import PropTypes from "prop-types";
import Heading from "@/components/atomic/Heading";
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

  const margin = (i, l) => {
    if (i === 0) {
      return `0 0 40px 0`;
    } else {
      return `40px 0`;
    }
  };

  const HR = (i, l) => (
    <div
      style={{
        margin: margin(i, l),
        "border-top": "1px solid #ccc",
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
            {i < blocks.length - 1 && <HR i={i} l={blocks.length} />}
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
