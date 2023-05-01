import { Htag } from "../htag/htag";
import styles from "./advantages.module.css";
import { AdvantagesProps } from "./advantages.props";
import Available from "./available.svg";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <Available />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div className={styles.description}>{a.description}</div>
        </div>
      ))}
    </>
  );
};
