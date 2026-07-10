export const coreColors = [
  {
    name: "Deep Teal",
    slug: "deep-teal",
    hex: "#007f7f",
    use: "Brand accent, highlighted words, directional cues"
  },
  {
    name: "Ocean Teal",
    slug: "ocean-teal",
    hex: "#2e9ea0",
    use: "Secondary accent, small UI details, soft emphasis"
  },
  {
    name: "Mist",
    slug: "mist",
    hex: "#d5e6e5",
    use: "Pale blue-green surfaces, placeholder art, quiet blocks"
  },
  {
    name: "Cloud",
    slug: "cloud",
    hex: "#e6ecee",
    use: "Neutral blue-gray surfaces, logo placeholder, subtle fill"
  },
  {
    name: "Charcoal",
    slug: "charcoal",
    hex: "#242b33",
    use: "Dark neutral surfaces and richer hover states"
  }
] as const;

export const supportColors = [
  {
    name: "Paper",
    slug: "paper",
    hex: "#f3eddf",
    use: "Primary page background"
  },
  {
    name: "Paper Deep",
    slug: "paper-deep",
    hex: "#e9dfcb",
    use: "Warm section tint and CTA bands"
  },
  {
    name: "Ink",
    slug: "ink",
    hex: "#1d1e1b",
    use: "Primary text, borders, and guide primary button"
  },
  {
    name: "Sun",
    slug: "sun",
    hex: "#ffcf32",
    use: "Warm emphasis, highlights, and selective callouts"
  },
  {
    name: "Violet",
    slug: "violet",
    hex: "#9c5cf5",
    use: "Secondary accent and style-guide outlines"
  }
] as const;

export const typographyTokens = [
  {
    name: "Display / H1",
    className: "display-1",
    font: "Fraunces",
    size: "46 / 56 / 72 / 88px",
    weight: "500",
    notes: "Mobile, tablet, xl, 3xl; regular + italic"
  },
  {
    name: "Display / H2",
    className: "display-2",
    font: "Fraunces",
    size: "36 / 44 / 52px",
    weight: "500",
    notes: "Section headings with wide-screen steps"
  },
  {
    name: "Display / H3",
    className: "display-3",
    font: "Fraunces",
    size: "20px",
    weight: "500",
    notes: "Panel headings"
  },
  {
    name: "Body",
    className: "body",
    font: "Work Sans",
    size: "16-18px",
    weight: "400",
    notes: "Line height 1.6"
  },
  {
    name: "Body Small",
    className: "body-sm",
    font: "Work Sans",
    size: "13-15px",
    weight: "400",
    notes: "Dense supporting copy"
  },
  {
    name: "Eyebrow / Label",
    className: "label",
    font: "Space Mono",
    size: "12px",
    weight: "400",
    notes: "Uppercase, 0.14em tracking"
  },
  {
    name: "Caption / Meta",
    className: "caption",
    font: "Space Mono",
    size: "10.5-11px",
    weight: "400",
    notes: "Uppercase metadata"
  }
] as const;

export const buttonTokens = [
  {
    name: "Primary",
    variant: "primary",
    use: "Highest-emphasis action",
    description: "Ink fill, paper text, Space Mono uppercase label"
  },
  {
    name: "Secondary",
    variant: "secondary",
    use: "Secondary action",
    description: "Paper fill, ink border, Space Mono uppercase label"
  },
  {
    name: "Text Link",
    variant: "textLink",
    use: "Low-emphasis navigation",
    description: "Underlined text treatment"
  }
] as const;

export const breakpointTokens = [
  {
    name: "Base",
    prefix: "none",
    minWidth: "0px",
    use: "Mobile-first defaults"
  },
  {
    name: "Small",
    prefix: "sm",
    minWidth: "640px",
    use: "Large phones and small tablets"
  },
  {
    name: "Medium",
    prefix: "md",
    minWidth: "768px",
    use: "Tablet and compact desktop navigation"
  },
  {
    name: "Large",
    prefix: "lg",
    minWidth: "1024px",
    use: "Laptop layouts"
  },
  {
    name: "Extra Large",
    prefix: "xl",
    minWidth: "1280px",
    use: "Desktop expansion begins"
  },
  {
    name: "2XL",
    prefix: "2xl",
    minWidth: "1536px",
    use: "Large desktop compositions"
  },
  {
    name: "3XL",
    prefix: "3xl",
    minWidth: "1920px",
    use: "Designed 1920px canvas"
  }
] as const;

export const containerTokens = [
  {
    name: "Narrow",
    slug: "narrow",
    width: "760px",
    use: "Text-heavy content"
  },
  {
    name: "Content",
    slug: "content",
    width: "1180px",
    use: "Constrained editorial blocks"
  },
  {
    name: "Default",
    slug: "default",
    width: "1360px",
    use: "Normal desktop sections"
  },
  {
    name: "Wide",
    slug: "wide",
    width: "1600px",
    use: "Main landing sections"
  },
  {
    name: "Cinema",
    slug: "cinema",
    width: "1760px",
    use: "Hero, header, and footer on 1920px screens"
  }
] as const;

export const gutterTokens = [
  {
    breakpoint: "Base",
    gutter: "16px"
  },
  {
    breakpoint: "sm",
    gutter: "24px"
  },
  {
    breakpoint: "lg",
    gutter: "32px"
  },
  {
    breakpoint: "xl",
    gutter: "64px"
  },
  {
    breakpoint: "3xl",
    gutter: "80px"
  }
] as const;
