/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/login';
import Home from './src/Home';
import StatusInfo from './src/projectStatusInfoView';
import FeaturesContainer from './src/featuresContainer';
import RemarksContainer from './src/remarksContainer';
import StatusInfoContainer from './src/statusInfoContainer';
import {name as appName} from './app.json';
import MP from './src/Navigation';
import YourProjects from './src/yourProjects';
import OurServices from './src/AnimatedOurServices';
AppRegistry.registerComponent(appName, () => StatusInfo);
