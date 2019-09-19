/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator from './src/navigator/AppNavigator';
import WelcomePage from './src/pages/WelcomePage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
