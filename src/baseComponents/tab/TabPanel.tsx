/**
 * 页签面板
 */
import React, { FC } from 'react';
import styles from './tab.less';

export interface ITabPanelProps {
  tabTitle: string;
  tabKey: number | string; //唯一
}

export const TabPanel: FC<ITabPanelProps> = (props) => {
  const { children } = props;
  return (
    <div className={styles.tabPanel}>{children}</div>
  );
}