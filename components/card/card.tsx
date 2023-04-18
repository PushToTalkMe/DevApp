import styles from "./card.module.css";
import { CardProps } from "./card.props";
import cn from "classnames";

export const Card = ({
  color = "white",
  children,
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color == "blue",
      })}
      {...props}
    >
      {children}
    </div>
  );
};
