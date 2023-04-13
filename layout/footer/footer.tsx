import styles from "./footer.module.css";
import { FooterProps } from "./footer.props";
import cn from "classnames";

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <div {...props}>Footer</div>;
};
