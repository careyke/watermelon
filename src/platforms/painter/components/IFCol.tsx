/**
 * 运行时列布局容器
 */
import React, { FC } from 'react';
import { FlexPanel } from '../../../baseComponents';

export const IFCol: FC = (props) => {
  const { children } = props;
  return (
    <FlexPanel direction='col'>{children}</FlexPanel>
  );
}