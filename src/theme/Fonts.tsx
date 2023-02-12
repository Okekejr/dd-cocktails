import { Global } from "@emotion/react";

export const fonts = {
  heading:
    "'Sorts Mill Goudy', 'Kameron', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'serif'",
  body: "'Sorts Mill Goudy', 'Kameron', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'serif'",
};

export const FontFaces = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Sorts Mill Goudy';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/assets/fonts/GoudyStM-webfont.woff) format('woff'),
             url(/assets/fonts/Sorts Mill Goudy Regular.woff2) format('woff2'),
             url(/assets/fonts/SortsMillGoudy-Regular.ttf) format('ttf'),
             url(/assets/fonts/Sorts Mill Goudy Regular.otf) format('otf');
      }

      @font-face {
        font-family: 'Sorts Mill Goudy';
        font-style: Italic;
        font-weight: 400;
        font-display: swap;
        src: url(/assets/fonts/GoudyStM-Italic-webfont.woff) format('woff'),
             url(/assets/fonts/Sorts Mill Goudy Italic.woff2) format('woff2'),
             url(/assets/fonts/Sorts Mill Goudy Italic.ttf) format('ttf'),
             url(/assets/fonts/Sorts Mill Goudy Italic.otf) format('otf');
      }

      @font-face {
        font-family: 'Kameron';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/assets/fonts/Kameron-Regular.ttf.ttf) format('ttf');
      }

      @font-face {
        font-family: 'Kameron';
        font-style: Bold;
        font-weight: 700;
        font-display: swap;
        src: url(/assets/fonts/Kameron-Bold.ttf) format('ttf');
      }

      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/assets/fonts/Raleway-Regular.woff) format('woff');
      }
    `}
  />
);
