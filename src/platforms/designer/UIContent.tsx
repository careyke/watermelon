import React, { FC } from 'react';
import styles from './designer.less';
import { SettingBar,LayoutBar } from './commons';
import {FlexPanel} from '../../baseComponents';

export const UIContent: FC = () => {
  return (
    <FlexPanel direction='col' className={styles.uicontent}>
      <FlexPanel direction='col' className={styles.settingContent}>
        <SettingBar></SettingBar>
        <LayoutBar></LayoutBar>
      </FlexPanel>
    </FlexPanel>
  );
}