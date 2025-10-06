import type { FC } from 'react';
import { Text, View } from 'react-native';
import type { SvgProps } from 'react-native-svg';

import SmileIcon from '../assets/icons/smile.svg';
import SmilePlusIcon from '../assets/icons/smile-plus.svg';

export type StageIconKey = 'smile' | 'plus';

export type StageRowProps = {
  label: string;
  icons: StageIconKey[];
};

type StageIconComponent = FC<SvgProps>;

const iconMap: Record<StageIconKey, StageIconComponent> = {
  smile: SmileIcon,
  plus: SmilePlusIcon,
};

const StageRow: FC<StageRowProps> = ({ label, icons }) => {
  return (
    <View className="items-center gap-3">
      <View className="flex-row items-center justify-center gap-4">
        {icons.map((icon, index) => {
          const IconComponent = iconMap[icon];
          return <IconComponent key={`${icon}-${index}`} width={56} height={56} />;
        })}
      </View>
      <Text className="text-center text-lg font-spaceGrotesk font-medium text-white">{label}</Text>
    </View>
  );
};

export default StageRow;
