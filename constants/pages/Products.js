const Products = {
  products: [
    {
      blockType: "product",
      heading: `The S1 Loudspeaker`,
      description: `<p>The S1 delivers absolutely everything, by adding almost nothing; its greatest strength is its 
      well-constructed simplicity.  It is a piece of fine furniture, designed to look as equally beautiful in your
      listening room as it sounds.
      </p>
      <p>
      The S1 loudspeaker is a solid hardwood, hand-crafted 140 liter bass reflex design.  Each pair is hand 
      constructed from 100% kiln-dried hardwoods, in a variety of standard options or in a hardwood of your choosing.  
      It is well braced, internally lined and damped to eliminate unwanted cabinet resonances, and port tuned to 30Hz 
      for full, accurate bass response. The cabinet is acoustically isolated from its base and the floor, with solid brass risers. 
      </p>
      <p>
      The S1 minimally compensates for natural baffle diffraction, however it includes no additional internal components 
      of any kind. No additional drivers are used, preserving perfect phase presentation throughout the frequency range. 
      Because no multi-way crossover circuitry is necessary, your music isn't needlessly filtered, degraded or attenuated. 
      The S1 simply holds the driver perfectly still at ear level, showcasing its remarkable performance free of any 
      coloration, or distortion.
      </p>`,
      specs: [
        {
          label: `System`,
          value: `Point source full-range ported loudspeaker`,
        },
        { label: `Frequency Response`, value: `25Hz - 17kHz +/- 6dB` },
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
          itemId: "p1",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/s1_front.png",
          metaData: {
            type: "image",
            height: 1700,
            width: 2000,
            focalPoint: [0, 0],
          },
        },
        {
          itemId: "p2",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/sa1_front_down.png",
          metaData: {
            type: "image",
            height: 2000,
            width: 2208,
            focalPoint: [0, 0],
          },
        },
        {
          itemId: "p3",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/s1_driver_close.png",
          metaData: {
            type: "image",
            height: 2000,
            width: 2442,
            focalPoint: [0, 0],
          },
        },
        {
          // Image item:
          itemId: "p4",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/S1_port.png",
          metaData: {
            type: "image",
            height: 2000,
            width: 2086,
            focalPoint: [0, 0],
          },
        },
        {
          // Image item:
          itemId: "p5",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/sa1_top_close.png",
          metaData: {
            type: "image",
            height: 1000,
            width: 1109,
            focalPoint: [0, 0],
          },
        },
      ],
      measurements: [],
    },
    {
      blockType: "product",
      heading: `The PS1 Power Supply`,
      description: `<p>The PS1 is a very tightly regulated, very low impedance power supply. It is specifically 
      designed as a high nose rejection type, such that AC line noise and harmonic noise is not transferred to 
      the DC regulated output powering the field coil.  This unique feature damps any induced motor 
      voice coil modulated signal from the field coil, shunting this AC induced audio signal at the power supply.</p>
      <p>The result is "locked down" pure DC power to the driver, with no overlying AC audio signal.</p>
      <p>The supply is adjustable from 9 to 13 volts, and can deliver constant DC current up to 2 amps. This allows the
      listener to significantly modify the "total Q" and overall character of a loudspeaker, and thereby tune it
      to their personal listening preference.
      </p><p>The rejection ratio of this regulated supply is over 70 dB. Input power is configurable to order, for 115 or 230 
      volt 50/60 Hz operation. Two 6-foot XLR cables are included as standard, however they can also be configured to your needs.
      </p><p>We are delighted that <a href="http://www.whammerdyne.com" target="_blank">Whammerdyne Heavy Industries</a> manufacturers these 
      remarkable power supplies in a partnership with Songer Audio.</p>`,
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
          itemId: "p6",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/ps1_front.png",
          metaData: {
            type: "image",
            height: 1000,
            width: 978,
            focalPoint: [0, 0],
          },
        },
        {
          // Another Image item:
          itemId: "p7",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/ps1_back.png",
          metaData: {
            type: "image",
            height: 1000,
            width: 814,
            focalPoint: [0, 0],
          },
        },
        {
          // Another Image item:
          itemId: "p8",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/ps1_display.png",
          metaData: {
            type: "image",
            height: 1000,
            width: 665,
            focalPoint: [0, 0],
          },
        },
        {
          // Another Image item:
          itemId: "p9",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/ps1_ph_nov8.png",
          metaData: {
            type: "image",
            height: 1000,
            width: 761,
            focalPoint: [0, 0],
          },
        },
      ],
      measurements: [],
    },
    {
      blockType: "product",
      heading: `In Development: The S2 Loudspeaker`,
      description: `<p>The S2 is an open baffle concept speaker I've been working on for the past year.  When I began
        Songer Audio, I intended to build two primary speakers.  The first, a ported single driver design, is the S1.  The 
        second was to be something that showcases the beauty of the driver itself, likely on an open baffle.</p>
      <p>Like the S1, the construction quality and materials of the S2 are without compromise.  The hardwood baffles are internally
      reinforced with thick aluminum bars to prevent resonances.  To further eliminate any distortion and resonance, the field 
      coil driver is "magnet mounted" by a large M10 bolt in the electromagnet housing. This allows it to float in space, 
      without the driver making any contact the upper baffle. 
      <p>The field coil driver has been modified for this design, which I am calling Type D.  Leveraging the acoustic transparency
      of the suspension design, it adds a novel rear-firing whizzer - the first of its kind to my knowledge, and makes a big
       contribution to the overall treble performance and balance of this dipole loudspeaker.  It isn't pictured in the images
       below, but there are a few shots of it on the gallery page.</p>
       <p>Also like the S1, the field coil is allowed to run wide open, with only compensation for baffle diffraction.
      Below 200Hz, it is assisted by an Acoustic Elegance LO15-D16 woofer for extremely accurate overall bass response.  It 
      is "port constrained", which acts similarly to slot loading.  This lowers resonant frequency and increases the forward 
      output of the driver, while reducing back wave cancellation.  Look for more details in the coming year.</p>`,
      specs: [
        {
          label: `System`,
          value: `Dipole 1.5-way open baffle loudspeaker`,
        },
        { label: `Frequency Response`, value: `40Hz - 20kHz +/- 6dB` },
        { label: `Efficiency`, value: `93 dB SPL (2.83 V/1m)` },
        { label: `Dimensions`, value: `(W x H x D) 20 x 48 x 17 in` },
        { label: `Materials`, value: `Hardwood, brass, and aluminum` },
        { label: `Weight`, value: `130 lbs` },
        {
          label: `Connections`,
          value: `5-way Cardas binding posts, 3-pin Cardas XLR power`,
        },
      ],
      price: `TBD`,
      galleryId: "s2",
      gallery: [
        {
          itemId: "p10",
          url: "./s2.png",
          metaData: {
            type: "image",
            height: 1800,
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
          itemId: "p11",
          url: "./s2_back_1.jpeg",
          metaData: {
            type: "image",
            height: 1200,
            width: 1600,
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
          itemId: "p12",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/s2_onimaru_close_shop.png",
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
          itemId: "p13",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/s2_lo15_close_shop.png",
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
          itemId: "p14",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/s2_ph_both_nov8.png",
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
  ],
};

export default Products;
