import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* Bold*/
      @font-face {
        font-family: 'Graphix Meetup';
        src: url('/src/Fonts/GraphixMeetup-Bold.woff2') format('woff2');
      }
    `}
  />
);

export default Fonts;
/*
  @font-face {
    font-family: 'GraphixMeetup-Regular';
    font-weight: 400;
    font-display: swap;
    src: url('/src/Fonts/GraphixMeetup-Regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'GraphixMeetup-Medium';
    font-weight: 500;
    font-display: swap;
    src: url('/src/Fonts/GraphixMeetup-Medium.woff2') format('woff2');
  }
  @font-face {
    font-family: 'GraphixMeetup-SemiBold';
    font-weight: 600;
    font-display: swap;
    src: url('/src/Fonts/GraphixMeetup-SemiBold.woff2') format('woff2');
  }
*/
