/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator from './src/navigator/AppNavigator';
import {name as appName} from './app.json';
import { createAppContainer } from 'react-navigation'

AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigator));
