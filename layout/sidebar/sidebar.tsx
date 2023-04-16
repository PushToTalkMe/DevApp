import { Menu } from "../menu/menu";
import styles from "./sidebar.module.css";
import { SidebarProps } from "./sidebar.props";
import cn from "classnames";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};
