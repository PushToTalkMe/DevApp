import styles from "./text_area.module.css";
import { TextAreaProps } from "./text_area.props";
import cn from "classnames";

export const TextArea = ({
  className,
  ...props
}: TextAreaProps): JSX.Element => {
  return (
    <textarea className={cn(className, styles.textArea)} {...props}></textarea>
  );
};
