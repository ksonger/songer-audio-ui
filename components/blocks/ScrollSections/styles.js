import styled, { css } from "styled-components";

export const BlockWrapper = styled.main`
  margin: 0 auto;
  padding: 30px 4vw;
  max-width: var(--l-content-max);

  * + * {
    margin-top: 1.375em;
  }

  > .banner {
    margin-left: calc(50% - 50vw);
    width: 100vw;
    height: 37.5vmin;
    min-height: 15em;
    background: linear-gradient(#000, transparent, #000), var(--img) 50% / cover;
    background-attachment: fixed;
    background-blend-mode: multiply;

    &:nth-of-type(1) {
      --img: url(https://images.unsplash.com/photo-1509456592530-5d38e33f3fdd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }

    &:nth-of-type(2) {
      --img: url(https://images.unsplash.com/photo-1536056298178-a36a9ba0b0f5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }

    &:nth-of-type(3) {
      --img: url(https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }

    &:nth-of-type(4) {
      --img: url(https://images.unsplash.com/photo-1547675999-f71c79b90fb6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }

    &:nth-of-type(5) {
      --img: url(https://images.unsplash.com/photo-1476097297040-79e9e1603142?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }

    &:nth-of-type(6) {
      --img: url(https://images.unsplash.com/photo-1469533667357-006056eaf780?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }

    &:nth-of-type(7) {
      --img: url(https://images.unsplash.com/photo-1546896687-bb1645078119?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }

    &:nth-of-type(8) {
      --img: url(https://images.unsplash.com/photo-1499969942143-ad2a66bc72dc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }

    &:nth-of-type(9) {
      --img: url(https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }

    &:nth-of-type(10) {
      --img: url(https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }

    &:nth-of-type(11) {
      --img: url(https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }

    &:nth-of-type(12) {
      --img: url(https://images.unsplash.com/photo-1530915493757-0677252ffeee?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }

    &:nth-of-type(13) {
      --img: url(https://images.unsplash.com/photo-1525124541374-b7eaf79d0dbf?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }
  }
`;
