<h1 style="text-align: center">React Native Components</h1>

Cross platform react native components https://zealous-snyder-a3ec60.netlify.app/

<div style="text-align: center">
  <img src="https://badgen.net/badge/node@LTS/>=12.11.1/green">
  <img src="https://badgen.net/badge/react-native/>=0.60/orange">
  <img src="https://badgen.net/badge/npm/>=5.6.0/red">
  <img src="https://badgen.net/badge/yarn/>=1.2.0/blue">
  <img src="https://badgen.net/badge/code style/standard/yellow">
  <img src="https://badgen.net/badge/release/v1.0.10/pink">
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

## Icon

This component inherits react-native-vector-icons property:

| Property | Type                                                                                                                                                                                                     |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name     | String                                                                                                                                                                                                   |
| size     | Number                                                                                                                                                                                                   |
| type     | String(enum - "materialIcon", "antDesign", "materialCommunityIcon", "entypo", "zocial", "feather", "ionIcons", "octIcons", "evilIcons", "foundation", "fontAwesome", "fontAwesome5", "simpleLineIcons"), |
| color    | String                                                                                                                                                                                                   |

## Spinner

| Property        | Type                            |
| --------------- | ------------------------------- |
| visible         | Boolean                         |
| size            | String(enum - "small", "large") |
| backgroundColor | String (android only)           |
| onClose         | Function                        |
| color           | String                          |

## Snackbar

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

## Button

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

## Card

| Property        | Type     |
| --------------- | -------- |
| cardBorder      | Number   |
| cardWidth       | String   |
| cardTitle       | String   |
| cardColor       | String   |
| headerTextStyle | Object   |
| headerStyle     | Object   |
| onPress         | Function |

## Accordion

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

## Picker

| Property        | Type     |
| --------------- | -------- |
| bgColor         | Number   |
| width           | String   |
| pickerItems     | Array    |
| selectedItem    | String   |
| onValueChange   | Function |
| pickerItemStyle | Object   |
| pickerTextStyle | Object   |

## Dialog

| Property         | Type                                   |
| ---------------- | -------------------------------------- |
| type             | String(enum - "bottomSheet", "dialog") |
| visible          | Boolean                                |
| cancelable       | Function                               |
| onClose          | Function                               |
| dialogContainer  | Object                                 |
| buttonTitleStyle | Object                                 |

## License

[MIT](LICENSE) © Ajay
