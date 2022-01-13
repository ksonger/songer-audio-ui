import Image from "next/image";
import imageProps from "@/shapes/image";

const AtomicImage = ({
  image,
  priority = false,
  sizes,
  layout = "responsive",
  quality = 50,
  objectFit,
  placeholder = "empty",
  className,
}) => {
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

  const customLoader = ({ src, width, quality }) => {
    return `https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  return (
    <Image
      src={url}
      alt={altText || ""}
      loader={customLoader}
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
};

AtomicImage.displayName = "Atomics.Image";

AtomicImage.propTypes = imageProps;

AtomicImage.displayName = "Styled.Atomics.Image";

export default AtomicImage;
