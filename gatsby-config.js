module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://jennithe.dev/`,
    // Your Name
    name: 'Jenni The Dev',
    // Main Site Title
    title: `Jenni | Software Developer`,
    // Description that goes under your name in main bio
    //description: `Lorem ipsum dolor sit amet consectetur adipisicing elit, ipsum.`,
    // Optional: Twitter account handle
    author: `@jenni`,
    // Optional: Github account URL
    github: `https://github.com/jennithedev`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/jennithedev/`,
    // Content of the About Me section
    about: `I like to make really awesome games with really awesome people.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: "Espere's Journey",
        description:
          'A 2D adventure game created in Unity',
        link: 'https://github.com/JenniTheDev/EsperesJourney',
      },
      {
        name: 'Microverse',
        description:
          'A mobile app made up of microgames',
        link: 'https://github.com/JenniTheDev/Microverse',
      },
      {
        name: 'Blackmail',
        description:
          'A sample website to blackmail people so we can pay our tuition',
        link: 'https://github.com/JenniTheDev/Blackmail_HTML_Version',
      },
      {
        name: 'Pong',
        description:
          'Pong was created as part of two part talk I gave on creating games using Unity',
        link: 'https://github.com/JenniTheDev/Pong_IESD',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Inland Empire Software Development',
        description: 'Software Developer, July 2019 - Present',
        link: 'https://www.iesd.com/',
      },
      {
        name: 'ProUnlimited at Thales Avionics',
        description: 'Content Integration Assitant, March 2020 - Present',
        link: 'https://prounlimited.com/',
      },
      // {
      //   name: 'Hooli',
      //   description: 'Full-Stack Developer, May 2015 - December 2017',
      //   link: 'https://github.com/RyanFitzgerald/devfolio',
      // },
    ],

    education: [
      {
        name: 'California State University, Fullerton ',
        description:
          'B.S in Computer Science, May 2021',
      },
      {
        name: 'Riverside City College',
        description: 'Associates in Math and Science - May 2017  \n Database Managment Certificate - May 2017  \n Associates in Humanities, Philosophy and Arts - May 2017',
      },
      
    ],




    // Optional: List your skills, they must have `name` and `description`.


    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'C#, C++, Python, Java',
      },
      {
        name: 'Game Engines',
        description: 'Unity, Godot',
      },
      {
        name: 'Other',
        description:
          'SQL, Technical Writing, Agile / Scrum',
      },
    ],


  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/jenniFace.png`,
      },
    },
  ],
};
