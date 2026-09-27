/** @type {import('tailwindcss').Config} */

/**
 * Palette aligned to the new Ares site ("Moonstone" + Inter).
 *
 * NOTE: `theme.colors` REPLACES Tailwind's defaults, so every colour name the
 * components use has to be declared here or the class silently does nothing.
 *
 * Two things this config fixes without touching a single component:
 *
 * 1. LEGACY ALIASES. odgreen / litegreen / black / gray / white are used ~163
 *    times. They now point at Moonstone values, so the whole site restyles
 *    from here rather than from 163 edited call sites.
 *
 * 2. THE NUMBERED SCALE. The components also use text-gray-900, -800, -700,
 *    -600, -500, -400, -100, bg-gray-100, text-indigo-500, border-indigo-500
 *    and text-body-color — about 60 usages in total. None of those names
 *    existed in the original config, so every one of them was a DEAD CLASS
 *    and that text simply inherited its colour. Declaring the scale below
 *    activates the hierarchy the markup already asked for: -900 reads as a
 *    heading, -600 as body copy, -400/-500 as muted.
 *
 * Unused decorative colours from the original config (purple, midnight,
 * metal, tahiti, silver, bubble-gum, bermuda, litegray*) were removed — grep
 * confirmed zero usages.
 */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',

      /* ── Moonstone, matching the new site ── */
      'ink': '#1f1f1f',
      'ink-2': '#545353',
      'mid': '#7c7876',
      'light': '#a4a6a8',
      'pale': '#cbcdd0',
      'paper': '#fafaf9',
      'paper-2': '#f2f2f1',
      'line': '#d8d8d6',

      /* ── Legacy flat aliases ── */
      'white': '#ffffff',
      'black': '#1f1f1f',      /* was #151515 */
      'odgreen': '#1f1f1f',    /* was #3d4335 olive drab -> ink */
      /* litegreen has the same double-duty problem as odgreen: it is used as
         light-on-dark text (text-litegreen, 11x) AND as a card background with
         dark text on top (bg-litegreen, 10x). Only a LIGHT value satisfies
         both, so it maps to pale rather than mid: #cbcdd0 gives ~9.7:1 as text
         on ink and ~4.6:1 as a background under ink-2 body copy. */
      'litegreen': '#cbcdd0',  /* was #99a090 muted olive -> pale */

      /* ── Numbered scale, mapped onto Moonstone (see note 2) ── */
      'gray': {
        DEFAULT: '#545353',
        100: '#f2f2f1',
        200: '#e6e5e4',
        300: '#d8d8d6',
        400: '#a4a6a8',
        500: '#7c7876',
        600: '#545353',
        700: '#454444',
        800: '#333232',
        900: '#1f1f1f',
      },

      /* Neutralised: these were decorative leftovers on icons whose stroke is
         hardcoded, so they never showed. Kept as greys so nothing can go
         purple if one ever becomes visible. */
      'indigo': { 500: '#7c7876' },

      /* NOTE: `body-color` is deliberately NOT defined. Two components write
         `text-white text-body-color` together; the class was undefined in the
         original config, so it did nothing and text-white won. Defining it
         activates it, overrides text-white, and turns that copy grey on a dark
         background. Leaving it dead preserves the intended rendering. */
    },
  },
  plugins: [],
}
