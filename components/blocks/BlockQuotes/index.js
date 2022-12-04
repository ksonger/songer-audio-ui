import PropTypes from "prop-types";
import Blockquote from "@/components/atomic/Blockquote";
import * as Styled from "./styles";

const Blockquotes = ({ quotes }) => {
  if (!quotes) return null;

  return (
    <Styled.BlockQuotes>
      {quotes.map((quote, i) => (
        <Blockquote
          key={i}
          quotation={quote.quotation}
          attribution={quote.attribution}
          link={quote.link}
        />
      ))}
    </Styled.BlockQuotes>
  );
};

Blockquotes.displayName = "Atomics.Blockquotes";

Blockquotes.propTypes = {
  quotes: PropTypes.array.isRequired,
};

export default Blockquotes;
