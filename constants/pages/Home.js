const Home = {
  home: [
    {
      blockType: "banner",
      message: `<p>
        Join us at the <a href="https://pacificaudiofest.com" target="_blank">2022 Pacific AudioFest!</a>
        </p>`,
    },
    {
      blockType: "mission",
      heading: `The medium is engineering. The result is art.`,
      description: `Songer Audio field coil loudspeakers and drivers are functional works of art, of uncompromising craftsmanship. Each piece is 100% designed, made and assembled by hand. Our products express a philosophy of simplicity, excellence, and a relentless dedication to provide the purest possible experience of music.`,
    },
    {
      blockType: "card",
      type: "default",
      orientation: "left",
      image: {
        url: "/products_driver_web.png",
        width: 1000,
        height: 993,
        alt: "Onimaru Driver",
      },
      heading: `An Old and New Design`,
      description: `
        <p>
        The product of years of research and development, the Songer Audio 10" V2 electromagnetic speaker 
        is entirely hand made, by an individual craftsman from the finest materials.  It offers exceptionally 
        lifelike musical reproduction for a variety of design applications.
        </p>
        <p>
        Built upon field coil technology that is nearly 150 years old, it captures the best of the old and 
        combines it with modern refinement, innovative design, and meticulous construction. The result is an 
        artistic expression, dedicated solely to connecting others as closely as possible to the beauty of music.
        </p>`,
      cta: {
        label: "Learn More",
        uri: "/technology",
      },
    },
    {
      blockType: "card",
      type: "blue",
      orientation: "right",
      image: {
        url: "/prod_loudspeaker_web_v2.png",
        width: 1333,
        height: 1061,
        alt: "S1 Loudspeaker",
        focalPoint: [0.5, 0],
      },
      heading: `Phase Perfect, Full Range`,
      description: `
        <p>
        Newly updated with our latest field coil driver, the S1 loudspeaker delivers phase perfect, full-range 
        sound +/- 3dB from 30Hz - 17kHz.  Constructed of 
        all solid hardwoods and brass hardware, it's meant to be as beautiful to look at as it is to listen to.
        </p>
        <p>
        Its excellent performance 
        is owed to its simplicity; internally it compensates for natural cabinet diffraction and nothing else. Tuned for 
        deep, accurate bass, it is a showcase for the superb detail, clarity and imaging of our driver.
        </p>`,
      cta: {
        label: "Learn More",
        uri: "/products",
      },
    },
    {
      blockType: "card",
      type: "default",
      orientation: "left",
      image: {
        url: "/sa_psu.png",
        width: 1500,
        height: 1200,
        alt: "SA Power Supply",
      },
      heading: `DC Regulated Power`,
      description: `
        <p>
        Songer Audio's tightly regulated, low impedance, high nose rejection design removes all AC line 
        and harmonic noise from DC regulated output.  This unique feature eliminates induced voice coil 
        modulation, shunting it at the power supply. The result is pure DC power to the field coil magnet, with no 
        overlying AC audio signal.
        </p>
        <p>
        The supply is able to provide constant current up to 2 amps.  Adjustable from 9 to 12.5 volts and 
        able to, listeners have the freedom to tune the performance of the speaker to their personal listening taste.
        </p>`,
      cta: {
        label: "Learn More",
        uri: "/products",
      },
    },
  ],
};

export default Home;
