import React, { FC } from 'react';
import { Button, IButtonProps } from '../../../baseComponents';

export const IFButton: FC<IButtonProps> = (props) => {
  const { children, ...other } = props;
  return (
    <Button {...other}>{children}</Button>
  );
}