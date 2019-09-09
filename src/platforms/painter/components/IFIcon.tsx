/**
 * 运行时图标
 */
import React, { FC } from 'react';
import { Icon, IIconProps } from '../../../baseComponents';

export const IFIcon: FC<IIconProps> = (props) => {
  return (
    <Icon {...props}></Icon>
  );
}