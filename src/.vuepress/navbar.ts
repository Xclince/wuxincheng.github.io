import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "测试心得",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "年度总结",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "回首2024，展望2025", icon: "pen-to-square", link: "1" },
          { text: "互联网VS传统行业：程序员996背后的真相", icon: "pen-to-square", link: "2" },
          { text: "苹果9999", icon: "pen-to-square", link: "3" },
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
