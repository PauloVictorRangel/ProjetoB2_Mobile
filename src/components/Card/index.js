import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { useState } from "react";
import { Link } from "@react-navigation/native";

import styles from "../../assets/styles.json";

let widthWindow = Dimensions.get('window').width;
let heightWindow = Dimensions.get('window').height;

export default function Card({ info }) {

    const [isHovered, setIsHovered] = useState(false);

    const mouseEnter = () => {
        setIsHovered(true);
    };

    const mouseOut = () => {
        setIsHovered(false);
    };

    const baseUrl = 'https://api.otaviolube.com';

    return (
        <View
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseOut}
            style={[
                card.card,
                // isHovered ? { transform: "scale(1.05)" } : { transform: "scale(1)" },
            ]}>
            <View style={[
                card.poster__container,
                isHovered ? card.notHovered : card.isHovered
            ]}>
                <Image
                    source={{ uri: baseUrl + info.attributes.poster.data.attributes.formats.small.url }}
                    style={card.poster}
                />
            </View>
            <View style={[
                card.card__content,
                isHovered ? card.isHovered : card.notHovered
            ]}>
                <View>
                    <Text style={card.title}>{info.attributes.titulo}</Text>
                    <Text style={card.subtitle}>{info.attributes.subtitulo}</Text>
                </View>
                <Text style={card.description}>{info.attributes.sinopse}</Text>
                <Link
                    style={card.details__link}
                    to={{ screen: 'Details', params: { info } }}>
                    ▶
                </Link>
            </View>
        </View>
    );
}

const card = StyleSheet.create({
    card: {
        width: widthWindow*0.9,
        height: heightWindow*0.9,
        // transition: "all .25s",
    },

    // -=-=-=-+-=-=-=- Poster Section -=-=-=-+-=-=-=-
    poster__container: {
        flex: 1,
    },
    poster: {
        flex: 1,
        borderRadius: 20,
        objectFit: "cover",
    },
    // -=-=-=-+-=-=-=- End Poster Section -=-=-=-+-=-=-=-

    // -=-=-=-+-=-=-=- Content Section -=-=-=-+-=-=-=-
    card__content: {
        flex: 1,
        justifyContent: "space-evenly",

        padding: styles.card.padding,
        borderRadius: 20,
        backgroundColor: styles.colors.secondaryColor,
    },
    title: {
        fontSize: styles.card.fontSize.title,
        color: styles.colors.textColor,
    },
    subtitle: {
        fontSize: styles.card.fontSize.subtitle,
        color: styles.colors.textColor,
    },
    description: {
        fontSize: styles.card.fontSize.description,
        color: styles.colors.textColor,
    },
    details__link: {
        padding: styles.card.padding,
        borderRadius: 50,

        textAlign: "center",
        fontSize: styles.card.fontSize.subtitle,
        backgroundColor: styles.colors.highlightColor,
        color: styles.colors.textColor,
    },
    // -=-=-=-+-=-=-=- End Content Section -=-=-=-+-=-=-=-

    isHovered: {
        display: "flex",
    },
    notHovered: {
        display: "none",
    },
});