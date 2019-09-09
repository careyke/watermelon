/**
 * icon组件
 */
import React, { FC, MouseEventHandler } from 'react';
import classnames from 'classnames';
import styles from './icon.less';

export interface IIconProps {
  type: string;
  onClick?: MouseEventHandler;
  title?: string;
  className?: string;
}

export const Icon: FC<IIconProps> = (props) => {
  const { type, onClick, title, className } = props;
  const iconClass = classnames({
    [styles.icon]: true,
    [styles.iconClick]: onClick,
    [`iconfont icon-${type}`]: type,
    [className as string]:className
  })
  return <span className={iconClass} onClick={onClick} title={title}></span>
}