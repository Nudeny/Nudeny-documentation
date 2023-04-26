import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nudeny API ",
  description: "All you need to know about Nudeny API",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/readthedocs/docs' },
      { text: 'About Us', link: '/about/aboutUs'}
    ],

    sidebar: [
     {
        text: "Introduction", 
        collapsed: true,
        items: [
          { text: 'What is Nudeny API?', link: '/nudenyAPI' }
        ]
      },
      {
        text: 'Examples', 
        collapsed: true,
        items: [
          { text: 'Endpoints', link: '/examples/endpoints.md' },
          { text: 'JavaScript', link: '/examples/js.md' },
          { text: 'Python', link: '/examples/python.md' },
          { text: 'PHP', link: '/examples/php.md' },
          { text: 'Dart', link: '/examples/dart.md' },
        ]
      },
      {
        text: 'API Reference', 
        collapsed: true,
        items: [
          { text: 'Nudeny API', link: '/api-reference/nudeny-api' },
          { text: 'Runtime API', link: '/api-reference/runtime-api' }
        ]
      },
      {
        text: 'Guides', 
        collapsed: true,
        items: [
          { text: 'Getting Started', link: '/guides/getting-started' },
          { text: 'API Reference', link: '/guides/api-reference' }
        ]
      },
      {
        text: 'Nudeny Tools', 
        collapsed: true,
        items: [
          { text: 'Chrome Extension', link: '/nudenytools/chromeExtension' },
          { text: 'Discord Bot', link: '/nudenytools/discordBot.md' },
          { text: 'Playground', link: '/nudenytools/playground.md' }
        ],
      },
     
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D1086270816666263654%26permissions%3D534723950710%26scope%3Dbot%26fbclid%3DIwAR3Y05N3RvRD4Ic47FTV4DyGC8Ms28_ZSflq628X6caomIYLJZxJCbtRkwU&h=AT1L9aPwelc1seStmCMkAmoSIL_IaDNtbHy2bgegUB8VNpk5d27St3qy-C-OHHVWVGP7-JxRN3SULXQnhu0aoh1e5Va9lKMFF9NyXZsKX_cE486J5_7TMUDAp7aPX3A60ZniPA' },
      { icon: 'github', link: 'https://github.com/nudeny' },
    ]
  }
})
 