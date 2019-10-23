export const base = {
  FONT_SIZE_TINY: 8,
  FONT_SIZE_SMALL: 12,
  FONT_SIZE_MEDIUM: 14,
  FONT_SIZE_LARGE: 18,
  FONT_SIZE_EXTRA_LARGE: 24,
  FONT_SIZE_MASSIVE: 34,

  FONT_WEIGHT_LIGHT: "200",
  FONT_WEIGHT_MEDIUM: "500",
  FONT_WEIGHT_BOLD: "700",
};

export const colorOptions = {
  early_dawn: {
    PRIMARY_COLOR: "#FCF0E3",
    PRIMARY_COLOR_BOLD: "#FFCE99",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  mint_green: {
    PRIMARY_COLOR: "#A5FEC0",
    PRIMARY_COLOR_BOLD: "#59FF8B",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  white_smoke: {
    PRIMARY_COLOR: "#F5F5F5",
    PRIMARY_COLOR_BOLD: "#FFB3B3",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  pig_pink: {
    PRIMARY_COLOR: "#FDE2F7",
    PRIMARY_COLOR_BOLD: "#FF96E8",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  moccasin: {
    PRIMARY_COLOR: "#FFEDB0",
    PRIMARY_COLOR_BOLD: "#FFDB63",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  light_cyan: {
    PRIMARY_COLOR: "#C8F5FF",
    PRIMARY_COLOR_BOLD: "#7AE7FF",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  cyprus: {
    PRIMARY_COLOR_LIGHT: "#B8BECE",
    PRIMARY_COLOR: "#083232",
    PRIMARY_COLOR_BOLD: "#000000",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  }
}

const theme = {
  ...base, ...colorOptions.cyprus, color: { ...colorOptions }
};

export default theme;