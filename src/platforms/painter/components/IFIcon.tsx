/**
 * 运行时图标
 */
import React, { FC, MouseEventHandler } from 'react';
import { Icon } from '../../../baseComponents';

interface IIFIcon {
  type: 'string',
  onClick?: MouseEventHandler
}

export const IFIcon: FC<IIFIcon> = (props) => {
  const { type, onClick } = props;
  return (
    <Icon type={type} onClick={onClick}></Icon>
  );
}