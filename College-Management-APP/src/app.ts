import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { HomeScreen } from './components/HomeScreen';

Object.defineProperty(global, '__DEV__', { value: false });

ReactNativeScript.start(React.createElement(HomeScreen, {}, null));