import type { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export type SmileArcIconProps = {
  width?: number;
  color?: string;
};

const SmileArcIcon: FC<SmileArcIconProps> = ({ width = 200, color = '#FFFFFF' }) => {
  const height = width / 3.2;
  return (
    <Svg width={width} height={height} viewBox="0 0 200 64" fill="none">
      <Path d="M16 16C56 72 144 72 184 16" stroke={color} strokeWidth={12} strokeLinecap="round" />
    </Svg>
  );
};

export default SmileArcIcon;
