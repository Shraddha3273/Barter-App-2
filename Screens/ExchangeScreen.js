import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    TextInput,
    Alert,
    Modal,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class ExchangeScreen extends React.Component{
render(){
    return(
        <View style = {{ backgroundColor:'#7912ff', flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>This is Exchange Screen</Text>
        </View>
)}
}