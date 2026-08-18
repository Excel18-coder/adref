const svgToDataUri = (svg: string) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

export function createArtwork({
  title,
  subtitle,
  primary,
  secondary,
  accent,
  pattern,
}: {
  title: string;
  subtitle: string;
  primary: string;
  secondary: string;
  accent: string;
  pattern?: string;
}) {
  return svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${secondary}"/>
          <stop offset="55%" stop-color="${primary}"/>
          <stop offset="100%" stop-color="${accent}"/>
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="28%" r="55%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.65)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
        </radialGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#bg)"/>
      <circle cx="1300" cy="180" r="260" fill="rgba(255,255,255,0.12)"/>
      <circle cx="200" cy="760" r="330" fill="rgba(0,0,0,0.12)"/>
      <rect x="0" y="0" width="1600" height="1000" fill="url(#glow)"/>
      <g opacity="0.2">
        <path d="M0 690C180 610,270 640,420 690C560 740,700 770,860 710C990 660,1150 610,1600 720V1000H0Z" fill="${accent}"/>
        <path d="M0 740C220 700,340 760,520 780C700 800,890 760,1100 710C1300 660,1440 690,1600 720V1000H0Z" fill="rgba(255,255,255,0.18)"/>
      </g>
      <g>
        <rect x="120" y="640" width="340" height="140" rx="28" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.45)"/>
        <rect x="500" y="560" width="500" height="220" rx="32" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.45)"/>
        <rect x="1050" y="620" width="360" height="160" rx="28" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.4)"/>
      </g>
      <g fill="rgba(255,255,255,0.82)">
        <circle cx="145" cy="210" r="8"/>
        <circle cx="185" cy="210" r="8"/>
        <circle cx="225" cy="210" r="8"/>
      </g>
      <text x="120" y="300" fill="rgba(255,255,255,0.96)" font-family="Georgia, serif" font-size="118" font-weight="700">${title}</text>
      <text x="120" y="390" fill="rgba(255,255,255,0.84)" font-family="Arial, sans-serif" font-size="42" letter-spacing="4">${subtitle.toUpperCase()}</text>
      <g opacity="0.62">
        ${pattern ?? `<path d="M120 470L250 420L360 470L510 390L630 470L770 410L900 470L1035 410L1175 470L1320 410L1450 470" stroke="rgba(255,255,255,0.75)" stroke-width="5" fill="none" stroke-linecap="round"/>`}
      </g>
    </svg>
  `);
}

export const communityHeroArt = createArtwork({
  title: "African Aid",
  subtitle: "Relief • Recovery • Resilience",
  primary: "#0f5d3d",
  secondary: "#1d2b24",
  accent: "#d97844",
  pattern: `<path d="M120 480L250 430L370 480L520 390L660 490L830 430L1005 500L1170 420L1320 500L1460 440" stroke="rgba(255,255,255,0.8)" stroke-width="5" fill="none" stroke-linecap="round"/>`,
});

export const storyHeroArt = createArtwork({
  title: "Community Care",
  subtitle: "Dignity • Partnership • Trust",
  primary: "#244b38",
  secondary: "#d9b57f",
  accent: "#8d4f2f",
});

export const programsHeroArt = createArtwork({
  title: "Program Impact",
  subtitle: "Food • Water • Education",
  primary: "#3f6b42",
  secondary: "#264e3f",
  accent: "#d5a45d",
});

export const impactHeroArt = createArtwork({
  title: "Our Impact",
  subtitle: "Measured Change • Shared Hope",
  primary: "#163c30",
  secondary: "#6a4d23",
  accent: "#d97844",
});

export const thematicHeroArt = createArtwork({
  title: "Resilience",
  subtitle: "Climate • Recovery • Inclusion",
  primary: "#396c58",
  secondary: "#1a2b2a",
  accent: "#c7824b",
});

export const programArtwork = (label: string, colors: [string, string, string]) =>
  createArtwork({
    title: label,
    subtitle: "Community-led action",
    primary: colors[0],
    secondary: colors[1],
    accent: colors[2],
  });

export const galleryArtwork = (title: string, primary: string, secondary: string, accent: string) =>
  createArtwork({
    title,
    subtitle: "African resilience",
    primary,
    secondary,
    accent,
  });
