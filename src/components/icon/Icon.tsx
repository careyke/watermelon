/**
 * icon组件
 */
import React, { FC, MouseEventHandler } from 'react';
import classnames from 'classnames';
import styles from './icon.less';

interface IIconProps {
  type: string;
  onClick?: MouseEventHandler
}

export const Icon: FC<IIconProps> = (props) => {
  const { type, onClick } = props;
  const iconClass = classnames({
    [styles.icon]: true,
    [styles.iconClick]: onClick,
    [`iconfont icon-${type}`]: type
  })
  return <span className={iconClass} onClick={onClick}></span>
}