import React from "react";
import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import Decorater from "./Decorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [
      (Story) => (
        <Decorater>
          <Story />
        </Decorater>
      ),
    ],
  },
};

export default preview;
