import styled from "styled-components";

export const ModalImage = styled.div`
  padding: 20px;
  &.wide {
    width: 100%;
    max-width: 100%;
  }

  &.tall {
    height: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  > img {
    &.wide {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
    &.tall {
      height: 100%;
      max-height: 100%;
    }
  }
`;
