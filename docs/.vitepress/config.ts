import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nudeny API ",
  description: "All you need to know about Nudeny API",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/intro/docs' },
      { text: 'About Us', link: '/about/'}
    ],

    sidebar: [
     {
        text: "Introduction", 
        collapsed: true,
        items: [
          { text: 'What is Nudeny API?', link: '/intro/nudeny-api' },
          { text: 'Examples', link: '/intro/Examples.md'},
          { text: 'Runtime API Examples', link: '/intro/Docs.md' }
        ]
      },
      {
        text: 'API Reference', 
        collapsed: true,
        items: [
          { text: 'Nudeny API', link: '/api/nudeny-api' },
          { text: 'Runtime API', link: '/api/runtime-api' }
        ]
      },
      {
        text: 'Guides', 
        collapsed: true,
        items: [
          { text: 'Getting Started', link: '/guides/getting-started' },
          { text: 'API Reference', link: '/guides/api-reference' }
        ]
      }

    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com' },
      { icon: 'github', link: 'https://github.com/nudeny' },
    ]
  }
})
 