import React from 'react';
import {Keyboard, KeyboardAvoidingView, Platform, View,Text} from "react-native";

const Auth = () => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>

            <View>
                <Text> Create account 123  </Text>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Auth;