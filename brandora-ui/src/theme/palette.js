const palette = {
  mode: 'dark',

  primary: {
    main: '#1976d2',         // Blue
    light: '#63a4ff',
    dark: '#004ba0',
    contrastText: '#ffffff',
  },

  secondary: {
    main: '#dc004e',         // Pink/Red
    light: '#ff5c8d',
    dark: '#9a0036',
    contrastText: '#ffffff',
  },

  success: {
    main: '#2e7d32',
    light: '#60ad5e',
    dark: '#005005',
    contrastText: '#ffffff',
  },

  error: {
    main: '#d32f2f',
    light: '#ff6659',
    dark: '#9a0007',
    contrastText: '#ffffff',
  },

  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100',
    contrastText: '#ffffff',
  },

  info: {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b',
    contrastText: '#ffffff',
  },


  background: {
    default: 'transparent', // important for video
    paper: 'rgba(18, 18, 18, 0.75)', // cards over video
  },

  text: {
    primary: '#ffffff',
    secondary: '#cccccc',
    disabled: '#888888',
  },

  divider: 'rgba(255,255,255,0.12)',

  action: {
    hover: 'rgba(255,255,255,0.08)',
    selected: 'rgba(255,255,255,0.16)',
    disabled: 'rgba(255,255,255,0.3)',
    disabledBackground: 'rgba(255,255,255,0.12)',
    focus: 'rgba(255,255,255,0.12)',
    active: 'rgba(255,255,255,0.24)',
  },
};

export default palette;

