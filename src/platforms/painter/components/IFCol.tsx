/**
 * 运行时列布局容器
 */
import React, { FC } from 'react';
import { FlexPanel, IFlexProps } from '../../../baseComponents';

type IFColProps = Omit<IFlexProps, 'direction'>;

export const IFCol: FC<IFColProps> = (props) => {
  const { children, className } = props;
  return (
    <FlexPanel direction='col' className={className}>{children}</FlexPanel>
  );
}