import { Quicksand,Noto_Sans_Thai } from 'next/font/google';
export const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '600','700'],
});
export const notoThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
})