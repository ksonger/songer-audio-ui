import styled, { css } from "styled-components";
import { respond, fluidScale } from "@/styles/mixins";

export const NewsWrapper = styled.div`
  margin: 0 auto;
  max-width: 1100px;
`;

export const Main = styled.div`
  color: rgba(255, 255, 255, 0.85);
  padding: 0 20px;
  margin-top: 70px;
  width: 100%;
  max-width: 920px;
`;

export const List = styled.li`
  color: rgba(40, 40, 40, 0.8);
  list-style-type: none;
  width: 100%;
  h2 {
    color: rgba(131, 184, 201, 0.85);
  }
`;

export const ListItem = styled.ul`
  border: 1px solid #bbb;
  background: #eee;
  padding: 24px;
  margin-bottom: 24px;
  width: 100%;
  cursor: pointer;

  > p {
    margin: 30px 0 12px 0;
  }
`;

export const ListItemTitle = styled.span`
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  color: var(--button-background-color);
`;

export const ListItemDate = styled.div`
  text-align: right;
  font-style: italic;
  color: rgba(140, 140, 140, 1);
`;

export const Post = styled.div`
  border: 1px solid #bbb;
  background: #eee;
  padding: 30px;
  width: 100%;
  max-width: 920px;
`;

export const BackButton = styled.div`
  margin-bottom: 24px;
`;

export const PostHeader = styled.div`
  border-bottom: 1px solid rgba(131, 184, 201, 0.35);
  padding: 0 12px 12px 0;
  margin-bottom: 18px;
  display: grid;
  grid-auto-flow: column;
  font-size: 24px;
`;

export const PostTitle = styled.div`
  color: rgba(100, 100, 100, 1);
`;

export const PostDate = styled.div`
  font-size: 13px;
  text-align: right;
  color: rgba(160, 160, 160, 1);
`;

export const PostTime = styled.div`
  font-style: italic;
  color: rgba(255, 255, 255, 0.35);
`;

export const PostImages = styled.div`
  margin-top: 40px;
  & img {
    border: 2px solid rgba(230, 204, 142, 0.85);
    cursor: pointer;
  }
  ${respond(
    css`
      text-align: center;
    `
  )}
`;

export const MobileImage = styled.div`
  margin-bottom: 40px;
`;

export const PostVideos = styled.div`
  margin-top: 40px;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr 1fr;
  gap: 1em;
  & video {
    border: 2px solid rgba(230, 204, 142, 0.85);
    cursor: pointer;
  }

  ${respond(
    css`
      grid-auto-flow: row;
    `
  )}
`;
