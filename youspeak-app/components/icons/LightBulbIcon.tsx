import type { FC } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export type IconProps = {
  size?: number;
  color?: string;
};

const LightBulbIcon: FC<IconProps> = ({ size = 56, color = '#FFD700' }) => {
  const strokeWidth = 2;
  return (
    <Svg width={size} height={size * 1.2} viewBox="0 0 48 58" fill="none">
      <Circle
        cx="24"
        cy="20"
        r="16"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 36C17 38.4853 18.7909 40.5 21 40.5H27C29.2091 40.5 31 38.4853 31 36"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 41.5H29V45C29 46.6569 27.6569 48 26 48H22C20.3431 48 19 46.6569 19 45V41.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 16C18 13.2386 20.2386 11 23 11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <Path
        d="M33 21H34"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <Path
        d="M14 21H13"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <Path
        d="M24 4V6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default LightBulbIcon;
