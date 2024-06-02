const PS1 = {
    ps1: [
        {
            blockType: "product",
            id: "ps1",
            heading: `THE PS1 POWER SUPPLY`,
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

export default PS1;
