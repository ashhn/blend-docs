import { action } from "@storybook/addon-actions";

let checkedStatus = true;

const checkAction = (e) => {
  console.log("CHECK ", e);
  console.log("CHECK ", e.target, e.currentTarget, e.currentTarget.id);
  action(`${e.currentTarget.id} was clicked`)(
    e.currentTarget.value,
    e.currentTarget.checked
  );
  checkedStatus = !checkedStatus;
};
