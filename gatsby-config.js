module.exports = {
    siteMetadata: {
        siteUrl: "https://github.com/jimi-1337/jimi-portfolio",
        title: "Jimi 1337",
        description: "personal portfolio",
        author: "ayoub@jimi1337",
        siteLanguage: "en",
        image: "banner.jpg",
        getform_url:
            "https://getform.io/f/40d898c8-f471-45c5-b428-ebca3906670a",
        socials: [
            {
                id: 1,
                title: "instagram",
                path: "https://www.instagram.com/moujane.a/",
                icon: "Instagram",
            },
            {
                id: 2,
                title: "linkedin",
                path: "https://www.linkedin.com/in/moujane-ayoub/",
                icon: "Linkedin",
            },
            {
                id: 3,
                title: "twitter",
                path: "https://twitter.com/jimi_1337",
                icon: "Twitter",
            },
            {
                id: 4,
                title: "github",
                path: "https://github.com/jimi-1337",
                icon: "GitHub",
            },
        ],
        contact: {
            phone: "212622513262",
            email: "moujaneayoub@gmail.com",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                    "gatsby-remark-reading-time",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Jimi1337",
                short_name: "Jimi1337",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/J1.png",
            },
        },
    ],
};
