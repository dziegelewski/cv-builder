const gray = (a) => '#' + a.repeat(3);

export const colors = {
  normal: gray('2B'),
  light: gray('60'),
  super: '#0074D9',
  background: gray('EE'),

  shadow: '#000000',
  paperWhite: '#FFFFFF',
  chromePDFBackground: '#525659',
};

export const fontSize = {
  small: 9,
  normal: 10,
  big: 14,
  huge: 18,
}

export const offset = {
  pageSide: 50,
  leftLabel: 60,
};