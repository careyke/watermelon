/**
 * flex布局容器
 */
import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './flexPanel.less';
import { IDirection, IDirectionClassName } from './type'

interface IFlexProps {
  direction?: IDirection
}

export const FlexPanel: FC<IFlexProps> = (props) => {
  const { children, direction = 'row' } = props;
  const directionClassName = `flex${direction}` as IDirectionClassName;
  const flexClass = classnames({
    [styles.flexPanel]: true,
    [styles[directionClassName]]: true
  });

  return (
    <div className={flexClass}>{children}</div>
  );
}