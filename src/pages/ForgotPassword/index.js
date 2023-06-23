import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

import Card from '../../components/Card/';
import styles from "../../assets/styles.json";

export default function HomeScreen() {

    let [movies, setMovies] = useState([]);

    const url = 'https://api.otaviolube.com/api/filmes?populate=*';

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(objeto => {
                console.log(objeto)
                setMovies(objeto.data)
            })
    }, []);

    return (
        <View style={home.container}>
            <ScrollView
                horizontal
                style={home.scrollView}>
                {movies.length > 0 ?
                    movies.map(movie => (
                        <Card key={movie.id} info={movie} />
                    )) :
                    <Text>carregando</Text>}
            </ScrollView>
        </View>
    );
}

const home = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: styles.colors.primaryColor,
    },
    scrollView: {
        flex: 1,
    },
});