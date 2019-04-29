
import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';

import { View,Text,Button,TextInput ,StyleSheet,TouchableOpacity} from 'react-native';


class MyReactNativeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            // loginText:'',
            // passwordText:''
            loginText: "snehal",
            passwordText: "1234"
          };
    }
    componentWillMount(){
        if(this.props.bullRef)
          this.props.bullRef(this);
    }
    componentWillUnmount(){
        if(this.props.bullRef)
          this.props.bullRef(undefined);
    }
  handleViewRef = ref => this.view = ref;

  flipOutX = () => this.view.flipOutX(600)

  animsOn = () => {
      this.flipOutX();
      this.props.logAnim();
  }
  logButtonPress = () => {
    this.props.login(this.state.loginText,this.state.passwordText);

}

render(){
    return(
        <Animatable.View ref = {this.handleViewRef}>

        <View style={styles.loginBox}>
                      <View style={styles.inputBox}>
                            <TextInput
                        style={{ height: 43 }}
                        placeholder="eg: 2438988"
                        onChangeText={text => this.setState({ loginText: text })}
                        value={this.state.loginText}
                        />
                      </View>

                      <View style={styles.inputBox}>
                                <TextInput
                            style={{ height: 43 }}
                            placeholder="eg: 2438988"
                            onChangeText={text => this.setState({ passwordText: text })}
                            value={this.state.passwordText}
                            secureTextEntry={true}
                            />
                        
                      </View>
                      <View style={{alignItems:'center'}}>
                            <TouchableOpacity activeOpacity={0.8} onPress={this.logButtonPress}>
                                <View style={styles.loginButton}>
                                         <Text style={{color:'white',fontSize:18}}>Login</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                  </View>
        </Animatable.View>
)
}
}




const styles = StyleSheet.create({
    loginBox:{
        // flex:1,
      margin:4,
    //   backgroundColor:'#767F58',
      justifyContent:'center'
    },
    inputBox:{
         height:50,
         width:280,
        backgroundColor:'white',
        margin:4,
        // borderRadius:6,
        // borderWidth:1,
        alignSelf:'center',
        borderRadius:10,
        borderColor:'black',
        borderWidth:1,
        paddingLeft:10

    },
    txtInp:{
        fontSize:16,
        paddingLeft:10,
        paddingTop:10,
        flexWrap:'wrap'
    },
    loginButton:{
        // height:30,
        padding:6,
        width:100,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
        marginTop:8,
        backgroundColor:'#DD7018'
    }

});
export default MyReactNativeForm;

//


// const LoginComponent = withFormik({
//     // validationSchema: Yup.object().shape({
//     //   username: Yup.string().required("First name is required."),
//     //   password: Yup.string().required("Last name is required."),
//     //   rememberMe: Yup.bool()
//     // }),
//     mapPropsToValues:({user}) => ({
//         ...user
//       }),
//     validate:(values)=>{
//         const errors={};
//         if (!values.username) {
//             errors.username = 'Username Required';
//           }
//        else if (!values.password) {
//         errors.password = 'Password Required';
//         }
//
//         if(!/^[0-9_%.+-]/.test(values.username)){
//             errors.username="Invalid Username";
//         }
//         return errors;
//     },
//     onSubmit:({event})=>{
//         alert("YOOOOO");
//     },
//     displayName:'Login Form',
// })(LoginBox);
//
//
//   {/* <View style={{alignItems:'center'}}>
//             <TouchableOpacity activeOpacity={0.8} onPress={handleSubmit}>
//                 <View style={styles.loginButton}>
//                     <Text>Login</Text>
//                 </View>
//             </TouchableOpacity>
//         </View> */}

//
// export default LoginComponent;
