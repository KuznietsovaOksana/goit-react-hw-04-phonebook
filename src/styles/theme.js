export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    grey: '#9e9e9e',
    light: '#f2f2f2',
    dark: '#212121',
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '32px',
  },
  spacing: value => `${4 * value}px`,
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
