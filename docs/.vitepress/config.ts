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
      { icon: 'discord', link: 'https://discord.com' },
      { icon: 'github', link: 'https://github.com/nudeny' },
    ]
  }
})
 