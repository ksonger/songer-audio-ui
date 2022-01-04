const Products = {
  products: [
    {
      blockType: "product",
      heading: `The S1 Loudspeaker`,
      description: `Songer Audio's first loudspeaker is a solid hardwood, hand-crafted 140 liter 
      bass reflex design. The Enso is a singular expression of the years of research and development 
      that resulted in the Onimaru field coil driver. It delivers true full-range sound across the 
      frequency spectrum with breathtaking detail, phase accuracy, imaging and transients.`,
      specs: [
        {
          label: `System`,
          value: `Point source full-range ported loudspeaker`,
        },
        { label: `Frequency Response`, value: `30Hz - 17kHz +/- 3dB` },
        { label: `Efficiency`, value: `93 dB SPL (2.83 V/1m)` },
        { label: `Dimensions`, value: `(W x H x D) 15 x 47 x 20 in` },
        { label: `Materials`, value: `Hardwood, brass, and leather` },
        { label: `Weight`, value: `120 lbs` },
        {
          label: `Connections`,
          value: `5-way Cardas binding posts, 3-pin Cardas XLR power`,
        },
      ],
      price: `$19,000`,
      galleryId: "s1",
      gallery: [
        {
          itemId: "1",
          mediaUrl: "./s1_front.png",
          metaData: {
            type: "image",
            height: 1700,
            width: 2000,
            title: "sample-title",
            description: "sample-description",
            focalPoint: [0, 0],
            link: {
              url: "http://example.com",
              target: "_blank",
            },
          },
        },
        {
          itemId: "2",
          mediaUrl: "./sa1_front_down.png",
          metaData: {
            type: "image",
            height: 2000,
            width: 2208,
            title: "sample-title",
            description: "sample-description",
            focalPoint: [0, 0],
            link: {
              url: "http://example.com",
              target: "_blank",
            },
          },
        },
        {
          itemId: "3",
          mediaUrl: "./s1_driver_close.png",
          metaData: {
            type: "image",
            height: 2000,
            width: 2442,
            title: "sample-title",
            description: "sample-description",
            focalPoint: [0, 0],
            link: {
              url: "http://example.com",
              target: "_blank",
            },
          },
        },
        {
          // Image item:
          itemId: "4",
          mediaUrl: "/s1_port.png",
          metaData: {
            type: "image",
            height: 2000,
            width: 2086,
            title: "sample-title",
            description: "sample-description",
            focalPoint: [0, 0],
            link: {
              url: "http://example.com",
              target: "_blank",
            },
          },
        },
        {
          // Image item:
          itemId: "5",
          mediaUrl: "/sa1_top_close.png",
          metaData: {
            type: "image",
            height: 1000,
            width: 1109,
            title: "sample-title",
            description: "sample-description",
            focalPoint: [0, 0],
            link: {
              url: "http://example.com",
              target: "_blank",
            },
          },
        },
      ],
      measurements: [],
    },
    {
      blockType: "product",
      heading: `The PS1 Power Supply`,
      description: `This power supply is especially designed as a high nose rejection type so AC line noise and harmonic
      noise is not transferred to the DC regulated output that powers the field coil, it is a very tightly regulated
      and of a very low impedance design. This unique feature damps or shunts any induced motor voice coil
      modulated signal from the field coil or shunts this AC induced audio signal at the power supply. The
      result is a “locked” down pure DC power to the filed coil with no overlying AC audio signal. Pure DC and
      low impedance. The power supply is adjustable from 9 to 12.5 volts and can supply constant DC current
      up to 2 amps. The rejection ratio of this regulated supply is over 70 dB. Its input power is selectable for
      115/230 volt 50/60 Hz operation. (configured at time of order) Output DC is supplied though an XLR
      connector (2 to 6-foot XLR to XLR cables are available or XLR to open wire on opposite end for user
      connection)
      These power supplies can be used on most other Field Coil operated speaker drivers
      Inquire to Songer Audio for additional details (www.songeraudio.com)
      Whammerdyne Heavy Industries (www.whammerdyne.com) is the manufacturer of these supplies for
      Songer Audio`,
      specs: [
        { label: `System`, value: `DC Regulated Power Supply` },
        { label: `Voltage`, value: `Variably Adjustable, 9 - 13 Volts` },
        { label: `Current`, value: `Constant DC Current up to 2 Amps` },
        { label: `Dimensions`, value: `(W x H x D) 9 x 4 x 7.25 in` },
        { label: `Materials`, value: `Anodized Aluminum Chassis` },
        { label: `Weight`, value: `8.2 lbs` },
        { label: `Connections`, value: `3-pin XLR power` },
      ],
      price: `$2,000 (pair)`,
      galleryId: "ps1",
      gallery: [
        {
          // Image item:
          itemId: "6",
          mediaUrl: "/psu_front.png",
          metaData: {
            type: "image",
            height: 1300,
            width: 1272,
            title: "sample-title",
            description: "sample-description",
            focalPoint: [0, 0],
            link: {
              url: "http://example.com",
              target: "_blank",
            },
          },
        },
        {
          // Another Image item:
          itemId: "7",
          mediaUrl: "/psu_back.png",
          metaData: {
            type: "image",
            height: 1300,
            width: 1058,
            title: "sample-title",
            description: "sample-description",
            focalPoint: [0, 0],
            link: {
              url: "http://example.com",
              target: "_blank",
            },
          },
        },
        {
          // Another Image item:
          itemId: "8",
          mediaUrl: "/psu_display.png",
          metaData: {
            type: "image",
            height: 1500,
            width: 997,
            title: "sample-title",
            description: "sample-description",
            focalPoint: [0, 0],
            link: {
              url: "http://example.com",
              target: "_blank",
            },
          },
        },
      ],
      measurements: [],
    },
  ],
};

export default Products;
