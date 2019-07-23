import React, { useState } from 'react';
import classnames from 'classnames';
import { IButtonProps, ButtonType, ButtonShape, ButtonShowStyle } from './type';
import styles from './button.less';

export default function Button(props: IButtonProps): React.ReactElement {
  const { type = 'default', shape, loading = false, showStyle = 'icon-text', icon } = props;
  let iconClass = classnames({
    [styles.btnIcon]: true,
    'iconfont': true,
    ['icon-' + icon]: true
  })
  let btnClass = classnames({
    [styles.btnBase]: true,
    [styles.btnDefault]: type === ButtonType.Default,
    [styles.btnPrimary]: type === ButtonType.Primary,
    [styles.btnDanger]: type === ButtonType.Danger,
    [styles.btnLink]: type === ButtonType.Link,
    [styles.btnRound]: shape === ButtonShape.Round,
    [styles.btnCircle]: shape === ButtonShape.Circle,
  })
  let btnTextClass = classnames({
    [styles.btnText]: true,
    [styles.btnIconText]: icon && showStyle === ButtonShowStyle.IconText,
    [styles.btnTextIcon]: icon && showStyle === ButtonShowStyle.TextIcon,
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