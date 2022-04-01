module.exports = {
  title: "Pi-Hosted",
  description:
    "Pi-Hosted is a collection of tutorials for hosting a variety of server applications using Docker and Portainer on the Raspberry Pi.",
  lang: "en-US",
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/images/portainer.svg",
    repo: "pi-hosted/pi-hosted",
    navbar: [
      {
        text: "Guide",
        link: "/guide/",
      },
      { text: "Apps", link: "/apps/" },
      { text: "Tools", link: "/tools/" },
      { text: "YouTube Series", link: "/youtube/" },
      {
        text: "Social",
        children: [
          {
            text: "Discord",
            link: "https://discord.com/invite/v8dAnFV",
          },
          {
            text: "YouTube",
            link: "https://www.youtube.com/channel/UCrjKdwxaQMSV_NDywgKXVmw",
          },
          { text: "Twitter", link: "https://twitter.com/novaspirittech" },
        ],
      },
    ],
    editLink: false,
  },
};
