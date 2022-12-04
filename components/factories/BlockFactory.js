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
  newslink: Blocks.Newslink,
  blockQuotes: Blocks.BlockQuotes,
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
