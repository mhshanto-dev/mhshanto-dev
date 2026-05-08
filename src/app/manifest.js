export default function manifest() {
  return {
    name: 'Mehedi Hasan Shanto',
    short_name: 'MH Shanto',
    description: 'Professional Portfolio of Mehedi Hasan Shanto – Full-Stack Developer',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
