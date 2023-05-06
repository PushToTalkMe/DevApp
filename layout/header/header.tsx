import styles from "./header.module.css";
import { HeaderProps } from "./header.props";
import cn from "classnames";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <div {...props}>Header</div>;
};
