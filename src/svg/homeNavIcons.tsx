import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

import { theme } from '../components';

export function HomeIcon(props: SvgProps) {
  const colorPrimary =
    props.color === theme.colors.primary
      ? theme.colors.primary
      : theme.colors.grey;

  const colorSecondary =
    props.color === theme.colors.primary
      ? theme.colors.secondary
      : theme.colors.grey;
  return (
    <Svg {...props} width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M17.001 17.999c.55 0 .999-.482.999-1.075V7.35c0-.385-.194-.743-.507-.934l-7-4.277a.945.945 0 00-.985 0l-7 4.276c-.314.192-.508.55-.508.935v9.574c0 .593.448 1.075.999 1.075h14.002zm0 2H2.999C1.342 19.999 0 18.622 0 16.924V7.35c0-1.083.556-2.086 1.464-2.641L8.465.432a2.94 2.94 0 013.07 0l7.001 4.277A3.091 3.091 0 0120 7.35v9.574c0 1.698-1.343 3.075-2.999 3.075z"
        fill={colorPrimary}
      />
      <Path
        d="M11.866 14.999A1.145 1.145 0 0013 13.844v-2.161a3.019 3.019 0 00-6 0v2.161a1.144 1.144 0 001.134 1.155h3.732z"
        stroke={colorSecondary}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function SearchIcon(props: SvgProps) {
  const colorPrimary =
    props.color === theme.colors.primary
      ? theme.colors.primary
      : theme.colors.grey;
  return (
    <Svg {...props} width={22} height={22} viewBox="0 0 22 22" fill="none">
      <Path
        d="M11.423 12.077a1.523 1.523 0 012.153 0l6.456 6.457a1.522 1.522 0 010 2.152v0a1.522 1.522 0 01-2.152 0l-6.457-6.457a1.522 1.522 0 010-2.152z"
        fill="#fff"
        stroke={colorPrimary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.958 3.609a6.766 6.766 0 109.569 9.568 6.766 6.766 0 00-9.569-9.568v0zm7.975 7.974a4.511 4.511 0 11.012-.012l-.012.012z"
        fill="#fff"
        stroke={colorPrimary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ConsultIcon(props: SvgProps) {
  const colorPrimary =
    props.color === theme.colors.primary
      ? theme.colors.primary
      : theme.colors.grey;

  const colorSecondary =
    props.color === theme.colors.primary
      ? theme.colors.secondary
      : theme.colors.grey;
  return (
    <Svg {...props} width={20} height={21} viewBox="0 0 20 21" fill="none">
      <Path
        d="M2.014 17.741a11.785 11.785 0 015.547-1.383h9.434c.552 0 1-.479 1-1.067V4.067c0-.588-.448-1.067-1-1.067H3.016c-.551 0-1 .479-1 1.067V17.347l-.002.394zM.501 21a.506.506 0 01-.5-.515l.015-3.148V4.067C.016 2.373 1.36 1 3.016 1h13.98c1.655 0 3 1.373 3 3.067v11.224c0 1.694-1.345 3.067-3 3.067H7.56a9.849 9.849 0 00-5.526 1.702l-1.259.854A.486.486 0 01.501 21z"
        fill={colorPrimary}
      />
      <Path
        d="M6.61 9.68h6.775M9.997 6.291v6.776"
        stroke={colorSecondary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ProfileIcon(props: SvgProps) {
  const colorPrimary =
    props.color === theme.colors.primary
      ? theme.colors.primary
      : theme.colors.grey;

  const colorSecondary =
    props.color === theme.colors.primary
      ? theme.colors.secondary
      : theme.colors.grey;
  return (
    <Svg {...props} width={18} height={21} viewBox="0 0 18 21" fill="none">
      <Path
        d="M6.941 13.13c-2.722 0-4.938 2.053-4.941 4.577.225.067.63.152 1.326.21 1 .083 2.27.083 3.615.083h4.118c1.323 0 2.573 0 3.582-.086.717-.06 1.13-.15 1.359-.22-.011-2.519-2.223-4.564-4.941-4.564H6.941zm-.001-2h4.119c3.828 0 6.941 2.953 6.941 6.582v.391C18 20 14.785 20 11.059 20H6.941C3.064 20 0 20 0 18.103v-.391c0-3.631 3.114-6.582 6.941-6.582H6.94zM8.799 8.028c1.688 0 3.062-1.352 3.062-3.013C11.861 3.353 10.487 2 8.799 2 7.11 2 5.736 3.353 5.736 5.015c0 1.661 1.374 3.013 3.063 3.013zm0 2h-.001.001zm0 0c-2.792 0-5.063-2.25-5.063-5.013C3.736 2.25 6.007 0 8.799 0c2.791 0 5.062 2.25 5.062 5.015 0 2.765-2.27 5.013-5.062 5.013z"
        fill={colorPrimary}
      />
      <Path
        d="M5.25 15.461c2.437.792 5.063.792 7.5 0"
        stroke={colorSecondary}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}
