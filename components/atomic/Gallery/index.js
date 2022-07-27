import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";
import Modal from "@/components/atomic/Modal";
import React, { useState } from "react";
import * as Styled from "./styles";
import { useRouter } from "next/router";
import { useDialogState } from "reakit/Dialog";

export function Gallery({
  gallery,
  galleryId,
  scrollingEl,
  containerObj,
  hoverBehavior = "NEVER_SHOW",
  layout = 3,
  minSize,
}) {
  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: layout,
    minItemSize: minSize,
    maxGroupSize: 2,
    hoveringBehaviour: hoverBehavior,
    clickToExpand: true,
    scrollDuration: 200,
  };

  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState({});
  const [cls, setCls] = useState("wide");

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) => {
    switch (eventName) {
      case "ITEM_ACTION_TRIGGERED":
        if (router.asPath === "/gallery") {
          setSelectedImage({ url: eventData.url });
          setTimeout(() => {
            if (eventData.style.maxHeight > eventData.style.maxWidth) {
              setCls("tall");
            } else {
              setCls("wide");
            }
            document.dispatchEvent(new Event("openDialog"));
          }, 0);
        }
        break;
      default:
        //console.log({ eventName, eventData });
        break;
    }
  };

  return (
    <>
      <Modal
        type="gallery"
        content={
          <Styled.ModalImage className={cls}>
            <img
              aria-label="gallery image"
              src={selectedImage.url}
              className={cls}
            />
          </Styled.ModalImage>
        }
      />
      <ProGallery
        domId={`gallery_${galleryId}`}
        items={gallery}
        options={options}
        container={containerObj}
        eventsListener={eventsListener}
        scrollingElement={scrollingEl}
        proGalleryRole="application"
      />
    </>
  );
}
