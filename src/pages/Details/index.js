import { Image, StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native";

import styles from "../../assets/styles.json";

let widthWindow = Dimensions.get('window').width;
let heightWindow = Dimensions.get('window').height;

export default function DetailsScreen({ route }) {

    const { info } = route.params;
    const baseUrl = 'https://api.otaviolube.com';

    return (
        <View style={details.container}>
            <View style={details.banner__container}>
                <Image
                    source={{ uri: baseUrl + info.attributes.imagens.data[0].attributes.url }}
                    style={details.banner}
                />
            </View>
            <View style={details.content}>
                <View>
                    <Text style={details.title}>{info.attributes.titulo}: {info.attributes.subtitulo}</Text>
                    <View style={details.division}></View>
                    <View>
                        <Text style={details.description__title}>Sinopsis</Text>
                        <Text style={details.description}>{info.attributes.sinopse}</Text>
                    </View>
                </View>
                <TouchableOpacity style={details.button}>Assistir</TouchableOpacity>
            </View>
        </View >
    );
}

const details = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: styles.colors.primaryColor,
    },
    content: {
        flex: 1,
        justifyContent: "space-between",
        padding: styles.screens.padding.container,
    },

    // -=-=-=-+-=-=-=- Banner Section -=-=-=-+-=-=-=-
    banner__container: {
        width: widthWindow,
        height: heightWindow * 0.3,
    },
    banner: {
        flex: 1,
        objectFit: "cover",
    },
    // -=-=-=-+-=-=-=- End Banner Section -=-=-=-+-=-=-=-

    // -=-=-=-+-=-=-=- Container Section -=-=-=-+-=-=-=-
    title: {
        fontSize: styles.screens.fontSize.subtitle,
        color: styles.colors.textColor,
    },
    division: {
        width: widthWindow * 0.9,
        height: 0.5,
        alignSelf: "center",

        marginTop: styles.screens.margin.container,
        marginBottom: styles.screens.margin.container,

        backgroundColor: styles.colors.tertiaryColor,
    },
    description__title: {
        marginBottom: styles.screens.margin.container,

        fontSize: styles.screens.fontSize.subtitle,
        color: styles.colors.textColor,
    },
    description: {
        fontSize: styles.screens.fontSize.text,
        color: styles.colors.tertiaryColor,
    },
    button: {
        padding: styles.screens.padding.link,
        borderRadius: 50,

        textAlign: "center",
        fontSize: styles.screens.fontSize.text,
        backgroundColor: styles.colors.highlightColor,
        color: styles.colors.textColor,
    },
    // -=-=-=-+-=-=-=- End Container Section -=-=-=-+-=-=-=-
});