import NextImage from "next/image";
import styled from "styled-components";
import imageProps from "@/shapes/image";

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
  const objectPosition = focalPoint
    ? focalPoint.map((coord) => coord * 100 + "%").join(" ")
    : "50% 50%";
  // next/image won't accept width/height values if layout === "fill"
  const dimensionProps = layout === "fill" ? {} : { width, height };
  const placeholderProps =
    placeholder !== "blur" ? {} : { placeholder, blurDataURL };

  return (
    <NextImage
      src={url}
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
