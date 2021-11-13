import React, { Component } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';

export default class JAGNameComponent extends Component {
    render() {
        return (
            <View >
                <Text>
                    Mi nombre es: <Text style={styles.highlight}>José Alfredo Guerra Gómez</Text>.
                </Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
});
