/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import Login from './login.js';
import Home from './Home';
import YourProjects from './yourProjects.js';
import OurServices from './AnimatedOurServices.js';
import React , {Component} from "react";
import { View, Text ,Button , Platform ,Image} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class LoginScreen extends Component {
    static navigationOptions = {
}

    render(){
        return (<Login navigation = {this.props.navigation}/>);
    }
}

class HomeScreen extends Component {
    static navigationOptions = {
       headerTitle:"About us",

 }
    render(){
        return (<Home navigation = {this.props.navigation}/>);
    }
}

class YourProjectsScreen extends Component {
    static navigationOptions = {
        headerTitle:"Your Projects",
 
  }
 
    render(){
        return (<YourProjects navigation = {this.props.navigation}/>);
    }
}

class OurServicesScreen extends Component {
    static navigationOptions = {
       headerLeft: null,
       gesturesEnabled: false,
}
    render(){
        return (<OurServices navigation = {this.props.navigation}/>);
    }
}

// class HomeScreen1 extends Component {
//     static navigationOptions = ({navigation}) => {
//         return {
//             title: 'Home',
//             headerLeft:null,
//             headerRight: (
//               <Button
//                 onPress={() => navigation.goBack()}
//                 title="Log out"
//                 color={Platform.OS=="ios"?"#FFFFFF":"#274690"}
//               />
//             ),
//         };

// };


//   render() {
//     // return (<Home navigation = {this.props.navigation}/>);
//   }

// }




const AppNavigator = createStackNavigator(
    {
        Login : LoginScreen,
        Home : HomeScreen,
        YourProjects : YourProjectsScreen,
        OurServices:OurServicesScreen,
    },
    {
        initialRouteName : "YourProjects",
        defaultNavigationOptions:{
            headerStyle: {
              backgroundColor: '#DD7018',
            },
        }
    }
)

const AppContainer = createAppContainer(AppNavigator);
export default class MP extends Component {
  render() {
    return <AppContainer />;
  }
}
