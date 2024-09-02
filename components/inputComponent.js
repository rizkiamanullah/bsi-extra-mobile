import React, { useState } from 'react';
import { Text, Button, View, StyleSheet, TextInput } from 'react-native';

//Membuat Komponen Input (Child)
const InputComponent = ({ onAddPerson }) => {
    //let names; <- contoh var js biasa
    const [name, setName] = useState(''); //contoh var state react
    const [amount, setAmount] = useState('');

    //simpan data orang yang lagi main sama kita
    const addPerson = () => {
        //props untuk save data orang
        onAddPerson({ name, amount: parseFloat(amount) });
        setName('');
        setAmount('');
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Name'
                value={name}
                onChangeText={setName}
            ></TextInput>
            <TextInput
                style={styles.input}
                placeholder='Amount'
                value={amount}
                onChangeText={setAmount}
            ></TextInput>
            <Button title='Add' onPress={addPerson} ></Button>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            marginBottom: 16
        },
        input: {
            flex: 1,
            marginHorizontal: 8,
            padding: 8,
            borderColor: '#00000',
            borderWidth: 1,
            borderRadius: 4,
            backgroundColor: '#fff',
        }
    }
)

export default InputComponent;

