/**
 * 设计器
 */
import React, { FC } from 'react';
import styles from './designer.less';
import { UILeft } from './UILeft';
import { UIRight } from './UIRight';
import { UIContent } from './UIContent';
import { FlexPanel } from '../../baseComponents';

export const Designer: FC = () => {
  return (
    <FlexPanel className={styles.designer}>
      <UILeft></UILeft>
      <UIContent></UIContent>
      <UIRight></UIRight>
    </FlexPanel>
  );
}