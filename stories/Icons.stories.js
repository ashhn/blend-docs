// import React from "react";

// import * as Icons from "@blend-ui/icons";

// export default { title: "Icons" };

// export const AllIcons = () => {
//   const icons = Object.values(Icons);
//   return icons.map((IconComponent) => <IconComponent />);
// };

// export const icons = () => <AllIcons />;
// icons.story = {
//   name: "Icons",
// };
import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import { Text } from "demo-blend-ui/core";
import Readme from "../README.md";
import * as icons from "@blend-ui/icons";

const IconList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const IconItem = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const IconContainer = styled.div`
  margin: 16px 0;
`;

const iconNames = Object.keys(icons);

storiesOf("Icons/Icons", module)
  .addDecorator(withKnobs)
  // .addParameters({
  //   readme: {
  //     // Show readme at the addons panel
  //     sidebar: Readme,
  //   },
  // })
  .add("All Icons", () => (
    <IconList>
      {Object.values(icons).map((Icon, index) => {
        const sizeValue = select(
          "size",
          ["small", "medium", "big", "scale"],
          "big"
        );
        const containerWidth =
          sizeValue === "scale"
            ? {
                width: `${select(
                  "container width",
                  ["100", "200", "300", "400"],
                  "100"
                )}px`,
              }
            : {};
        return (
          <IconItem key={index}>
            <IconContainer style={containerWidth}>
              <Icon
                size={sizeValue}
                color={select(
                  "color",
                  [
                    "solid",
                    "neutral60",
                    "surface",
                    "info",
                    "primary",
                    "primary40",
                    "warning",
                    "error",
                  ],
                  "solid"
                )}
              />
            </IconContainer>
            <Text>{iconNames[index]}</Text>
          </IconItem>
        );
      })}
    </IconList>
  ));