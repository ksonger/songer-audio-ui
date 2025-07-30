import PropTypes from "prop-types";
import * as Blocks from "@/components/blocks";

const BLOCK_MAP = {
  mission: Blocks.Mission,
  card: Blocks.Card,
  scrollSections: Blocks.ScrollSections,
  newsPosts: Blocks.NewsPosts,
  product: Blocks.Product,
  show: Blocks.Show,
  pageGallery: Blocks.PageGallery,
  listenForm: Blocks.ListenForm,
  reservationForm: Blocks.ReservationForm,
  contactForm: Blocks.ContactForm,
  banner: Blocks.Banner,
  newsLink: Blocks.Newslink,
  pressLinks: Blocks.PressLinks,
  reviewBlade: Blocks.ReviewBlade,
  awardBlade: Blocks.AwardBlade,
  blockQuotes: Blocks.BlockQuotes,
  slideShow: Blocks.Slideshow,
  testimonial: Blocks.Testimonial,
  testimonials: Blocks.Testimonials,
  socials: Blocks.Socials,
};

const BlockFactory = ({ type, data, blockMap = BLOCK_MAP }) => {
  console.log(type);
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
