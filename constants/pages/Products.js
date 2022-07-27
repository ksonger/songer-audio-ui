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
        { label: `Frequency Response`, value: `30Hz - 20kHz +/- 6dB` },
        { label: `Efficiency`, value: `90 dB` },
        { label: `Dimensions`, value: `(W x H x D) 15 x 47 x 20 in` },
        { label: `Materials`, value: `Hardwood, brass` },
        { label: `Weight`, value: `120 lbs` },
        {
          label: `Connections`,
          value: `5-way Cardas binding posts, 3-pin Cardas XLR power`,
        },
      ],
      price: `$37,000 (pair)`,
      galleryId: "s1",
      anchorName: "a_s1",
      gallery: [
        {
          itemId: "p1",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/s1.png",
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
      heading: `The S2 Loudspeaker`,
      description: `<p>Like the S1, the construction quality and materials of the S2 are without compromise.  The front baffles are constructed 
      of 1.7 inch thick solid hardwood.  To further eliminate distortion and resonance, the field 
      coil driver is "magnet mounted" via the electromagnet housing to a 2.5 inch thick hardwood and glass-filled nylon support. 
      This allows it to be all but entirely suspended in space, where it cannot transfer vibration to the front baffle. 
      <p>The field coil driver has been modified for this design, leveraging the acoustic transparency of the driver suspension.  
      It incorporates a novel, rear-firing whizzer which contributes to superb overall tonal balance and energy.  As simply another part of the 
      point source driver, the rear whizzer does not suffer from multi-way phase or timing issues. That benefit translates into a wonderful 
      sense of live musical performance, with outstanding imaging and soundstage depth.</p>
       <p>The Type D field coil is allowed to run full range, with only compensation for baffle diffraction.
      Below 230Hz however, it is assisted by an Acoustic Elegance LO15 woofer for extremely accurate overall bass response.  It 
      is "port constrained" in the front, and employs an open, folded baffle design in the back.  These design features lower free resonance,
      increase efficiency, and reduce wave cancellations for rich overall bass performance.  Dual binding posts offer the option to
      run bridged passively, or to bi-amp for large listening spaces.</p>`,
      specs: [
        {
          label: `System`,
          value: `Dipole 1.5-way open baffle loudspeaker`,
        },
        {
          label: `Frequency Response`,
          value: `30Hz - 20kHz +/- 6dB (passive)`,
        },
        { label: `Efficiency`, value: `91 dB` },
        { label: `Dimensions`, value: `(W x H x D) 21 x 47 x 15 in` },
        {
          label: `Materials`,
          value: `Hardwood, brass, glass-filled nylon`,
        },
        { label: `Weight`, value: `150 lbs` },
        {
          label: `Connections`,
          value: `Dual 5-way Cardas binding posts, 3-pin Cardas XLR power`,
        },
      ],
      price: `$37,000 (pair)`,
      galleryId: "s2",
      anchorName: "a_s2",
      gallery: [
        {
          itemId: "p10",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/s2/S2_banner_1.png",
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
          itemId: "p11",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/s2/driver_top.png",
          metaData: {
            type: "image",
            height: 1737,
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
          itemId: "p12",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/s2/onimaru.png",
          metaData: {
            type: "image",
            height: 1737,
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
          itemId: "p13",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/s2/s2_single_back.png",
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
          // Image item:
          itemId: "p14",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/s2/s2_fc_back_close.png",
          metaData: {
            type: "image",
            height: 2000,
            width: 1416,
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
          itemId: "p15",
          url: "https://s3.us-west-2.amazonaws.com/songeraudio.com/gallery/s2/S2_banner_2.png",
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
      ],
      measurements: [],
    },
    {
      blockType: "product",
      heading: `The PS1 Power Supply`,
      description: `<p>The PS1 is a very tightly regulated, very low impedance power supply. It is specifically 
      designed as a high noise rejection type, such that AC line noise and harmonic noise is not transferred to 
      the DC regulated output powering the field coil.  This unique feature damps any induced motor 
      voice coil modulated signal from the field coil, shunting this AC induced audio signal at the power supply.</p>
      <p>The result is "locked down" pure DC power to the driver, with no overlying AC audio signal.</p>
      <p>The supply is adjustable from 9 to 12.5 volts, and can deliver constant DC current up to 2 amps. This allows the
      listener to significantly modify the "total Q" and overall character of a loudspeaker, and thereby tune it
      to their personal listening preference.
      </p><p>The rejection ratio of this regulated supply is over 70 dB. Input power is configurable to order, for 115 or 230 
      volt 50/60 Hz operation. Two 6-foot XLR cables are included as standard, however they can also be configured to your needs.
      </p><p>We are delighted that <a href="http://www.whammerdyne.net" target="_blank">Whammerdyne Heavy Industries</a> manufacturers these 
      remarkable power supplies in a partnership with Songer Audio.</p>`,
      specs: [
        { label: `System`, value: `DC Regulated Power Supply` },
        { label: `Voltage`, value: `Variably Adjustable, 9 - 12.5 Volts` },
        { label: `Current`, value: `Constant DC Current up to 2 Amps` },
        { label: `Dimensions`, value: `(W x H x D) 9 x 4 x 7.25 in` },
        { label: `Materials`, value: `Anodized Aluminum Chassis` },
        { label: `Weight`, value: `8.2 lbs` },
        { label: `Connections`, value: `3-pin XLR power` },
      ],
      price: `$3,000 (pair)`,
      galleryId: "ps1",
      anchorName: "a_ps1",
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
  ],
};

export default Products;
