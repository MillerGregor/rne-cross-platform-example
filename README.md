# rne-cross-platform-example

## A React Native Elements example app for android, iOS, and web that shares a single codebase.

### "Write once, run anywhere... including UI"

React, React Native, and React Native Web provide a foundation for building truly cross-platform applications.

React Native Elements, originally created for React Native, also supports react-native-web, allowing developers to implement UIs once, for all platforms.

Current mobile devices have blurred the lines between mobile, web, and desktop. Mobile UI designs must account for the same sizing freedoms as a desktop web browser. React Native Elements allows use of single UI component library.

### Details:

#### Packages

This example includes:

* react
* react-native
* [react-native-web](https://necolas.github.io/react-native-web/storybook)
* [react-native-elements](https://react-native-training.github.io/react-native-elements/)
* react-scripts, provided by [create-react-app](https://github.com/facebookincubator/create-react-app)
* [expo](https://expo.io/)
* [jest](https://facebook.github.io/jest/) & [enzyme](http://airbnb.io/enzyme/)

#### Creation

To include react-scripts and expo, this example used instructions by [Yannick Spark](https://medium.com/@yannickdot/write-once-run-anywhere-with-create-react-native-app-and-react-native-web-ad40db63eed0).

Neither expo or react-scripts are required for react-native-elements to work with react-native-web. Projects can be created by "ejecting" from either/both, or by manual install.

#### Entry Points

Native and web have different entry points. Native enters via App.native.js which simply exports src/App.js, which is web's entry. These are the locations expected by expo and react-scripts.

#### Platform-specific code

The source only diverges when desired. An example can be seen in App.js:

```js
const mainTitleSize = Platform.OS === "web" ? { h2: true } : { h4: true };
```

which allows for different prop values:

```jsx
<Text {...mainTitleSize} style={styles.titleText}>
```

#### Webpack config

react-app-rewired allows additions to the webpack configuration. Via the /config-overrides.js file, react-native-vector-icons and react-native-elements can be transpiled via babel-loader.

#### Other cross-platform libraries

An example of another library which supports mobile and web is [svgs](https://github.com/godaddy/svgs).

Expo includes react-native-svg built-in. HTML5 supports svg elements as a W3C recommendation. The svgs library provides a common interface, as shown in App.js:

```js
<Svg width={80} height={50} viewBox="0 0 841.9 595.3">
  <G fill="#61DAFB">...inner elements</G>
</Svg>
```

Careful selection of project dependencies can preserve a near 100%-common codebase.

TODO: add [Electron](https://electronjs.org/) to demonstrate desktop compatibility

```

```
