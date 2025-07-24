import { IBM_Plex_Mono } from 'next/font/google';
import localFont from 'next/font/local';

// Configure the local "Satoshi" font
export const satoshi = localFont({
  src: './fonts/Satoshi-Variable.ttf/Fonts/TTF/Satoshi-Variable.ttf',
  display: 'swap',
  variable: '--font-satoshi',
  weight: '400 700'
});

// Configure the "IBM Plex Mono" font from Google Fonts
export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500', '600']
});