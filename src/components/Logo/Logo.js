import styled from '@emotion/styled';
import styles from './Logo.module.scss';

function Logo(props) {
  const { classes = styles.Logo, logoRef } = props;
  
  const Logo = styled('svg')`
    width: ${props => props.width};
    height: ${props => props.height};
    version: ${props => props.version};
    viewBox: ${props => props.viewBox};
    xmlns: ${props => props.xmlns};
    xmlnsXlink: ${props => props.xmlnsXlink};
    className: ${props => props.className};
    ref: ${props => props.ref};
  `;

  return (
    <Logo width="113.68mm" height="113.68mm" version="1.1" viewBox="0 0 402.8 402.8" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={`w-100 h-auto ${classes}`} ref={logoRef}>
    <defs>
      <linearGradient id="linearGradient4489" x1="-1500" x2="-1420" y1="892.36" y2="1312.4" gradientUnits="userSpaceOnUse">
      <stop stopColor="#fff" offset="0"/>
      <stop stopColor="#f00" stopOpacity="0" offset="1"/>
      </linearGradient>
      <filter id="filter4520" x="-.039752" y="-.039752" width="1.0795" height="1.0795" colorInterpolationFilters="sRGB">
      <feGaussianBlur stdDeviation="5.9969831"/>
      </filter>
    </defs>
    <g transform="translate(-170.65 -324.78)" stroke="#000" strokeLinejoin="round">
      <g transform="translate(1872.7 -633.9)" filter="url(#filter4520)">
      <circle cx="-1500.6" cy="1160.1" r="189.97" strokeWidth="2.8496"/>
      <g strokeWidth="3">
        <path d="m-1500.5 960.18c-105.47 0-191.86 81.641-199.45 185.17h109.14a92.058 92.058 0 0 1 90.816-77.232 92.058 92.058 0 0 1 90.777 77.564h0.072v-0.332h107.91c-8.6743-90.194-94.566-185.17-199.26-185.17z"/>
        <path d="m-1500.6 1091.9a68.141 68.141 0 0 0-68.141 68.141 68.141 68.141 0 0 0 68.141 68.143 68.141 68.141 0 0 0 68.141-68.143 68.141 68.141 0 0 0-68.141-68.141zm0 43.49a24.651 24.651 0 0 1 24.652 24.65 24.651 24.651 0 0 1-24.652 24.652 24.651 24.651 0 0 1-24.65-24.652 24.651 24.651 0 0 1 24.65-24.65z"/>
        <path d="m-1700.5 1165.6c2.9823 107.85 91.345 194.37 199.92 194.37 108.26 0 196.42-101.56 199.88-194.37h-107.52a92.058 92.058 0 0 1-91.861 86.428 92.058 92.058 0 0 1-91.775-86.428z"/>
        <path d="m-1500.5 960.18c-105.47 0-191.86 81.641-199.45 185.17h109.14a92.058 92.058 0 0 1 90.816-77.232 92.058 92.058 0 0 1 90.777 77.564h0.072v-0.332h107.91c-8.6743-90.194-94.566-185.17-199.26-185.17z"/>
      </g>
      </g>
      <g transform="translate(1872.7 -633.9)">
      <circle cx="-1500.6" cy="1160.1" r="189.97" strokeWidth="2.8496"/>
      <g strokeWidth="3">
        <path d="m-1500.5 960.18c-105.47 0-191.86 81.641-199.45 185.17h109.14a92.058 92.058 0 0 1 90.816-77.232 92.058 92.058 0 0 1 90.777 77.564h0.072v-0.332h107.91c-8.6743-90.194-94.566-185.17-199.26-185.17z" fill="#f00"/>
        <path d="m-1500.6 1091.9a68.141 68.141 0 0 0-68.141 68.141 68.141 68.141 0 0 0 68.141 68.143 68.141 68.141 0 0 0 68.141-68.143 68.141 68.141 0 0 0-68.141-68.141zm0 43.49a24.651 24.651 0 0 1 24.652 24.65 24.651 24.651 0 0 1-24.652 24.652 24.651 24.651 0 0 1-24.65-24.652 24.651 24.651 0 0 1 24.65-24.65z" fill="#f2f2f2"/>
        <path d="m-1700.5 1165.6c2.9823 107.85 91.345 194.37 199.92 194.37 108.26 0 196.42-101.56 199.88-194.37h-107.52a92.058 92.058 0 0 1-91.861 86.428 92.058 92.058 0 0 1-91.775-86.428z" fill="#f9f9f9"/>
        <path d="m-1500.5 960.18c-105.47 0-191.86 81.641-199.45 185.17h109.14a92.058 92.058 0 0 1 90.816-77.232 92.058 92.058 0 0 1 90.777 77.564h0.072v-0.332h107.91c-8.6743-90.194-94.566-185.17-199.26-185.17z" fill="url(#linearGradient4489)"/>
      </g>
      </g>
    </g>
    </Logo>
  );
}

export { Logo };
