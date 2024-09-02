import React, { useState } from 'react';
import { ScrollView, Text, Button, View, StyleSheet, TextInput } from 'react-native';

//import component input
import InputComponent from '../components/inputComponent';
import Summary from '../components/Summary';

//Parent of Input
const HomeScreen = ( ) => {
    const [people, setPeople ] = useState([]); //database people

    const addPerson = (person) => {
        //append(), push() / add new data to list/array
        setPeople([...people, person ]);
    }

    return (
        <ScrollView style={styles.container}>
            <InputComponent onAddPerson={addPerson} />
            <Summary people={people} />
        </ScrollView>
    )  
}

const styles = StyleSheet.create(
    {
        container: {
            padding: 16
        }
    }
)
export default HomeScreen;

