import { StyleSheet, View, Image, TextInput, Text } from "react-native";
import { Link } from "@react-navigation/native";
import { useState } from "react";

import styles from "../../assets/styles.json";

export default function SignUpScreen() {

    let [username, onChangeUsername] = useState("");
    let [email, onChangeEmail] = useState("");
    let [password, onChangePassword] = useState("");
    let [confirmPassword, onChangeConfirmPassword] = useState("");

    return (
        <View style={signup.container}>
            <Text style={signup.title}>Create Account!</Text>
            <View style={signup.logo__container}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={signup.logo}
                />
            </View>
            <View style={signup.textInput__container}>
                <TextInput
                    style={signup.input}
                    value={username}
                    placeholder="Username"
                    placeholderTextColor={styles.colors.tertiaryColor}
                    onChangeText={onChangeUsername}
                />
                <TextInput
                    style={signup.input}
                    value={email}
                    placeholder="E-mail address"
                    placeholderTextColor={styles.colors.tertiaryColor}
                    onChangeText={onChangeEmail}
                />
                <TextInput
                    style={signup.input}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor={styles.colors.tertiaryColor}
                    onChangeText={onChangePassword}
                    secureTextEntry
                />
                <TextInput
                    style={signup.input}
                    value={confirmPassword}
                    placeholder="Confirm password"
                    placeholderTextColor={styles.colors.tertiaryColor}
                    onChangeText={onChangeConfirmPassword}
                    secureTextEntry
                />
            </View>
            <Link
                style={signup.signup__link}
                to={{ screen: 'Welcome' }}>
                Sign Up
            </Link>
        </View>
    );
}

const signup = StyleSheet.create({
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
    signup__link: {
        padding: styles.screens.padding.link,
        borderRadius: 50,

        textAlign: "center",
        fontSize: styles.screens.fontSize.text,
        backgroundColor: styles.colors.highlightColor,
        color: styles.colors.textColor,
    },
});