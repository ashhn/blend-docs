import React from "react";
import { ToastContextProvider, useToast } from "demo-blend-ui/toast";

import { Button, Text } from "demo-blend-ui/core";

export default { title: "Toast/Interactive Toast" };

export function Component2() {
  const toast = useToast();

  return (
    <React.Fragment>
      <Text>Interactive Toast</Text>
      <div>
        <Button
          onClick={() => {
            toast.show("Toast message", { title: "Test title", duration: 0 });
            toast.check();
          }}
        >
          New Error Toast
        </Button>
        <Button
          onClick={() => {
            toast.warning("Toast message", {});
          }}
        >
          New Warning Toast
        </Button>
        <Button
          onClick={() => {
            toast.info("Toast message", {});
          }}
        >
          New Info Toast
        </Button>
        <Button
          onClick={() => {
            toast.success("Toast message", {});
          }}
        >
          New Success Toast
        </Button>
      </div>
    </React.Fragment>
  );
}
/*
Component.story = {
  name: "Component",
  decorators: [ADecorator],
};
*/
Component2.story = {
  name: "Interactive Toast",
  decorators: [
    (Story) => {
      return (
        <ToastContextProvider>
          <Story />
        </ToastContextProvider>
      );
    },
  ],
};
