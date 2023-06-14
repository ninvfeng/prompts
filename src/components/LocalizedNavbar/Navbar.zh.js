const zhNavbar = {
  hideOnScroll: true,
  title: "ChatGPT 提示词",
  logo: {
    alt: "ChatGPT 提示词",
    src: "img/logo.svg",
  },
  items: [
    {
      to: "https://gpt3b.gptnb.xyz",
      label: "ChatGPT3.5",
      position: "left",
    },
    {
      to: "https://gpt4a.gptnb.xyz",
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

module.exports = zhNavbar;
