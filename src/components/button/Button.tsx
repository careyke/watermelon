import React, { useState } from 'react';
import classnames from 'classnames';
import { IButtonProps, ButtonType, ButtonShape, ButtonShowStyle } from './type';
import styles from './button.less';

export default function Button(props: IButtonProps): React.ReactElement {
  const { type = 'default', shape, loading = false, showStyle = 'icon-text', icon } = props;
  let iconClass = classnames({
    [styles['btn-icon']]: true,
    'iconfont': true,
    ['icon-' + icon]: true
  })
  let btnClass = classnames({
    [styles['btn-base']]: true,
    [styles['btn-default']]: type === ButtonType.Default,
    [styles['btn-primary']]: type === ButtonType.Primary,
    [styles['btn-danger']]: type === ButtonType.Danger,
    [styles['btn-link']]: type === ButtonType.Link,
    [styles['btn-round']]: shape === ButtonShape.Round,
    [styles['btn-circle']]: shape === ButtonShape.Circle,
  })
  let btnTextClass = classnames({
    [styles['btn-text']]: true,
    [styles['btn-icon-text']]: icon && showStyle === ButtonShowStyle.IconText,
    [styles['btn-text-icon']]: icon && showStyle === ButtonShowStyle.TextIcon,
  })
  // const [isLoading, setLoading] = useState(loading);

  return (
    <div className={btnClass}>
      {
        showStyle === ButtonShowStyle.IconText && icon ? <span className={iconClass} ></span> : null
      }
      {shape !== ButtonShape.Circle ? <span className={btnTextClass}>{props.children}</span> : null}
      {
        showStyle === ButtonShowStyle.TextIcon && icon ? <span className={iconClass} ></span> : null
      }
    </div>
  )
}