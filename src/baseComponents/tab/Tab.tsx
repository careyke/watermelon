/**
 * 页签组件
 * 暂时只支持上列格式的
 */
import React, { FC, useState, useCallback } from 'react';
import { TabNav } from './TabNav';
import { TTabKey, TTabNavItem, TTabType } from './type';
import styles from './tab.less';

interface ITabProps {
  defaultActiveTabKey?: TTabKey;
  type?: TTabType;
  onChange?: (tabKey?: TTabKey, oldTabKey?: TTabKey) => void
}

export const Tab: FC<ITabProps> = (props) => {
  const { children, defaultActiveTabKey, onChange } = props;
  const getValidChilren = useCallback<() => React.ReactElement[]>(() => {
    return React.Children.toArray(children).filter((child) => {
      if (!React.isValidElement(child)) return false;
      if (child.props.tabKey && child.props.tabTitle) {
        return true;
      }
    }) as React.ReactElement[]
  }, [children]);
  const validChilren = getValidChilren();
  let tabItems: TTabNavItem[] = [];
  validChilren.forEach((child) => {
    const { tabKey, tabTitle } = child.props;
    if (tabItems.find((item) => item.tabKey === tabKey)) {
      console.error('there is same tabKey:' + tabKey);
    } else {
      return tabItems.push({ tabKey, tabTitle });
    }
  })
  const [activeKey, setActiveKey] = useState<TTabKey>(() => {
    if (defaultActiveTabKey) {
      if (tabItems.find((item) => item.tabKey === defaultActiveTabKey)) {
        return defaultActiveTabKey;
      }
    };
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
      <TabNav items={tabItems} activeTabKey={activeKey} switchTab={setActiveKey} onChange={onChange} type={props.type}></TabNav>
      {getActiveChild()}
    </div>
  );
}