import React from "react";
import { ToastContextProvider, useToast } from "demo-blend-ui/toast";

import { Checkbox } from "demo-blend-ui/core";

export function Component2() {
  const toast = useToast();

  return (
    <React.Fragment>
      <div>Toasts</div>
      <div>
        <button
          onClick={() => {
            toast.show("Toast message", { title: "Test title", duration: 0 });
            toast.check();
          }}
        >
          New Error Toast
        </button>
        <button
          onClick={() => {
            toast.warning("Toast message", {});
          }}
        >
          New Warning Toast
        </button>
        <button
          onClick={() => {
            toast.info("Toast message", {});
          }}
        >
          New Info Toast
        </button>
        <button
          onClick={() => {
            toast.success("Toast message", {});
          }}
        >
          New Success Toast
        </button>
      </div>
    </React.Fragment>
  );
}
