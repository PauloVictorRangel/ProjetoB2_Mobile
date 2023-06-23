import { StyleSheet, View, TextInput, Image, Text } from "react-native";
import { Link } from "@react-navigation/native";
import { useState } from "react";

import styles from "../../assets/styles.json";

export default function SignInScreen() {

    let [username, onChangeUsername] = useState("");
    let [password, onChangePassword] = useState("");

    return (
        <View style={signin.container}>
            <Text style={signin.title}>Welcome back!</Text>
            <View style={signin.logo__container}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={signin.logo}
                />
            </View>
            <View style={signin.textInput__container}>
                <TextInput
                    style={signin.input}
                    value={username}
                    placeholder="Username"
                    placeholderTextColor={styles.colors.tertiaryColor}
                    onChangeText={onChangeUsername}
                />
                <TextInput
                    style={signin.input}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor={styles.colors.tertiaryColor}
                    onChangeText={onChangePassword}
                    secureTextEntry
                />
            </View>
            <View>
                <Link
                    style={signin.signin__link}
                    to={{ screen: '' }}>
                    Sign In
                </Link>
                <Link
                    style={signin.forgotPassword__link}
                    to={{ screen: 'ForgotPassword' }}>
                    Forgot Password?
                </Link>
            </View>
        </View>
    );
}

const signin = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",

        padding: styles.screens.padding.container,
        backgroundColor: styles.colors.primaryColor,
    },
    title: {
        fontSize: styles.screens.fontSize.title,
        fontWeight: 200,
        color: styles.colors.textColor,
    },
    logo__container: {
        width: styles.screens.logo.width,
        height: styles.screens.logo.height,
        alignSelf: "center",
    },
    logo: {
        flex: 1,
        objectFit: "cover",
    },
    input: {
        padding: styles.screens.padding.link,
        marginBottom: styles.screens.margin.input,
        borderRadius: 50,

        fontSize: styles.screens.fontSize.text,
        backgroundColor: styles.colors.secondaryColor,
        color: styles.colors.textColor,
    },
    signin__link: {
        padding: styles.screens.padding.link,
        marginBottom: styles.screens.margin.input,
        borderRadius: 50,

        textAlign: "center",
        fontSize: styles.screens.fontSize.text,
        backgroundColor: styles.colors.highlightColor,
        color: styles.colors.textColor,
    },
    forgotPassword__link: {
        textAlign: "center",
        fontSize: styles.screens.fontSize.text,
        color: styles.colors.highlightColor,
    },
});