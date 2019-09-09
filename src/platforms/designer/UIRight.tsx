import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './designer.less';

interface IRightProps {
  collapsed?: boolean;
}

export const UIRight: FC<IRightProps> = (props) => {
  const { collapsed = false } = props
  const uirightClass = classnames({
    [styles.uiright]: true,
    [styles.collapsed]: collapsed
  });

  return (
    <div className={uirightClass}>
    </div>
  );
}