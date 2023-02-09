import { Global } from "@emotion/react";

export const fonts = {
  heading:
    "'Sorts Mill Goudy', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'serif'",
  body: "'Sorts Mill Goudy', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'serif'",
};

export const FontFaces = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Sorts Mill Goudy';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/assets/fonts/GoudyStM-webfont.woff) format('woff');
      }

      @font-face {
        font-family: 'Sorts Mill Goudy';
        font-style: Italic;
        font-weight: 400;
        font-display: swap;
        src: url(/assets/fonts/GoudyStM-Italic-webfont.woff) format('woff');
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
