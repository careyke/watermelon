/**
 * 运行时行布局容器
 */
import React, { FC } from 'react';
import { FlexPanel, IFlexProps } from '../../../baseComponents';

type IFRowProps = Omit<IFlexProps, 'direction'>;

export const IFRow: FC<IFRowProps> = (props) => {
  const { children, className } = props;
  return (
    <FlexPanel direction='row' className={className}>{children}</FlexPanel>
  );
}