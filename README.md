# react-system-uicons

> System UIcons to ReactJS

[![NPM](https://img.shields.io/npm/v/react-system-uicons.svg)](https://www.npmjs.com/package/@moiseshp/react-system-uicons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-system-uicons
```

## Usage

```jsx
import React, { Component } from 'react';

import MyComponent from 'react-system-uicons';

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

## TODO

- Add test to getWidthAndHeight()
- Add test to mergeTheme()
- Add test to SvgIcon
- Add test to IconProvider
- Create documentation

## Features

- Use icons with zero configuration
- Can set css styles o modules css through class names of component
- You need advance feature use icons with custom theme using SystemUIconsProvider
- You can tests the Icons through data-testid property
- Add custom owner icon to project with the wrapper component SvgIcon
- Easy integration with popular frameworks: Mui, Bootstrap, Chakra, Styled Components, etc.

## License

MIT © [moiseshp](https://github.com/moiseshp)
