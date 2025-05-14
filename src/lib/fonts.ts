import localFont from "next/font/local";

// Inter 18pt – Optimized for large text
export const inter_18pt = localFont({
  src: [
    {
      path: "../../public/fonts/Inter/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter/Inter_18pt-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Inter/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter/Inter_18pt-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

// Playfair 9pt – Optimized for small text
export const playfair_9pt = localFont({
  src: [
    {
      path: "../../public/fonts/Playfair/Playfair_9pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Playfair/Playfair_9pt-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Playfair/Playfair_9pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Playfair/Playfair_9pt-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});

// Space Grotesk – UI and Titles
export const spaceGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/SpaceGrotesk/SpaceGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SpaceGrotesk/SpaceGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SpaceGrotesk/SpaceGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});
