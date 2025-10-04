import type { FC } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

import type { IconProps } from './LightBulbIcon';

const SmilePlusIcon: FC<IconProps> = ({ size = 56, color = '#FACC15' }) => {
  const strokeWidth = 2.5;
  return (
    <Svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <Circle
        cx="28"
        cy="28"
        r="25"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 33C20.5 36 24 38 28 38C32 38 35.5 36 38 33"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 24H21"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M35 24H36"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28 16V24"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24 20H32"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SmilePlusIcon;
