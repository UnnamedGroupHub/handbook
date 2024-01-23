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
      { icon: "github", link: "https://github.com/UnnamedGroup/handbook" },
      // { icon: "gitlab", link: "https://gitlab.com/unnamed.group/handbook" },
      { icon: "twitter", link: "https://twitter.com/UnnamedEsportsX" },
    ],

    search: {
      provider: "local",
    },

    editLink: {
      pattern:
        "https://gitlab.com/unnamed.group/handbook/-/edit/main/src/:path",
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
        "Released under the <a href='https://gitlab.com/unnamed.group/handbook/blob/main/LICENSE' target='_blank'>Unlicense</a>.",
      copyright: "Dedicated to the Public Domain.",
    },
  },
});
