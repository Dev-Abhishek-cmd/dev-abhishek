import 'styled-components';

// Extend the DefaultTheme interface to include your theme properties

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    expTxtColor: string;
    highlight: string;
    dark: string;
    secondaryText: string;
    imageHighlight: string;
    compImgHighlight: string;
    jacketColor: string;
    headerColor: string;
    splashBg: string;
  }
}
