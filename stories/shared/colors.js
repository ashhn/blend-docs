import React from "react";
// this uses default theme... if more themes exists merge those later...
import {
  Grid,
  Cell,
  Text,
  Box,
  ThemeProvider,
  theme,
  createTheme,
} from "@blend-ui/core";

function splitArrayIntoChunks(arr, chunkLen) {
  var chunkList = [];
  var chunkCount = Math.ceil(arr.length / chunkLen);
  for (var i = 0; i < chunkCount; i++) {
    chunkList.push(arr.splice(0, chunkLen));
  }
  return chunkList;
}

const ColorRow = ({ listIndex, colorList, colors }) => {
  return (
    <Grid width={1} direction={"row"} key={"list-row-" + listIndex} mb={2}>
      {colorList.map((color) => (
        <Cell xs={2} p={1} key={"color-cell-" + color}>
          <Grid width={1} direction={"column"}>
            <Box width={1} height={100} bg={colors[color]} />
            <Cell xs={12}>
              <Text regular fontSize={1}>
                {color}
              </Text>
            </Cell>
            <Cell xs={12}>
              <Text regular fontSize={1}>
                {colors[color]}
              </Text>
            </Cell>
          </Grid>
        </Cell>
      ))}
    </Grid>
  );
};

const PaletteRow = ({ listIndex, colors, colorKey }) => {
  // console.log(colors,colorKey);
  return (
    <React.Fragment>
      <Cell xs={12} borderBottom={"1px solid lightGray"} mb={4} p={1}>
        <Text bold>{colorKey}</Text>
      </Cell>
      <ColorRow
        listIndex={listIndex}
        colorList={Object.keys(colors)}
        colors={colors}
      />
    </React.Fragment>
  );
};
const ThemeColors = ({ colorRows, colors }) => {
  return (
    <Grid width={1} p={3} direction={"column"}>
      {colorRows.map((color, i) => (
        <ColorRow
          key={"color-row-" + i}
          listIndex={i}
          colorList={color}
          colors={colors}
        />
      ))}
    </Grid>
  );
};

export const Colors = () => {
  const mergedTheme = React.useMemo(() => createTheme(theme, []));
  console.log("MERGED ", mergedTheme);
  const colorRows = splitArrayIntoChunks(Object.keys(mergedTheme.colors), 6);

  return (
    <ThemeProvider theme={mergedTheme}>
      <ThemeColors colorRows={colorRows} colors={mergedTheme.colors} />
    </ThemeProvider>
  );
};

export const Palette = () => {
  const mergedTheme = React.useMemo(() => createTheme(theme, []));

  return (
    <ThemeProvider theme={mergedTheme}>
      <Grid width={1} p={3} direction={"column"}>
        {Object.keys(mergedTheme.palette).map((key, i) => (
          <PaletteRow
            colors={mergedTheme.palette[key]}
            colorKey={key}
            listIndex={i}
          />
        ))}
      </Grid>
    </ThemeProvider>
  );
};

export const ColorStyles = () => {
  const mergedTheme = React.useMemo(() => createTheme(theme, []));

  return (
    <ThemeProvider theme={mergedTheme}>
      <Grid width={1} p={3} direction={"column"}>
        {Object.keys(mergedTheme.colorStyles).map((key, i) => (
          <React.Fragment>
            <Cell
              xs={12}
              color={mergedTheme.colorStyles[key].color}
              bg={mergedTheme.colorStyles[key].backgroundColor}
              mb={4}
              p={1}
            >
              <Text bold>{key}</Text>
            </Cell>
          </React.Fragment>
        ))}
      </Grid>
    </ThemeProvider>
  );
};
