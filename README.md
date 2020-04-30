<h1 style="text-align: center">React Native Components</h1>
Cross platform react native components

<div style="text-align: center">
  <img src="https://badgen.net/badge/node@LTS/>=12.11.1/green">
  <img src="https://badgen.net/badge/npm/>=5.6.0/blue">
  <img src="https://badgen.net/badge/react-native/>=0.60/orange">
  <img src="https://badgen.net/badge/code style/standard/yellow">
  <img src="https://badgen.net/badge/release/v1.0.6/pink">
</div>

## Getting Started

### Prerequisites

`NodeJS >= v12.11.1`
`react-native-cli >= 2.0.1`
`react-native >= 0.61`
`npm >= 5.6.0`

## Table of Contents

- [Install](#install)
- [Components](#components)
- [Screenshots](#Screenshots)
- [License](#license)

## Install

This package uses react-native-vector-icons, you can follow [this](https://github.com/oblador/react-native-vector-icons#installation) installation instructions

npm:

```sh
npm install react-native-ui-modules
```

yarn:

```sh
yarn add react-native-ui-modules
```

## Components

- [Input](#input)
- [Icon](#icon)
- [Snackbar](#snackbar)
- [Spinner](#spinner)
- [Button](#button)
- [Card](#card)
- [Accordion](#accordion)
- [Picker](#picker)
- [Dialog](#dialog)

## Input

This component inherits all native TextInput props along with the following:-

| Property          | Type                                  |
| ----------------- | ------------------------------------- |
| variant           | String(enum - "outlined", "standard") |
| multiline         | Boolean                               |
| inputWidth        | String                                |
| height            | Number                                |
| borderRadius      | Number                                |
| borderColor       | String                                |
| borderBottomColor | String                                |
| startIcon         | Boolean                               |
| icon              | Object                                |
| endIcon           | Object                                |
| type              | String (enum - "passwod")             |
| passwordHidden    | Boolean                               |
| togglePassword    | Function                              |

```js
import React, { useState } from "react";
import { Input } from "react-native-ui-modules";

const InputComponent = () => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  return (
    <>
      <Input
        inputWidth="80%"
        variant="standard"
        startIcon={true}
        icon={{
          iconSize: 23,
          iconName: "person",
          iconColor: "black",
          iconType: "materialIcon",
        }}
        placeholder="Username"
      />

      <Input
        inputWidth="80%"
        startIcon={true}
        variant="standard"
        type="password"
        passwordHidden={passwordHidden}
        togglePassword={() => setPasswordHidden(!passwordHidden)}
        icon={{
          iconSize: 23,
          iconName: "lock",
          iconColor: "gray",
          iconType: "materialIcon",
        }}
        endIcon={{
          iconSize: 23,
          iconColor: "gray",
          iconType: "materialIcon",
          passwordOnIcon: "visibility",
          passwordOffIcon: "visibility-off",
        }}
        placeholder="Password"
      />
    </>
  );
};
```

## Icon

This component inherits react-native-vector-icons property:

| Property | Type                                                                                                                                                                                                     |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name     | String                                                                                                                                                                                                   |
| size     | Number                                                                                                                                                                                                   |
| type     | String(enum - "materialIcon", "antDesign", "materialCommunityIcon", "entypo", "zocial", "feather", "ionIcons", "octIcons", "evilIcons", "foundation", "fontAwesome", "fontAwesome5", "simpleLineIcons"), |
| color    | String                                                                                                                                                                                                   |

```js
import React from "react";
import { Icon } from "react-native-ui-modules";

const IconComponent = () => {
  return <Icon size={24} name="home" color="#343434" type="materialIcon" />;
};
```

## Spinner

<img src="https://drive.google.com/uc?export=view&id=19FY0ZyXgCACugXLV2dpnLzn3nyM6OyWg" width="300" height="500">

| Property        | Type                            |
| --------------- | ------------------------------- |
| visible         | Boolean                         |
| size            | String(enum - "small", "large") |
| backgroundColor | String                          |
| onClose         | Function                        |
| color           | String                          |

```js
import React, { useState } from "react";
import { Spinner } from "react-native-ui-modules";
import { View, Button, StyleSheet } from "react-native";

const SpinnerComponent = () => {
  const [visible, setSpinner] = useState(false);
  const toggleSpinner = () => {
    setSpinner(!visible);
  };

  return (
    <View style={styles.container}>
      <Button title="Show spinner" onPress={toggleSpinner} />
      <Spinner
        color="red"
        size="small"
        backgroundColor="#FFF"
        visible={visible}
        onClose={toggleSpinner}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
});
```

## Snackbar

<img src="https://drive.google.com/uc?export=view&id=1OXnCd-PnwTx012ZdZx0DYOjppnKWA5PS" width="300" height="500">

| Property         | Type                           |
| ---------------- | ------------------------------ |
| visible          | Boolean                        |
| position         | String(enum - "top", "bottom") |
| message          | String                         |
| messageTextColor | String                         |
| actionText       | String                         |
| actionTextColor  | String                         |
| backgroundColor  | String                         |
| handleAction     | Function                       |

```js
import React, { useState } from "react";
import { Snackbar } from "react-native-ui-modules";
import { View, Button, StyleSheet } from "react-native";

const SnackbarComponent = () => {
  const [visible, setSnackbar] = useState(false);
  const toggleSnackbar = () => {
    setSnackbar(!visible);
  };

  return (
    <View style={styles.container}>
      <Button title="Show snackbar" onPress={toggleSnackbar} />
      <Snackbar
        position="top"
        actionText="Close"
        message="Snackbar message"
        visible={visible}
        backgroundColor="#000000"
        messageTextColor="#FFFFFF"
        actionTextColor="#AB2611"
        handleAction={toggleSnackbar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
});
```

## Button

<img src="https://drive.google.com/uc?export=view&id=14Om-fV25xgv1v-B1XIDvjEILntSGVt-_" width="300" height="500">

| Property    | Type                                             |
| ----------- | ------------------------------------------------ |
| title       | String                                           |
| color       | String(enum - "primary", "secondary", "default") |
| buttonWidth | String                                           |
| variant     | String(enum - "contained", "outlined")           |
| endIcon     | Object                                           |
| titleColor  | String                                           |
| titleStyle  | Object                                           |
| buttonColor | String                                           |
| buttonStyle | Object                                           |
| onPress     | Function                                         |

```js
import React from "react";
import { Button } from "react-native-ui-modules";

const ButtonComponent = () => {
  return (
    <Button
      title="Continue"
      color="default"
      buttonWidth="80%"
      variant="contained"
      endIcon={{
        iconSize: 23,
        iconName: "chevron-right",
        iconColor: "white",
        iconType: "materialIcon",
      }}
      titleColor="white"
      onPress={() => console.log("buttonPress")}
    />
  );
};
```

## Card

<img src="https://drive.google.com/uc?export=view&id=1p0zuKcCjCORQ1v7gAdaBseY2Pvz1eWNh" width="300" height="500">

| Property        | Type     |
| --------------- | -------- |
| cardBorder      | Number   |
| cardWidth       | String   |
| cardColor       | String   |
| cardHeight      | Number   |
| headerTextStyle | Object   |
| headerStyle     | Object   |
| onPress         | Function |

```js
import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-ui-modules";

const ButtonComponent = () => {
  return (
    <Card
      cardBorder={0}
      cardWidth="80%"
      cardColor="#fff"
      cardHeight={200}
      cardTitle="Card Header"
      onPress={() => console.log("card pressed")}
      headerTextStyle={{ color: "blue" }}
      headerStyle={{ alignItems: "flex-start" }}
    >
      <Text style={{ textAlign: "center" }}>Card Content</Text>
    </Card>
  );
};
```

## Accordion

<img src="https://drive.google.com/uc?export=view&id=14IIo87yldY-PRQWN3PIHTpPrOPWMeung" width="300" height="500">

| Property         | Type     |
| ---------------- | -------- |
| bgColor          | Number   |
| width            | String   |
| heading          | String   |
| secondaryHeading | String   |
| expanded         | Boolean  |
| secondaryStyle   | Object   |
| headingStyle     | Object   |
| onChange         | Function |

```js
import React, { useState } from "react";
import { Text } from "react-native";
import { Accordion } from "react-native-ui-modules";

const AccordionComponent = () => {
  const [expanded, setExpanded] = useState(fasle);
  return (
    <Accordion
      width="80%"
      bgColor="#fff"
      heading="Heading"
      expanded={expanded}
      secondaryHeading="Secondary heading"
      onChange={() => setExpanded(!expanded)}
    >
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    </Accordion>
  );
};
```

## Picker

<img src="https://drive.google.com/uc?export=view&id=1QtdTatWofzTPLfpaRsZVjJb33aRkoYC2" width="300" height="500">

| Property        | Type     |
| --------------- | -------- |
| bgColor         | Number   |
| width           | String   |
| pickerItems     | Array    |
| selectedItem    | String   |
| onValueChange   | Function |
| pickerItemStyle | Object   |
| pickerTextStyle | Object   |

```js
import React, { useState } from "react";
import { Picker } from "react-native-ui-modules";

const PickerComponent = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const pickerItems = ["Javascript", "Typescript", "Python"];
  return (
    <Picker
      width="80%"
      bgColor="#fff"
      pickerItems={pickerItems}
      selectedItem={selectedItem}
      onValueChange={(item) => setSelectedItem(item)}
    />
  );
};
```

## Dialog

<!-- ![image](https://drive.google.com/uc?export=view&id=1Kk8pVJkL-rHEzAAtZOHxk84tA0e_lDj-) -->

<p float="left">
<img src="https://drive.google.com/uc?export=view&id=1Kk8pVJkL-rHEzAAtZOHxk84tA0e_lDj-" width="300" height="500">
<img src="https://drive.google.com/uc?export=view&id=1dRiretauABe5Sb22p2tnewNWAWwupEkw" width="300" height="500">
<img src="https://drive.google.com/uc?export=view&id=1EalPrTduTtt1rYCF-RSRNLNecjlTHYWD" width="300" height="500">
</p>

| Property         | Type                                   |
| ---------------- | -------------------------------------- |
| type             | String(enum - "bottomSheet", "dialog") |
| visible          | Boolean                                |
| cancelable       | Function                               |
| onClose          | Function                               |
| dialogContainer  | Object                                 |
| buttonTitleStyle | Object                                 |

```js
import React, { useState } from "react";
import { Dialog } from "react-native-ui-modules";

const DialogComponent = () => {
  const [showDialog, setDialog] = useState(false);
  return (
    <>
      <Button title="Show Dialog" onPress={() => setDialog(!showDialog)} />
      <Dialog
        type="bottomSheet"
        dialogContainer={{
          dialogStyle: {
            dialogWidth: "85%",
            dialogBackgroundColor: "#fff",
          },
          dialogHeaderStyle: {
            iconColor: "#343434",
            headerBgColor: "#fff",
            dialogTitleColor: "#000",
            alignDialogTitle: "center",
          },
          dialogHeaderComponent: {
            renderHeader: true,
            dialogTitle: "Heading",
            renderCloseIcon: true,
          },
          dialogFooterStyle: {
            buttonDirection: "column",
            alignFooterButton: "center",
            primaryButtonColor: "teal",
            secondaryButtonColor: "gray",
            primaryButtonWidth: "25%",
            secondaryButtonWidth: "25%",
            primaryButtonRadius: 1,
            secondaryButtonRadius: 1,
          },
          dialogFooterComponent: {
            renderFooterButton: true,
            renderButtonGroup: true,
            renderSingleButton: false,
            secondaryButtonTitle: "Discard",
            primaryButtonTitle: "Save",
            primaryButtonPress: () => {
              setDialog(!showDialog);
            },
            secondaryButtonPress: () => {
              setDialog(!showDialog);
            },
          },
        }}
        buttonTitleStyle={{
          fontWeight: "500",
          color: "#fff",
        }}
        cancelable={() => {}}
        visible={showDialog}
        onClose={() => setDialog(!showDialog)}
      >
        <View>
          <Text style={{ color: "#000" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Text>
        </View>
      </Dialog>
    </>
  );
};
```

## Screenshots

![image](https://drive.google.com/uc?export=view&id=1vLpnRJr9B2RqIBh9XoRnO8Yt6LsAFA28)
![image](https://drive.google.com/uc?export=view&id=1Kk8pVJkL-rHEzAAtZOHxk84tA0e_lDj-)

## License

[MIT](LICENSE) © Ajay
