import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import PropTypes from "prop-types";
import moment from "moment";
import Button from "@/components/atomic/Button";
import * as Styled from "./styles";
import { Gallery } from "@/components/atomic/Gallery";
import { useOnResize } from "@/hooks/listeners";
import { mobileBreakpoint } from "@/styles/mixins";

const Post = ({ id, newsPost, navHandler }) => {
  const renderProgress = () => {
    return (
      <div>
        <br />
        LOADING
      </div>
    );
  };

  const [containerObj, setContainerObj] = useState();
  const [windowWidth, setWindowWidth] = useState();
  const [hasData, setHasData] = useState(false);

  useOnResize(mobileBreakpoint, (isMobile) => {
    const w = window.innerWidth;
    setWindowWidth(w);
  });

  useEffect(() => {
    setWindowWidth(window?.innerWidth);
    setHasData(true);
    setContainerObj({
      width: document.querySelector(`#post_${id}`).clientWidth - 60,
      height: window.innerHeight,
    });
  }, [windowWidth, hasData]);

  const renderPost = () => {
    const { title, createdAt, content, images } = newsPost;
    return (
      <Styled.Post id={`post_${id}`}>
        <Styled.BackButton>
          <Button
            onClick={() => {
              navHandler();
            }}
            type="primary"
            shape="round"
            icon="caretLeft"
            iconAlign="left"
            size="small"
          >
            Posts
          </Button>
        </Styled.BackButton>

        <Styled.PostHeader>
          <Styled.PostTitle>{title}</Styled.PostTitle>

          <Styled.PostDate>
            <time dateTime={createdAt}>{moment(createdAt).fromNow()}</time>
          </Styled.PostDate>
        </Styled.PostHeader>
        <div>{content && ReactHtmlParser(content)}</div>
        <Styled.PostImages>
          {images && images.length > 0 && (
            <Gallery layout={1} containerObj={containerObj} gallery={images} />
          )}
        </Styled.PostImages>
      </Styled.Post>
    );
  };

  return (
    <div>
      <div>{newsPost ? renderPost() : renderProgress()}</div>
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.string,
  newsPost: PropTypes.shape({
    content: PropTypes.string,
    createdAt: PropTypes.string,
    title: PropTypes.string,
    images: PropTypes.array,
  }),
  slug: PropTypes.string,
};

export default Post;
