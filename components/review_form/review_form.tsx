import { Button } from "../button/button";
import { Input } from "../input/input";
import { Rating } from "../rating/rating";
import { TextArea } from "../text_area/text_area";
import CloseIcon from "./close.svg";
import styles from "./review_form.module.css";
import { ReviewFormProps } from "./review_form.props";
import cn from "classnames";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  return (
    <>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input placeholder="Имя" />
        <Input placeholder="Заголовок отзыва" className={styles.title} />
        <div>
          <span>Оценка:</span>
          <Rating rating={0} />
        </div>
        <TextArea placeholder="Текст отзыва" className={styles.description} />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыва отправлен</div>
        <div>Спасибо, ваш отзыва будет опубликован после проверки.</div>
        <CloseIcon className={styles.close} />
      </div>
    </>
  );
};
