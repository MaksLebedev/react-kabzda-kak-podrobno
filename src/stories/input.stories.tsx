import { action } from "@storybook/addon-actions";
import { ChangeEvent, useRef, useState } from "react";

export default {
  title: "input",
  //   component: input,
};

export const UncontrolledInput = () => {
  return <input />;
};

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    debugger;
    setValue(e.currentTarget.value);
  };

  return (
    <>
      <input value={value} onChange={onChangeHandler} /> - {value}
    </>
  );
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const saveHandler = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={saveHandler}>save</button>- actual value: {value}
    </>
  );
};

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return <input value={parentValue} onChange={onChangeHandler} />;
};

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  };
  return (
    <input type="checkbox" checked={parentValue} onChange={onChangeHandler} />
  );
};

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>('2');
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return (
    <select value={parentValue} onChange={onChangeHandler}>
      <option>none</option>
      <option value="1">Minsk</option>
      <option value="2">Moscow</option>
      <option value="3">Kiev</option>
    </select>
  );
};

export const ControlledInputWithFixedValue = () => {
  return <input value={"it-incubator"} />;
};
