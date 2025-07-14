import localFont from 'next/font/local';

const customFonts = localFont({
  display: 'swap',
  variable: '--font-dm-sans',
  src: [
    {
      path: './DMSans-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './DMSans-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './DMSans-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './DMSans-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './DMSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './DMSans-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './DMSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './DMSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './DMSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './DMSans-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './DMSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './DMSans-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './DMSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './DMSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './DMSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './DMSans-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: './DMSans-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './DMSans-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
});

export default customFonts;
