/**
 * 测试各种button
 */
import React from 'react';
import Button from './Button';
import styles from './button.less';
import { ButtonType, ButtonShape, ButtonShowStyle } from './type'

export default function ButtonTest(): React.ReactElement {
  return (
    <div className={styles.btnTestContainer}>
      <Button type={ButtonType.Default}>{'Default'}</Button>
      <Button type={ButtonType.Primary}>{'Primary'}</Button>
      <Button icon='search' type={ButtonType.Danger}>{'Danger'}</Button>
      <Button type={ButtonType.Link}>{'Link'}</Button>
      <Button icon='search' type={ButtonType.Default}>{'Default'}</Button>
      <Button icon='search' type={ButtonType.Primary}>{'Primary'}</Button>
      <Button icon='search' type={ButtonType.Danger}>{'Danger'}</Button>
      <Button icon='search' shape={ButtonShape.Round} type={ButtonType.Primary}>{'Primary'}</Button>
      <Button icon='search' shape={ButtonShape.Circle} type={ButtonType.Danger}>{'Danger'}</Button>
      <Button icon='search' shape={ButtonShape.Round} showStyle={ButtonShowStyle.TextIcon} type={ButtonType.Primary}>{'Primary'}</Button>
    </div>
  )
}