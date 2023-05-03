import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './FT_logo512.png',
  fullDecal: './FT_logo512.png',
});

export default state;
