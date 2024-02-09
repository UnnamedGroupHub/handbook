import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Unnamed Group Handbook",
  description: "Everything we do, compressed. ✨",
  head: [["link", { rel: "icon", href: "/logo.gif" }]],
  rewrites: {
    "/main/introduction/index.md": "/main/",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: "/logo.gif",

    nav: [
      { text: "Home", link: "/" },
      {
        text: "Sections",
        items: [
          { text: "Main", link: "/main/" },
          { text: "Esports", link: "/esports/" },
          { text: "Staff", link: "/staff/" },
        ],
      },
      { text: "Contributors", link: "/contributors" },
    ],

    sidebar: {
      "/main/": [
        {
          text: "Introduction",
          link: "/main/",
          items: [
            {
              text: "Who are we?",
              link: "/main/who-are-we",
            },
          ],
        },
      ],
      "/esports/": [
        {
          text: "Introduction",
          link: "/esports/",
          items: [
            {
              text: "What is Unnamed Esports?",
              link: "/esports/what-is-unnamed-esports",
            },
          ],
        },
        {
          text: "Players",
          link: "/esports/players/",
          items: [
            {
              text: "Terms of Agreement",
              link: "/esports/players/terms",
            },
            {
              text: "Statistics",
              link: "/esports/players/statistics",
            },
          ],
        },
        {
          text: "Captains",
          link: "/esports/captains/",
          items: [
            {
              text: "Roster Reveal Videos",
              link: "/esports/captains/roster-reveal-videos",
            },
          ],
        },
        {
          text: "Coaches",
          link: "/esports/coaches/",
          items: [],
        },
        {
          text: "Managers",
          link: "/esports/managers/",
          items: [],
        },
        {
          text: "Admins",
          link: "/esports/admins/",
          items: [],
        },
        {
          text: "Blue Lock",
          link: "/esports/bluelock/",
          items: [
            // {
            //   text: "Player Primer",
            //   link: "/esports/bluelock/player-primer",
            // },
          ],
        },
      ],
      "/staff/": [
        {
          text: "Roles",
          link: "/staff/roles/",
          items: [
            {
              text: "Moderator",
              link: "/staff/roles/moderator",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/UnnamedGroupHub/handbook" },
      { icon: "twitter", link: "https://twitter.com/UnnamedGroupX" },
    ],

    search: {
      provider: "local",
    },

    editLink: {
      pattern:
        "https://github.com/UnnamedGroupHub/handbook/edit/main/src/:path",
      text: "Edit this page",
    },

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "full",
      },
    },

    footer: {
      message:
        "Released under the <a href='https://github.com/UnnamedGroupHub/handbook/blob/main/LICENSE' target='_blank'>Unlicense</a>.",
      copyright: "Dedicated to the Public Domain.",
    },
  },
});
