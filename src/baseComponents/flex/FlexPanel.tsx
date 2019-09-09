/**
 * flex布局容器
 */
import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './flexPanel.less';
import { IDirection, IDirectionClassName } from './type'

export interface IFlexProps {
  direction?: IDirection,
  className?: string
}

export const FlexPanel: FC<IFlexProps> = (props) => {
  const { children, direction, className } = props;
  const directionClassName = `flex${direction}` as IDirectionClassName;
  const flexClass = classnames({
    [styles.flexPanel]: true,
    [styles[directionClassName]]: true,
    [className as string]: className
  });

  return (
    <div className={flexClass}>{children}</div>
  );
}

//默认值
FlexPanel.defaultProps = {
  direction: 'row'
}