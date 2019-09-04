/**
 * 运行时行布局容器
 */
import React, { FC } from 'react';
import { FlexPanel } from '../../../baseComponents';

export const IFRow: FC = (props) => {
  const { children } = props;
  return (
    <FlexPanel direction='row'>{children}</FlexPanel>
  );
}