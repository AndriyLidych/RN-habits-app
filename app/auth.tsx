import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, View,} from "react-native";
import {Text, TextInput,Button,} from 'react-native-paper'

const AuthScreen = () =>{
    const [isSignUp, setIsSignup] = useState<boolean>(true)
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>

            <View>
                <Text> {isSignUp ?"Create Account" : "Welcome Back"} </Text>
                <TextInput label="Email" autoCapitalize="none" keyboardType="email-address" placeholder="example@gmail.com" mode="outlined" ></TextInput>
                <TextInput label="Password" autoCapitalize="none" keyboardType="email-address"  mode="outlined" ></TextInput>

                 <Button mode='contained'>{isSignUp ?"Sign Up" : "Sign In"}</Button>
                 <Button mode='text'>{isSignUp ? "Already have account?" : " Don't have account? Sign In"}</Button>
A
            </View>
        </KeyboardAvoidingView>
    );
};

export default AuthScreen;