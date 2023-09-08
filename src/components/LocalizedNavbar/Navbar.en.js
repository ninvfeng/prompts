const enNavbar = {
  hideOnScroll: true,
  title: "ChatGPT Prompts",
  logo: {
    alt: "ChatGPT Prompts",
    src: "img/logo.svg",
  },
  items: [
    {
      to: "https://gpt3b.gptnb.xyz",
      label: "ChatGPT3.5",
      position: "left",
    },
    {
      to: "https://gpt4b.gptnb.xyz",
      label: "ChatGPT4.0",
      position: "left",
    },
    {
      href: "https://github.com/ninvfeng/prompts",
      position: "right",
      className: "header-github-link",
    },
  ],
};

module.exports = enNavbar;
