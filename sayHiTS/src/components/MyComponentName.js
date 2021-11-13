import React, { Component } from 'react';
import { Text, View,  } from 'react-native';

export default class MyComponentName extends Component {
    render() {
        return (
            <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white,}}>
                <Section title="Nombre">
                    Mi nombre es: <Text style={styles.highlight}>José Alfredo Guerra Gómez</Text>.
                </Section>
            </View>
        )
    }
}
