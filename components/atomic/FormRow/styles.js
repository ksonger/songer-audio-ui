import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { fluidScale, respond } from "@/styles/mixins";

export const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1em;
grid-template-columns: 1fr 1fr;
  ${respond(
    css`
      grid-auto-flow: row;
      gap: 0;
    `,
    "800px"
  )}
`;
