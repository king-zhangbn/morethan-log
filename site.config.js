const CONFIG = {
  // profile setting (required)
  profile: {
    name: "萌萌哒小明",
    image: "/avatar.svg", // 如果你想自己创作notion头像，请参见https://notion-avatar.vercel.app
    role: "前端开发工程师",
    bio: "我使用node开发一切。",
    email: "xiaoming@mengmengda.com",
    linkedin: "mengmengda-xiaoming",
    github: "mengmengda-xiaoming",
    instagram: "",
  },
  projects: [
    {
      name: `萌萌日志`,
      href: "<https://github.com/mengmengda-xiaoming/mengmeng-log>",
    },
  ],
  // blog setting (required)
  blog: {
    title: "萌萌日志",
    description: "欢迎来到萌萌日志！",
    theme: "light", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "<https://mengmeng-log.vercel.app>",
  since: 2022, // 如果不填写，将使用当前年份。
  lang: "zh-CN", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "<https://og-image-korean.vercel.app>", // 生成OG图像的链接，不要以斜杠结尾
  seo: {
    keywords: ["博客", "网站", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "mengmengda-xiaoming/mengmeng-log",
      "issue-term": "og:title",
      label: "💬 评论",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "<https://cusdis.com>",
      appid: "", // 嵌入代码-> data-app-id值
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // 区分开发和生产环境（参见：<https://vercel.com/docs/environment-variables#system-environment-variables）>
}
module.exports = CONFIG
