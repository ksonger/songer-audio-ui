import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";

export function Gallery({
  gallery,
  galleryId,
  scrollingEl,
  containerObj,
  hoverBehavior = "NEVER_SHOW",
  layout = 3,
}) {
  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: layout,
    hoveringBehaviour: hoverBehavior,
    clickToExpand: true,
    scrollDuration: 200,
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) => {
    switch (eventName) {
      case "ITEM_ACTION_TRIGGERED":
        console.log("show full image");
        break;
      default:
        console.log({ eventName, eventData });
        break;
    }
  };

  return (
    <>
      <ProGallery
        domId={`gallery_${galleryId}`}
        items={gallery}
        options={options}
        container={containerObj}
        eventsListener={eventsListener}
        scrollingElement={scrollingEl}
      />
    </>
  );
}
