import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './designer.less';
import { IFCol } from '../painter';
import {Tab,TabPanel} from '../../baseComponents'

interface ILeftProps {
  collapsed?: boolean;
}

export const UILeft: FC<ILeftProps> = (props) => {
  const { collapsed } = props;
  const uileftClass = classnames({
    [styles.uileft]: true,
    [styles.collapsed]: collapsed
  });

  return (
    <IFCol className={uileftClass}>
      <Tab type='full'>
        <TabPanel tabKey='a' tabTitle='tab1'>tab1</TabPanel>
        <TabPanel tabKey='b' tabTitle='tab2'>tab2</TabPanel>
      </Tab>
    </IFCol>
  );
}