import PropTypes from "prop-types";
import * as Styled from "./styles";

const Blockquote = ({ quotation, attribution, link, className }) => {
  if (!quotation) return null;

  return (
    <Styled.BlockQuote>
      {link && <Styled.BlockLink target="blank" href={link} />}
      <Styled.Quotation>
        <span dangerouslySetInnerHTML={{ __html: quotation }} />
      </Styled.Quotation>
      {attribution && (
        <Styled.Attribution>
          <cite className={`${className}__attribution`}>{attribution}</cite>
        </Styled.Attribution>
      )}
    </Styled.BlockQuote>
  );
};

Blockquote.displayName = "Atomics.Blockquote";

Blockquote.propTypes = {
  quotation: PropTypes.string.isRequired,
  attribution: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
};

export default Blockquote;
