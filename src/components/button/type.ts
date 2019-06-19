import { MouseEventHandler, Props } from "react";
export enum ButtonType {
  Default = "default",
  Primary = "primary",
  Danger = "danger",
  Link = "link"
}

export enum ButtonShape {
  Round = "round",
  Circle = "circle"
}

export enum ButtonShowStyle {
  IconText = "icon-text",
  TextIcon = "text-icon"
}

interface IButtonOwnProps {
  disabled?: boolean;
  type?: ButtonType;
  icon?: string;
  loading?: boolean;
  shape?: ButtonShape | undefined;
  showStyle?: ButtonShowStyle;
  onClick?: MouseEventHandler<React.MouseEvent>;
}

export type IButtonProps = IButtonOwnProps & Props<any>;
