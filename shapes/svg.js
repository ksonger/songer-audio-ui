import PropTypes from "prop-types";

export const svgProps = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stroke: PropTypes.string,
  fill: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  role: PropTypes.string,
};

export default svgProps;
