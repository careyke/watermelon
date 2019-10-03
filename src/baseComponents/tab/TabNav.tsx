/**
 * Tab Navbar
 */
import React, { FC, RefObject } from 'react';
import classnames from 'classnames';
import { TTabKey, TTabNavItem, TTabType } from './type';
import styles from './tab.less';
import { useSizeLinkage } from './hooks';

interface ITabNavProps {
  activeTabKey: TTabKey;
  items: TTabNavItem[];
  switchTab: (tabKey: TTabKey) => void;
  type?: TTabType;
  onChange?: (tabKey?: TTabKey, oldTabKey?: TTabKey) => void
}

export const TabNav: FC<ITabNavProps> = (props) => {
  const { activeTabKey, items, switchTab, type = 'default', onChange } = props;
  const { emitterDomRef, recieverDomRef } = useSizeLinkage(activeTabKey);
  const handleItemClick = (tabKey: TTabKey) => {
    if (tabKey !== activeTabKey) {
      switchTab(tabKey);
      onChange && onChange(tabKey, activeTabKey);
    }
  }
  const renderItems = () => {
    const length = items.length;
    return items.map((item, index) => {
      const { tabKey, tabTitle } = item;
      const tabClass = classnames({
        [styles.tabItem]: true,
        [styles.tabItemLast]: length - 1 === index,
        [styles.fullType]: type === 'full',
        [styles.activeItem]: tabKey === activeTabKey
      });
      let width = 'auto';
      if (type === 'full' && length > 0) {
        width = `${1 / length * 100}%`;
      }
      return <div ref={tabKey === activeTabKey ? emitterDomRef as RefObject<HTMLDivElement> : undefined} style={{ width: width }} className={tabClass} key={tabKey} onClick={() => { handleItemClick(tabKey) }}>{tabTitle}</div>
    })
  }

  return (
    <div className={styles.tabNav}>
      <div className={styles.tabNavContent}>
        {renderItems()}
      </div>
      <div className={styles.tabNavProgress}>
        <span ref={recieverDomRef as RefObject<HTMLSpanElement>} className={styles.cube}></span>
      </div>
    </div>
  );
}