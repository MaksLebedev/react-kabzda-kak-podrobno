import { ChangeEvent, useState } from "react";
import { Select } from "./Select";
import { action } from "@storybook/addon-actions";

export default {
  title: "Select",
  component: Select,
};

export const WithValue = () => {
  const [value, setValue] = useState("2");

  // const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setParentValue(e.currentTarget.value);
  // };
  return (
    // <Select
    //   items={[
    //     { title: "MU", value: 1 },
    //     { title: "Real Madrid", value: 2 },
    //     { title: "Juventus", value: 3 },
    //   ]}
    //   value={parentValue}
    //   onChange={onChangeHandler}
    // />
    <Select
      onChange={setValue}
      value={value}
      items={[
        { value: "1", title: "Minsk" },
        { value: "2", title: "Moscow" },
        { value: "3", title: "Kiev" },
      ]}
    />
  );
};

export const WithOutValue = () => {
  const [value, setValue] = useState(null);

  return (
    <>
      <Select
        onChange={setValue}
        value={value}
        items={[
          { value: "1", title: "Minsk" },
          { value: "2", title: "Moscow" },
          { value: "3", title: "Kiev" },
        ]}
      />
    </>
  );
};
