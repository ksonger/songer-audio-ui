import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";
import { useEffect, useState } from "react";

export function Gallery({
  gallery,
  galleryId,
  scrollingEl,
  hoverBehavior = "NEVER_SHOW",
  layout = 3,
}) {
  const [scrollingElement, setScrollingElement] = useState();
  const [container, setContainer] = useState();
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    console.log(scrollingEl);
    setScrollingElement(scrollingEl);
    setContainer({
      width: scrollingEl ? scrollingEl.clientWidth : 400,
      height: scrollingEl ? scrollingEl.clientHeight : 600,
    });
    setHasData(true);
  }, [scrollingEl]);

  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: layout,
    hoveringBehaviour: hoverBehavior,
    scrollDuration: 200,
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  // const eventsListener = (eventName, eventData) =>
  //   console.log({ eventName, eventData });

  return (
    <>
      {hasData && (
        <ProGallery
          domId={`gallery_${galleryId}`}
          items={gallery}
          options={options}
          container={container}
          // eventsListener={eventsListener}
          scrollingElement={scrollingElement}
        />
      )}
    </>
  );
}
