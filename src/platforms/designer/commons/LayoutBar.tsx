/**
 * UI级别的操作栏
 */
import React, { FC } from 'react';
import { IFRow, IFIcon } from '../../painter';
import styles from './common.less';

export const LayoutBar: FC = () => {
  return (
    <IFRow className={styles.barContent}>
      <IFIcon type='fuzhi' title='复制'></IFIcon>
      <IFIcon type='zhantie' title='粘贴'></IFIcon>
    </IFRow>
  );
}