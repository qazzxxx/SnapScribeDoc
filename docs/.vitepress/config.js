export default {
  title: 'SnapScribe',
  description: '操作自动截图，生成精美文档',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c82f6' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '功能介绍', link: '/features' },
      { text: '安装使用', link: '/installation' },
      { text: '使用场景', link: '/scenarios' },
      { text: '技术特性', link: '/technical' }
    ],
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '简介', link: '/' },
          { text: '安装指南', link: '/installation' }
        ]
      },
      {
        text: '功能详解',
        items: [
          { text: '核心功能', link: '/features' },
          { text: '使用场景', link: '/scenarios' },
          { text: '技术特性', link: '/technical' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/snapscribe/snapscribe' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 SnapScribe Team'
    },
    search: {
      provider: 'local'
    }
  },
  ignoreDeadLinks: true
}