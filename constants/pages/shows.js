const Shows = {
    shows: [
        {
            blockType: "show",
            current: true,
            type: "default",
            orientation: "left",
            image: {
                url: "paf_banner_2024.jpg",
                width: 600,
                height: 329,
                alt: "T.H.E. Show",
            },
            heading: `2024 Pacific Audio Fest`,
            date: "September 6th - 8th",
            description: "<p>The Pacific Audio Fest is a new audio show hosted in Seattle and serving the entire Pacific coast, from Los Angeles to Vancouver, BC. Seattle is a top tech hub and one of the fastest growing communities in the USA, plus it is a vacation paradise in the summer months. The Seattle area has great demographics for the audio industry and incredible natural beauty to make this a great destination for the audio enthusiast and their families.</p>",
            cta: {
                label: "Attend",
                uri: "https://www.pacificaudiofest.com/tickets-travel",
                target: "_blank"
            },
        },
        {
            blockType: "show",
            current: false,
            type: "default",
            orientation: "left",
            image: {
                url: "caf.webp",
                width: 360,
                height: 360,
                alt: "2024 Capital Audiofest",
            },
            heading: `2024 Capital AudioFest`,
            date: "November 8th - 10th",
            description: "<p>CAF is recognized as a fun, friendly and family-oriented show, where you often see families strolling from room to room listening to music, auditioning gear and browsing the multiple bins of vinyl records, CDs and accessories in the Atrium Marketplace. In the evenings we have live music in the bar and special live performers in the Theater, and local distillers offering tastings. CAF is an experience that, once you try it you will feel as though you’re part of the family.</p>",
            cta: {
                label: "Attend",
                uri: "https://www.capitalaudiofest.com/event-details/capital-audiofest2024",
                target: "_blank"
            },
        }
    ],
};

export default Shows;
