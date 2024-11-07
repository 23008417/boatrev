import React from 'react';
import { StatusBar, ScrollView, View, Text, StyleSheet } from 'react-native';
import Boat from './components/boat';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1,
        backgroundColor: 'lightyellow',
    },
    header: {
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'navy',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
});

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden={true} />
            <View style={styles.header}>
                <Text style={styles.headerText}>Boat Catalog</Text>
            </View>
            <ScrollView style={styles.container}>
                <Boat name="Sea Ray 500 Sundancer" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." icon_name="sailboat" poster={require("./img/sea_ray.jpg")} />
                <Boat name="Four Winns Horizon 180" description="A sporty look and refined details truly set the Horizon 180 above all others." icon_name="anchor" poster={require("./img/four_winns.jpg")} />
                <Boat name="Flipper 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic." icon_name="sailboat" poster={require("./img/flipper.jpg")} />
                <Boat name="Princess V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate-controlled interior." icon_name="anchor" poster={require("./img/princess.jpg")} />
                <Boat name="Bayliner 175 Bowrider" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." icon_name="sailboat" poster={require("./img/bayliner.jpg")} />
                <Boat name="Fairline Targa 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." icon_name="anchor" poster={require("./img/fairline.jpg")} />
            </ScrollView>
        </View>
    );
};

export default App;
