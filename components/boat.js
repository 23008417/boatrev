import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({ name, description, icon_name, poster }) => {
    return (
        <View style={styles.card}>
            <Image source={poster} style={styles.image} />
            <View style={styles.infoContainer}>
                <Icon name={icon_name} size={24} color="navy" style={styles.icon} />
                <Text style={styles.name}>{name}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginVertical: 15,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 8,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    icon: {
        marginRight: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'navy',
    },
    description: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 14,
        color: 'grey',
    },
});
export default Boat;
