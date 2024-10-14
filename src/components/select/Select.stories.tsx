import { ChangeEvent, useState } from "react";
import { Select } from "./Select";

export default {
  title: "Select",
};

export const ModeChangedSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>("");

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>)=>{
    setParentValue(e.currentTarget.value);
  }
  return (
    <Select
      items={[
        { title: "MU", value: 1 },
        { title: "Real Madrid", value: 2 },
        { title: "Juventus", value: 3 },
      ]}
      value={parentValue}
      onChange={onChangeHandler}
    />
  );
};
