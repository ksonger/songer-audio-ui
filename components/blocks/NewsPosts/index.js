import React from "react";
import * as Styled from "./styles";
import PostList from "@/composed/News/PostList";

const NewsPosts = ({ items }) => {
  const sorted = items.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return (
    <Styled.BlockWrapper>
      <Styled.BlockMain>
        <PostList newsPosts={sorted} isLoading />
      </Styled.BlockMain>
    </Styled.BlockWrapper>
  );
};

export default NewsPosts;
