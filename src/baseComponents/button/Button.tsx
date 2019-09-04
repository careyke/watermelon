import React, { FC, MouseEventHandler, CSSProperties } from 'react';
import classnames from 'classnames';
import styles from './button.less';
import { ButtonType, ButtonShape, ButtonTypeClass, ButtonStyle, ButtonShapeClass, ButtonDirection, ButtonDirectionClass } from './type';

interface IButtonProps {
  type?: ButtonType,
  shape?: ButtonShape,
  icon?: string;
  buttonStyle?: ButtonStyle;
  onClick?: MouseEventHandler;
  style?: CSSProperties;
  direction?: ButtonDirection
}

export const Button: FC<IButtonProps> = (props) => {
  const { children, type = 'default', shape, buttonStyle = 'icon-text', onClick, icon, direction = 'row' } = props;
  const typeClassName = `btn${type}` as ButtonTypeClass;
  const shapeClassName = `btn${shape}` as ButtonShapeClass;
  const directionClassName = `btn${direction}` as ButtonDirectionClass;
  const buttonClass = classnames({
    [styles.button]: true,
    [styles[typeClassName]]: type,
    [styles[shapeClassName]]: shape,
    [styles[directionClassName]]: direction
  });
  const iconClass = classnames({
    [styles.icon]: true,
    [`iconfont icon-${icon}`]: icon
  });
  const textClass = classnames({
    [styles.btnicontext]: icon && buttonStyle === 'icon-text',
    [styles.btntexticon]: icon && buttonStyle === 'text-icon'
  });

  return (
    <div className={buttonClass} onClick={onClick}>
      {buttonStyle === 'icon-text' && icon ? <span className={iconClass}></span> : null}
      {shape === 'circle' && icon ? null : <span className={textClass}>{children}</span>}
      {buttonStyle === 'text-icon' && icon ? <span className={iconClass}></span> : null}
    </div>
  );
}