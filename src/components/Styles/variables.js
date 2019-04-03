const gray = (a) => '#' + a.repeat(3);

export const colors = {
  normal: gray('2B'),
  light: gray('60'),
  super: 'blue',
  background: gray('EE'),

  shadow: '#000000',
  paperWhite: '#FFFFFF',
  chromePDFBackground: '#525659',
};

export const fontSize = {
  small: '9px',
  normal: '10px',
  big: '14px',
  huge: '18px',
}

export const offset = {
  pageSide: 50,
  leftLabel: 60,
};