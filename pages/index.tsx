import { Button, Htag, P, Rating, Tag } from "@/components";
import { withLayout } from "@/layout/layout";
import { useState } from "react";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P>Здесь будет текст</P>
      <Tag size="small">Мал</Tag>
      <Tag size="medium" color="red">
        Мал
      </Tag>
      <Tag size="medium" color="green">
        Мал
      </Tag>
      <Tag color="primary">Мал</Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
    </>
  );
}

export default withLayout(Home);
