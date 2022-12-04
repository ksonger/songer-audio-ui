const Home = {
  home: [
    {
      blockType: "banner",
      message: `<p>
        We Invite You To <a href="https://www.songeraudio.com/listen" target="_self">Experience Songer Audio</a>
        </p>`,
    },
    {
      blockType: "newslink",
      message: `<p>
        Winner of Positive Feedback's <a href="https://positive-feedback.com/audio-discourse/pacific-audio-fest-2022-4/" target="_blank"> 2022 Pacific Audiofest Oasis! Award</a>
        </p>`,
    },
    {
      blockType: "blockQuotes",
      quotes: [
        {
          quotation:
            "There was a seductive and powerful musicality that exuded real presence and an organic harmonic structure that appealed to me enormously...my emotional connection with the music here was one of the most potent moments at PAF 2022 for me.",
          attribution: "- Dr. David Robinson, Positive Feedback",
          link: "https://positive-feedback.com/audio-discourse/pacific-audio-fest-2022-4/",
        },
        {
          quotation:
            "The Songer Audio S1 driven by the Whammerdyne DGA-Ultra delivered what I thought was possibly the best sound of the show.  These speakers sound so effortless, coherent, natural, and dynamic.  They extend to 20Khz and down to 29hz (-6dB), so they’re easily a ‘full-range’ speaker...",
          attribution: "- CAH, Audio Resurgence",
          link: "https://www.audioresurgence.com/2022/11/songer-audio-whammerdyne-at-capital-audiofest-2022.html",
        },
        {
          quotation:
            "Ella Fitzgerald's \"When Your Alone\" and Kraftwerk's Tour de France had surprising depth, girth, and sensuality. I longed to hear this capable rig playing vinyl, but no turntable manufacturer had yet teamed up with Ken Songer. What are you waiting for?",
          attribution: "- Ken Micallef, Stereophile",
          link: "https://www.stereophile.com/content/songer-audiowhammerdyne-audio",
        },
        {
          quotation:
            "The soundstage is huge - wide, deep and so lifelike its uncanny.  It's as if the musicians are right in the room, all properly placed, as if you were at the recording event.",
          attribution: "- Patrick Hickman, Whammerdyne",
          link: "https://www.whammerdyne.com",
        },
      ],
    },
    {
      blockType: "mission",
      style: "home",
      heading: `The medium is engineering. The result is art.`,
      description: `Songer Audio field coil loudspeakers and drivers are functional works of art, of uncompromising craftsmanship. Each piece is 100% designed, made and assembled by hand. Our products express a philosophy of simplicity, excellence, and a relentless dedication to provide the purest possible experience of music.`,
    },
    {
      blockType: "card",
      type: "default",
      orientation: "left",
      image: {
        url: "products_driver_web_home.png",
        width: 1000,
        height: 1117,
        alt: "Onimaru Driver",
      },
      heading: `An Old and New Design`,
      description: `
        <p>
        The product of years of research and development, the Songer Audio 10" V3 electromagnetic speaker 
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
        url: "s1_web_home.png",
        width: 1000,
        height: 1673,
        alt: "S1 Loudspeaker",
        focalPoint: [0.5, 0],
      },
      heading: `Phase Perfect, Full Range`,
      description: `
        <p>
        Newly updated with our V3 field coil driver, the S1 loudspeaker delivers phase perfect, full-range 
        sound +/- 3dB from 32Hz - 20kHz.  Constructed of all solid hardwoods and brass hardware, it's meant 
        to be as beautiful to look at as it is to listen to.
        </p>
        <p>
        Its excellent performance is owed to its simplicity; internally it compensates for natural cabinet 
        diffraction and nothing else. Tuned for deep, accurate bass, it is a showcase for the superb detail, 
        clarity and imaging of our driver.
        </p>`,
      cta: {
        label: "Learn More",
        uri: "/products#a_s1",
      },
    },
    {
      blockType: "card",
      type: "blue",
      orientation: "left",
      image: {
        url: "s2_web_home.png",
        width: 1000,
        height: 1673,
        alt: "S2 Loudspeaker",
        focalPoint: [0.5, 0],
      },
      heading: `Groundbreaking Dipole Performance`,
      description: `
        <p>
        The S2 loudspeaker is truly revolutionary in its design.  It utilizes our Type D Songer Audio driver,
        the first in the world to employ both front and rear-firing whizzer cones, both from the same, phase perfect
        full range point source. The listening experience is an uncannily lifelike musical presentation, wonderfully 
        free of phase and timing issues, full of open baffle musicality, and energy.
        </p>
        <p>
        Paired with the superbly musical Acoustic Elegance LO15 woofer, the S2 offers full, accurate bass performance 
        from 34Hz to 20kHz, +/- 3dB.
        </p>`,
      cta: {
        label: "Learn More",
        uri: "/products#a_s2",
      },
    },
    {
      blockType: "card",
      type: "default",
      orientation: "right",
      image: {
        url: "sa_psu_home.png",
        width: 1000,
        height: 800,
        alt: "SA Power Supply",
      },
      heading: `DC Regulated Power`,
      description: `
        <p>
        Songer Audio's tightly regulated, low impedance, high noise rejection design removes all AC line 
        and harmonic noise from DC regulated output.  This unique feature eliminates induced voice coil 
        modulation, shunting it at the power supply. The result is pure DC power to the field coil magnet, with no 
        overlying AC audio signal.
        </p>
        <p>
        The supply is able to provide constant current up to 2 amps.  Adjustable from 9 to 12.5 volts, listeners have 
        the freedom to tune the performance of the speaker to their personal listening taste.
        </p>`,
      cta: {
        label: "Learn More",
        uri: "/products#a_ps1",
      },
    },
  ],
};

export default Home;
