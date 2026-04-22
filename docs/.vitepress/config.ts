import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: '.', 

  title: 'Sistemas Informáticos',

  themeConfig: {
    sidebar: [
      {
        text: 'Prácticas',
        items: [
          { text: 'UD5 P1', link: '/ud5-p1' },
          { text: 'UD5 P2', link: '/ud5-p2' },
          { text: 'UD5 P3', link: '/ud5-p3' },
          { text: 'UD5 P4', link: '/ud5-p4' },
          { text: 'Práctica UD4', link: '/practica1ud4' }
        ]
      }
    ]
  }
})
