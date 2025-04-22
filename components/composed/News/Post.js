import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import PropTypes from "prop-types";
import moment from "moment";
import Button from "@/components/atomic/Button";
import * as Styled from "./styles";
import { Gallery } from "@/components/atomic/Gallery";
import { useOnResize } from "@/hooks/listeners";
import { mobileBreakpoint } from "@/styles/mixins";
import {useRouter} from "next/router";

const Post = ({ nav, id, newsPost, navHandler }) => {
  const renderProgress = () => {
    return (
      <div>
        <br />
        LOADING
      </div>
    );
  };

  const [containerObj, setContainerObj] = useState();
  const [hasData, setHasData] = useState(false);
  const [mobile, setMobile] = useState(false);
  const router = useRouter();
  let wInt;

  const onResize = () => {
    if (document.querySelector(`#post_${id}`)) {
      setContainerObj({
        width: document.querySelector(`#post_${id}`).clientWidth - 60,
        height: window.innerHeight,
      });
    }
  };

  useOnResize(mobileBreakpoint, (isMobile) => {
    setMobile(isMobile);
  });

  useEffect(() => {
    wInt = wInt || window.addEventListener("resize", onResize);
    if (!hasData)
      setHasData(document.querySelector(`#post_${id}`) !== undefined);
    setContainerObj({
      width: document.querySelector(`#post_${id}`).clientWidth - 60,
      height: window.innerHeight,
    });
    document.getElementById("__next").scrollTop = 0;
    return function cleanup() {
      window.removeEventListener("resize", wInt);
    };
  }, [hasData]);

  const renderPost = () => {
    const { title, createdAt, content, images, videos } = newsPost;
    return (
      <Styled.Post id={`post_${id}`}>
        { nav && (
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
        )}
        <Styled.PostHeader>
          <Styled.PostTitle>{title}</Styled.PostTitle>

          <Styled.PostDate>
            <time dateTime={createdAt}>{moment(createdAt).fromNow()}</time>
          </Styled.PostDate>
        </Styled.PostHeader>
        <div>{content && ReactHtmlParser(content)}</div>
        {images && images.length > 0 && hasData && (
          <Styled.PostImages>

            {images.map((image, i) => {
                return (
                  <Styled.MobileImage key={i}>
                    <img src={image.url} onClick={() => {
                      image.link? window.open(image.link) : null

                    }}/>
                  </Styled.MobileImage>
                );
              })}
          </Styled.PostImages>
        )}
        <Styled.PostVideos className="videos">
          {videos &&
            videos.length > 0 &&
            videos.map((vid, i) => {
              return (
                <div key={i}>
                  <video playsInline poster={vid.poster} width="100%" controls>
                    <source src={vid.videoUrl} type="video/mp4" />
                  </video>
                </div>
              );
            })}
        </Styled.PostVideos>
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
