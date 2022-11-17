const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "sun.github.io",
  description: 'vdoing博客主题模板',
  base: '/sun.github.io/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "62267e2715f3930c364a",
        clientSecret: "c9c778a8fd3a5cbb07e36431be30a2af826552fb",
        owner: "sun",
        repo: "sun.github.io",
      },
    ],
  ],

  themeConfig,

}


