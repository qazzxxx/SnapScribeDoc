export default {
  title: 'SnapScribe',
  description: '操作自动截图，生成精美文档 - SnapScribe',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c82f6' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-OMRWnWdJIn' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '下载安装', link: '/2install' },
      { text: '开始使用', link: '/3start' },
      { text: '功能介绍', link: '/4features' },
      { text: '加入我们', link: '/8join' }
    ],
    sidebar: [
      {
        text: '开始使用',
        items: [
          // { text: '简介', link: '/1intro' },
          { text: '安装指南', link: '/2install' },
          { text: '开始使用', link: '/3start' }
        ]
      },
      {
        text: '插件介绍',
        items: [
          { text: '插件功能', link: '/4features' },
          { text: '使用场景', link: '/5scenarios' },
          { text: '更新日志', link: '/6loading' }
        ]
      },
      {
        text: '持续发展',
        items: [
          { text: '后续要做', link: '/7doing' },
          { text: '加入我们', link: '/8join' }
        ]
      }      
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/qazzxxx/SnapScribeDoc' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 <a href="/8join.html">SnapScribe Team</a>'
    },
    search: {
      provider: 'local'
    },
    outlineTitle: "大纲",
    lastUpdatedText: "最后更新时间",
  },
  ignoreDeadLinks: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://doc.qazz.site'
  }
}