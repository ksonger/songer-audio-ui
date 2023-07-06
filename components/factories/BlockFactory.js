import PropTypes from "prop-types";
import * as Blocks from "@/components/blocks";

const BLOCK_MAP = {
  mission: Blocks.Mission,
  card: Blocks.Card,
  scrollSections: Blocks.ScrollSections,
  newsPosts: Blocks.NewsPosts,
  product: Blocks.Product,
  pageGallery: Blocks.PageGallery,
  listenForm: Blocks.ListenForm,
  banner: Blocks.Banner,
  newsLink: Blocks.Newslink,
  awardBlade: Blocks.AwardBlade,
  blockQuotes: Blocks.BlockQuotes,
  slideShow: Blocks.Slideshow,
  testimonial: Blocks.Testimonial,
  testimonials: Blocks.Testimonials,
  socials: Blocks.Socials,
};

const BlockFactory = ({ type, data, blockMap = BLOCK_MAP }) => {
  const Block = blockMap[type];
  if (!Block) return null;
  return <Block {...data} />;
};

BlockFactory.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  blockMap: PropTypes.object,
};

export default BlockFactory;
