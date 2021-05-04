import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { theme } from '../components';

export function CloseEye({ width, color }: SvgProps) {
  return (
    <Svg
      width={width}
      height={width ? width : 24 * 0.857}
      viewBox="0 0 14 12"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.901.75L1.825 10.826l1.06 1.06L12.963 1.812 11.902.75zM8.88 1.871L7 3.75A2.25 2.25 0 004.75 6L2.145 8.605C.813 7.375.25 6 .25 6S2.09 1.5 7 1.5c.65 0 1.28.14 1.879.371zm3.527 2.515A13.99 13.99 0 0113.75 6S10.682 10.5 7 10.5c-.233 0-.46-.01-.678-.03l6.084-6.084z"
        fill={color ? color : theme.colors.grey}
      />
    </Svg>
  );
}

export function Eye({ width, color }: SvgProps) {
  return (
    <Svg width={width} height={width} viewBox="0 0 14 10" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 .5C2.09.5.25 5 .25 5S2.09 9.5 7 9.5c3.682 0 6.75-4.5 6.75-4.5S10.682.5 7 .5zM4.75 5a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}
