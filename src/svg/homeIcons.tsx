import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

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

export function AlarmIcon(props: SvgProps) {
  return (
    <Svg {...props} width={24} height={28} viewBox="0 0 24 28" fill="none">
      <Path
        d="M11.555 0a9.05 9.05 0 00-9.177 8.915v7.935a.728.728 0 01-.144.43l-1.95 2.66a1.46 1.46 0 00.358 2.073c.261.18.571.275.888.274h20.052a1.506 1.506 0 001.53-1.485c0-.31-.1-.612-.283-.862l-1.95-2.66a.728.728 0 01-.146-.43V8.915A9.05 9.05 0 0011.556 0h-.001z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M13.826 24.798h-3.775a.602.602 0 100 1.204h3.775a.602.602 0 000-1.204z"
        fill="#FCCE71"
        stroke="#FCCE71"
        strokeWidth={2}
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={0.001}
          y1={11.143}
          x2={23.112}
          y2={11.143}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FCCE71" />
          <Stop offset={1} stopColor="#FFAB00" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
