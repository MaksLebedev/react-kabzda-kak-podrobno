import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Accordion } from "./Accordion";
import { useState } from "react";

export default {
  title: "Accordion",
  component: Accordion,
};

const callback = action("onChange");
const onClickCallback = action("some item was clicked");

export const MenuCollapsedMode = () => {
  return (
    <Accordion
      titleValue="Menu / Collapsed Accordion"
      collapsed={true}
      onChange={callback}
      items={[]}
      onClick={onClickCallback}
    />
  );
};

export const UsersUncollapsedMode = () => {
  return (
    <Accordion
      titleValue="Users / Opened Accordion"
      collapsed={false}
      onChange={callback}
      items={[
        { title: "Dimych", value: 1 },
        { title: "Valera", value: 2 },
        { title: "Artem", value: 3 },
        { title: "Viktor", value: 4 },
      ]}
      onClick={onClickCallback}
    />
  );
};

export const ModeChanging = () => {
  const [value, setValue] = useState(true);
  return (
    <Accordion
      titleValue="Users"
      collapsed={value}
      onChange={() => {
        setValue(!value);
      }}
      items={[
        { title: "Dimych", value: 1 },
        { title: "Valera", value: 2 },
        { title: "Artem", value: 3 },
        { title: "Viktor", value: 4 },
      ]}
      onClick={(value) => {
        alert(`user with ID ${value} should be happy`);
      }}
    />
  );
};
