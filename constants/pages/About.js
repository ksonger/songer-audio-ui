const About = {
  about: [
    {
      blockType: "card",
      type: "blue",
      orientation: "left",
      image: {
        url: "ken.png",
        width: 1000,
        height: 1673,
        alt: "S2 Loudspeaker",
        focalPoint: [0.5, 0],
      },
      heading: `About Songer Audio`,
      description: `
        <p className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
                  Songer Audio is the product of my lifelong passion. It is the sum of thousands of hours of design and redesign, of refinement and production, and of an obsessive drive to perfect the joyful experience of music.
                </p>
                <p className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
                  I started what has become Songer Audio designing and building cabinets, in my free time ten years ago.  I love the sound of full-range drivers, and spent countless evenings and weekends making enclosures for them.  My creations gradually started filling up our house and eventually, friends began suggesting that I try to sell them.
                </p>
                <p className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
                  Designing and building cabinets for commercial drivers was satisfying, but I often wondered if I couldn't take my work further to design and build a complete, world-class loudspeaker by hand.  My search for the answer to that question is an ongoing and rewarding journey, marked with success and challenge, and always full of discovery.
                </p>
                <p className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
                  In March of 2018 I finally left the software industry to devote myself entirely to loudspeaker design, my true passion.
                </p>`,
    },
  ],
};

export default About;
