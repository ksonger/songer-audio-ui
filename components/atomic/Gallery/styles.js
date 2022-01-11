import styled from "styled-components";

export const ModalImage = styled.div`
  padding: 20px;
  &.wide {
    width: 100%;
    max-width: 100%;
  }

  &.tall {
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
      max-height: 100%;
    }
  }
`;
