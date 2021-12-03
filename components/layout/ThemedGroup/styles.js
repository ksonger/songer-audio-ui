import styled from "styled-components";
import { Image } from "@/atomics";
import { fluidScale } from "@/styles/mixins/common";
import { logicalWithFallback } from "@/styles/mixins/layout";

export const Wrapper = styled.section`
  position: relative;
  ${logicalWithFallback({
    "padding-block-start": "var(--container-block-start-padding)",
    "padding-block-end": "var(--container-block-end-padding)",
  })}
`;

export const BgImage = styled(Image)`
  background-color: transparent;
`;

export const Inner = styled.div`
  position: relative;

  & > * + * {
    ${logicalWithFallback({
      "margin-block-start": `var(--themed-group-gap, ${fluidScale(
        "75px",
        "24px"
      )})`,
    })}
  }
`;
