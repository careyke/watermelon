/**
 * 系统级别的操作栏
 */
import React, { FC } from 'react';
import { IFRow, IFIcon } from '../../painter';
import styles from './common.less';

export const SettingBar: FC = () => {
  return (
    <IFRow className={styles.barContent}>
      <IFIcon type='save' title='保存'></IFIcon>
      <IFIcon type='yulan' title='预览'></IFIcon>
      <IFIcon type='leftmid' title='右布局'></IFIcon>
      <IFIcon type='leftmidright' title='中间布局'></IFIcon>
      <IFIcon type='midRight' title='左布局'></IFIcon>
    </IFRow>
  );
}