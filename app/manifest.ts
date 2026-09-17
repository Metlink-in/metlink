import type { MetadataRoute } from 'next';
import { SITE_NAME } from '@/lib/site-config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — AI Marketing & Development Agency`,
    short_name: SITE_NAME,
    description:
      'MetLink is a full-service AI marketing & development agency — digital marketing, creative media, AI automation, and custom software that drives measurable revenue growth.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07111F',
    theme_color: '#07111F',
    icons: [
      { src: '/icon.png', sizes: '256x256', type: 'image/png' },
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
