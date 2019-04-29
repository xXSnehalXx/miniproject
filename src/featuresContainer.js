import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native';
const data = {
    features:["SSL Certification",
            "Admin Panel",
            "Dynamic Website",
            "Data Statistics",
            "Data Analytics",
            "Responsive Pages",
            "Mobile Compatible",
            "Secure Portal"
        ]
};

const FeaturesContainer = () => {
    var fets = new Array();
    let shortid = require('shortid');
    for (let i in data.features){
        fets.push(<View style={{height:30}} key={shortid.generate()}><Text style={styles.boldLabel}>{'\u2022'} {data.features[i]}</Text></View>)
    }

    return (
    <View style={styles.featuresContainer}>
        <View style={styles.featuresLabelContainer}>
            <Text style={styles.featuresLabel}>
                Features
            </Text>
        </View>
        <View style={styles.featuresTextContainer}>
            {fets}
        </View>
    </View>);
}


const styles = StyleSheet.create({
    featuresContainer:{
        backgroundColor:'#ffffff',
        // margin:4,
        minHeight:50,
        borderWidth:1,
        margin:8,
        paddingBottom:4


    },
    featuresLabelContainer:{
        // backgroundColor:'#ADADAD',
    alignItems:'baseline',
    paddingLeft:10
// margin:4
    },
    featuresLabel:{
        fontWeight:'bold',
        fontSize:25,
        color:'#000000',
        lineHeight:40
    },
    featuresTextContainer:{
        // minHeight:200,
        // backgroundColor:'#ADADAD',
        // justifyContent:'center'
    },
    boldLabel:{
        flex:1,
        fontWeight:'bold',
        color:'#5D5959',
        paddingLeft:10,
        lineHeight:27,
        fontSize:17,

        // alignSelf:'baseline'
        // justifyContent:'center'

    },
});

export default FeaturesContainer;
