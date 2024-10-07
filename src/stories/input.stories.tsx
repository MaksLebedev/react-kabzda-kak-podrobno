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

export const ControlledInputWithFixedValue = () => {
  return <input value={"it-incubator"} />;
};
