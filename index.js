/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppNavigator from './src/navigator/AppNavigator';

AppRegistry.registerComponent(appName, () => AppNavigator);
