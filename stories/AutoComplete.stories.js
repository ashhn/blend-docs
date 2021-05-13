import React from "react";
import { AutoComplete } from "demo-blend-ui/core";
import { Text } from "demo-blend-ui/core";

export default { title: "Core/AutoComplete" };

const list = [
  { key: "0", value: "Eggs" },
  { key: "1", value: "Bread" },
  { key: "2", value: "Milk" },
  { key: "3", value: "Butter" },
  { key: "4", value: "Juice" },
  {
    key: "5",
    value: "Food Items",
    component: <Text as="span">Compomnent text</Text>,
  },
];

export const auto = () => (
  <div>
    The List:
    <ul>Eggs</ul>
    <ul>Bread</ul>
    <ul>Milk</ul>
    <ul>Butter</ul>
    <ul>Juice</ul>
    <AutoComplete suggestions={list} placeholder="Try searching the list..." />
  </div>
);
auto.story = {
  name: "Interactive",
};

export const auto2 = () => (
  <AutoComplete suggestions={list} showList={true} activeItem={2} />
);
auto2.story = {
  name: "Showing Active Item",
};
