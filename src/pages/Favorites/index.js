import { StyleSheet, Text, View } from "react-native";

import styles from "../../assets/styles.json";

export default function FavoriteScreen() {

    return (
        <View style={favorites.container}>
            <Text style={favorites.text}>Favorites</Text>
        </View>
    );
}

const favorites = StyleSheet.create({
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