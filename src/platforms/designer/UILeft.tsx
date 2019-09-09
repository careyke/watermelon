import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './designer.less';
import { IFCol } from '../painter';

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
    <IFCol className={uileftClass}></IFCol>
  );
}