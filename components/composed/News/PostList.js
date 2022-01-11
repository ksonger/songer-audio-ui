import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { truncate } from "@/helpers";
import Post from "@/composed/News/Post";
import { useRouter } from "next/router";
import * as Styled from "./styles";

export const TRUNCATION_LIMIT = 150;

const PostList = ({ isLoading = true, newsPosts }) => {
  const [view, setView] = useState("list");
  const [id, setId] = useState();
  const [slug, setSlug] = useState();
  const [post, setPost] = useState();
  const router = useRouter();

  useEffect(() => {
    if (router.query.page[1] && view === "list") {
      const selected = newsPosts.filter((post) => {
        return post.slug === router.query.page[1];
      });
      selectPost(selected[0].slug, selected[0].id);
    }
  }, []);

  const selectPost = (slug, id) => {
    setSlug(slug);
    setId(id);
    const selected = newsPosts.filter((post) => {
      return post.slug === slug;
    });
    setPost(selected[0]);
    setView("post");
    router.push(`/news/${slug}`);
  };

  const selectList = () => {
    setView("list");
    router.push("/news");
  };

  return (
    <Styled.NewsWrapper>
      {view === "post" && slug && id && (
        <Post id={id} navHandler={selectList} newsPost={post} />
      )}
      {view === "list" && (
        <div>
          {/* posts */}
          {newsPosts.map(({ id, title, summary, createdAt, slug }, index) => (
            <Styled.List key={index}>
              <Styled.ListItem key={index}>
                <div
                  onClick={() => {
                    selectPost(slug, id);
                  }}
                >
                  <div>
                    <article style={{ lineHeight: 1.35 }}>
                      <Styled.ListItemTitle>{title}</Styled.ListItemTitle>
                      <p>{truncate(summary, TRUNCATION_LIMIT)}&hellip;</p>
                      <Styled.ListItemDate>
                        <time dateTime={createdAt}>
                          {moment(createdAt).fromNow()}
                        </time>
                      </Styled.ListItemDate>
                    </article>
                  </div>
                </div>
              </Styled.ListItem>
            </Styled.List>
          ))}
        </div>
      )}
    </Styled.NewsWrapper>
  );
};

PostList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  newsPosts: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.string,
      id: PropTypes.string,
      slug: PropTypes.string,
      summary: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export default PostList;
