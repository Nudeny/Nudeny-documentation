import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  title: "Nudeny API ",
  description: "All you need to know about Nudeny API",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/documentation/endpoints' },
      { text: 'About Us', link: '/about/aboutUs'}
    ],

    sidebar: [
     {
        text: "Introduction", 
        collapsed: false,
        items: [
          { text: 'What is Nudeny API?', link: '/nudenyAPI' }
        ]
      },
      {
        text: 'Documentation', 
        collapsed: false,
        items: [
          { text: 'Endpoints', link: '/documentation/endpoints.md' },
          { text: 'JavaScript', link: '/documentation/js.md' },
          { text: 'Python', link: '/documentation/python.md' },
          { text: 'PHP', link: '/documentation/php.md' },
          { text: 'Dart', link: '/documentation/dart.md' },
        ]
      },
      {
        text: 'Nudeny Tools', 
        collapsed: false,
        items: [
          { text: 'Chrome Extension', link: '/nudenytools/chromeExtension' },
          { text: 'Discord Bot', link: '/nudenytools/discordBot.md' },
          { text: 'Playground', link: '/nudenytools/playground.md' }
        ],
      },
     
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/oauth2/authorize?client_id=1086270816666263654&permissions=534723950710&scope=bot&fbclid=IwAR0aO48nWx5Yo2a4ngP5is-DXdTMhPwaCSpFLFz7qQsl5p_yE72jlIboUI8' },
      { icon: 'github', link: 'https://github.com/nudeny' },
    ]
  }
})
 