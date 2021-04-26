import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export function CartIcon(props: SvgProps) {
  return (
    <Svg width={17} height={17} viewBox="0 0 11 11" fill="none" {...props}>
      <Path
        d="M3.062 9.725a.672.672 0 101.345 0 .672.672 0 00-1.345 0zM7.705 9.725a.672.672 0 101.345 0 .672.672 0 00-1.345 0zM2.704 2.307h6.585a.9.9 0 01.593.212.671.671 0 01.229.631l-.55 2.906a.789.789 0 01-.745.6l-5.354.323-.758-4.672z"
        fill="#0065FF"
      />
      <Path
        d="M1 1.002h.871a.64.64 0 01.632.544l.968 6.41a.09.09 0 00.088.076l5.589.005"
        stroke="#0065FF"
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}
