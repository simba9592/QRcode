import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';



export default function Senddata({} ) {
    const  scandata  = route.params;
    const onPressButton = () => {
        // Do something when the button is pressed
        console.log(scandata);
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Paid amount"
            />
            <Text>{scandata}</Text>
            <Button
                title="Send Data"
                onPress={onPressButton}
                color="#000000"
                backgroundColor="#007AFF"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
});
