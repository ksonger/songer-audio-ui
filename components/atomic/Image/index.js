import NextImage from "next/image";
import styled from "styled-components";
import imageProps from "@/shapes/image";
import { isAbsoluteUrl } from "@/helpers/url";

const BASE_URL = process.env.NEXT_PUBLIC_PRIVATE_BASE_URL;

function getServerImageUrl(url) {
  const urlObj = new URL(url);
  return `${BASE_URL}${urlObj.pathname}`;
}

function normalizeImageUrl(url) {
  // if URL is relative, let's assume it's in the `public` dir
  if (!isAbsoluteUrl(url)) return url;
  // otherwise let's assume it's coming from Craft
  return getServerImageUrl(url);
}

function Image({
  image,
  priority = false,
  sizes,
  layout = "responsive",
  quality = 50,
  objectFit,
  placeholder = "empty",
  className,
}) {
  if (!image?.url) return null;

  const {
    url,
    altText,
    width,
    height,
    focalPoint,
    placeholder: blurDataURL,
  } = image;
  const objectPosition = focalPoint ? focalPoint.map((coord) => coord * 100 + "%").join(" ") : "right top";
  // next/image won't accept width/height values if layout === "fill"
  const dimensionProps = layout === "fill" ? {} : { width, height };
  const placeholderProps =
    placeholder !== "blur" ? {} : { placeholder, blurDataURL };

  return (
    <NextImage
      src={normalizeImageUrl(url)}
      alt={altText || ""}
      priority={priority}
      sizes={sizes}
      layout={layout}
      quality={quality}
      objectFit={objectFit}
      objectPosition={objectPosition}
      className={className}
      {...placeholderProps}
      {...dimensionProps}
    />
  );
}

Image.displayName = "Atomics.Image";

Image.propTypes = imageProps;

const StyledImage = styled(Image)`
  background-color: var(--box-bg-color);
`;

StyledImage.displayName = "Styled.Atomics.Image";

export default StyledImage;
