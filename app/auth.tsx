import React from 'react';
import {Button, Keyboard, KeyboardAvoidingView, Platform, View,} from "react-native";
import {Text, TextInput} from 'react-native-paper'

const AuthScreen = () => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>

            <View>
                <Text> Create account 2233222  </Text>
                <TextInput label="Email" autoCapitalize="none" keyboardType="email-address" placeholder="example@gmail.com" mode="outlined" ></TextInput>
                <TextInput label="Password" autoCapitalize="none" keyboardType="email-address"  mode="outlined" ></TextInput>
                 {/*<Button>123</Button>*/}
            </View>
        </KeyboardAvoidingView>
    );
};

export default AuthScreen;