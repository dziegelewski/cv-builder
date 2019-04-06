import { css } from 'styled-components';

export default css`
  @font-face {
    font-family: "DejaVu Sans";
    src: url("https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans.ttf") format("truetype");
  }

  @font-face {
    font-family: "DejaVu Sans";
    font-weight: bold;
    src: url("https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: "DejaVu Sans";
    font-style: italic;
    src: url("https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf") format("truetype");
  }

  @font-face {
    font-family: "DejaVu Sans";
    font-weight: bold;
    font-style: italic;
    src: url("https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf") format("truetype");
  }

  html {
    font-family: "DejaVu Sans", "Arial", sans-serif;
  }
`;