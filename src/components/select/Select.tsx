import { ItemType } from "../accordion/Accordion";

type SelectType = {
  title: string;
  value: any;
};

type SelectPropsType = {
  value: any;
  onChange: (value: any) => void;
  items: SelectType[];
};

export function Select(props: SelectPropsType) {
  return (
    <>
    <select ></select>
      {props.items.find((el) => (el.value === props.value ? el.title : ""))}

      {props.items.map((item) => {
        return <div>{item.title}</div>;
      })}
    </>
  );
}
