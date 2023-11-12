import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

const SignUpCompanysScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setCompanyName] = useState('');

    const handleSubmit = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Company Name:', companyName);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Company Account</Text>
            <TextInput
                style={styles.input}
                placeholder="prudensiuspaschall@gmail.com"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="1234"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Telkom Sigma"
                value={companyName}
                onChangeText={(text) => setCompanyName(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 20,
        width: '80%',
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        width: '80%',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default SignUpCompanysScreen;