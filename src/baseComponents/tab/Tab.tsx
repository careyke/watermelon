/**
 * 页签组件
 * 暂时只支持上列格式的
 */
import React, { FC, useState, useCallback } from 'react';
import { TabNav } from './TabNav';
import { TTabKey, TTabNavItem, TTabType } from './type';
import styles from './tab.less';

interface ITabProps {
  defaultActiveTabKey?: TTabKey,
  type?: TTabType
}

export const Tab: FC<ITabProps> = (props) => {
  const { children, defaultActiveTabKey } = props;
  const getValidChilren = useCallback<() => React.ReactElement[]>(() => {
    return React.Children.toArray(children).filter((child) => {
      if (!React.isValidElement(child)) return false;
      if (child.props.tabKey && child.props.tabTitle) {
        return true;
      }
    }) as React.ReactElement[]
  }, [children]);
  const validChilren = getValidChilren();
  const tabItems: TTabNavItem[] = validChilren.map((child) => {
    return { tabKey: child.props.tabKey, tabTitle: child.props.tabTitle }
  })
  const [activeKey, setActiveKey] = useState<TTabKey>(() => {
    if (defaultActiveTabKey) return defaultActiveTabKey;
    if (tabItems[0] && tabItems[0].tabKey) return tabItems[0].tabKey;
    return '';
  });
  const getActiveChild = () => {
    // 只取第一个有效值
    return validChilren.find((child) => {
      return child.props.tabKey === activeKey;
    })
  }

  return (
    <div className={styles.tab}>
      <TabNav items={tabItems} activeTabKey={activeKey} switchTab={setActiveKey} type={props.type}></TabNav>
      {getActiveChild()}
    </div>
  );
}