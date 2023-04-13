import { Button, Htag, P, Tag } from "@/components";

export default function Home(): JSX.Element {
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
    </>
  );
}
