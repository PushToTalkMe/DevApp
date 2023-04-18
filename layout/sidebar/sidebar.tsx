import { Menu } from "../menu/menu";
import styles from "./sidebar.module.css";
import { SidebarProps } from "./sidebar.props";
import Logo from "../logo.svg";
import cn from "classnames";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <div>Поиск</div>
      <Menu />
    </div>
  );
};
