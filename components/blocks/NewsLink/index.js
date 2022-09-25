import React from "react";
import * as Styled from "./styles";
import { useRouter } from "next/router";

const Newslink = ({ message }) => {
  const router = useRouter();
  return (
    <Styled.Newslink>
      <Styled.Message dangerouslySetInnerHTML={{ __html: message }} />
    </Styled.Newslink>
  );
};

export default Newslink;
