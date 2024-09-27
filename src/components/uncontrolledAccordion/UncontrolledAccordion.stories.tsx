import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { UncontrolledAccordion } from "./UncontrolledAccordion";
import { useState } from "react";

export default {
  title: "UncontrolledAccordion",
  component: UncontrolledAccordion,
};

export const ModeChanging = () => {
  return <UncontrolledAccordion titleValue="Accordion" />;
};
