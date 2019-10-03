/**
 * 系统级别的操作栏
 */
import React, { FC } from 'react';
import { FlexPanel, Icon } from '../../../baseComponents'
import styles from './common.less';

export const SettingBar: FC = () => {
  return (
    <FlexPanel className={styles.barContent}>
      <Icon type='save' title='保存'></Icon>
      <Icon type='yulan' title='预览'></Icon>
      <Icon type='leftmid' title='右布局'></Icon>
      <Icon type='leftmidright' title='中间布局'></Icon>
      <Icon type='midRight' title='左布局'></Icon>
    </FlexPanel>
  );
}