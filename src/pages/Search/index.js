import { StyleSheet, Text, View } from "react-native";

import styles from "../../assets/styles.json";

export default function SearchScreen() {

    return (
        <View style={search.container}>
            <Text style={search.text}>Search</Text>
        </View>
    );
}

const search = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: styles.colors.primaryColor,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        color: styles.colors.textColor,
    },
});