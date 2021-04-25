import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export function SearchIcon(props: SvgProps) {
  return (
    <Svg
      {...props}
      width={props.width ? props.width : 19}
      height={props.width ? props.width : 19}
      viewBox="0 0 19 19"
      fill="none"
    >
      <Path
        d="M9 17A8 8 0 109 1a8 8 0 000 16z"
        stroke="#B3BAC5"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d="M15.281 15.331l2.362 2.362"
        stroke="#B3BAC5"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function Trash(props: SvgProps) {
  return (
    <Svg
      {...props}
      width={props.width ? props.width : 13}
      height={props.height ? props.height : 15}
      viewBox="0 0 13 15"
      fill="none"
    >
      <Path
        d="M10.622 1.867h-8.4a1.4 1.4 0 00-1.4 1.4v.469h11.2v-.467a1.4 1.4 0 00-1.4-1.4v-.002zM8.176.936l.206 1.473H4.46L4.666.936h3.51zm.112-.934H4.554a.831.831 0 00-.8.694l-.273 1.953a.594.594 0 00.6.693h4.668a.593.593 0 00.6-.694L9.076.695a.83.83 0 00-.8-.693h.012zm2.555 4.668H1.974a.839.839 0 00-.849.93l.765 8.41a1.045 1.045 0 001.018.93h7a1.045 1.045 0 001.018-.93l.765-8.41a.84.84 0 00-.849-.93h.001zm-6.301 8.4h-1.4l-.467-6.535h1.867v6.535zm2.8 0H5.475V6.536h1.867v6.534zm2.334 0h-1.4V6.536h1.867l-.467 6.534z"
        fill="#8993A4"
      />
    </Svg>
  );
}
