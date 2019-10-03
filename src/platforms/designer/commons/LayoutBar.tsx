/**
 * UI级别的操作栏
 */
import React, { FC } from 'react';
import { FlexPanel, Icon } from '../../../baseComponents'
import styles from './common.less';

export const LayoutBar: FC = () => {
  return (
    <FlexPanel className={styles.barContent}>
      <Icon type='fuzhi' title='复制'></Icon>
      <Icon type='zhantie' title='粘贴'></Icon>
    </FlexPanel>
  );
}