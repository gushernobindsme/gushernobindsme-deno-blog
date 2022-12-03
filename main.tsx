/** @jsx h */

import blog, { ga, h } from "blog";

blog({
  author: "gushernobindsme",
  title: "泥水エンジニア日記",
  description: "gushernobindsme",
  avatar: "avatar.png",
  avatarClass: "rounded-full",
  links: [
    { title: "Twitter", url: "https://twitter.com/gushernobindsme" },
    { title: "GitHub", url: "https://github.com/gushernobindsme" },
    { title: "Instagram", url: "https://www.instagram.com/takumi.era" },
  ],
  lang: "ja",
  dateStyle: "long",
  middlewares: [
    ga("UA-16807999-1"),
  ],
});
