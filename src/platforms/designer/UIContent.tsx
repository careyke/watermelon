import React, { FC } from 'react';
import styles from './designer.less';
import { IFCol } from '../painter';
import { SettingBar,LayoutBar } from './commons'

export const UIContent: FC = () => {
  return (
    <IFCol className={styles.uicontent}>
      <IFCol className={styles.settingContent}>
        <SettingBar></SettingBar>
        <LayoutBar></LayoutBar>
      </IFCol>
    </IFCol>
  );
}