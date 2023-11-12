import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Header, Input, Button } from 'native-base';

const CompanyProfile = (props) => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');
 const [website, setWebsite] = useState('');
 const [multinational, setMultinational] = useState('');
 const [about, setAbout] = useState('');

 const saveProfile = () => {
    // Handle save profile logic here
 };

 return (
    <View style={styles.container}>
      <Header style={styles.header}>
        <Text style={styles.headerText}>Create Company Profile</Text>
      </Header>
      <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
        <ScrollView>
          <Input placeholder="Telkom Sigma" value={name} onChangeText={setName} />
          <Input placeholder="telkomsigma@gmail.com" value={email} onChangeText={setEmail} />
          <Input placeholder="61934567890" value={phone} onChangeText={setPhone} />
          <Input placeholder="Surabaya" value={location} onChangeText={setLocation} />
          <Input placeholder="Multinational Company" value={multinational} onChangeText={setMultinational} />
          <TextInput
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus id commodo egestas metus interdum dolor.

            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas . "
            value={about}
            onChangeText={setAbout}
            multiline={true}
            numberOfLines={4}
            style={styles.aboutInput}
          />
          <Button style={styles.saveButton} onPress={saveProfile}>
            <Text style={styles.saveButtonText}>Save</Text>
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
 },
 header: {
    backgroundColor: '#2E3D4B',
 },
 headerText: {
    color: '#fff',
    fontSize: 20,
    paddingLeft: 10,
 },
 formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
 },
 aboutInput: {
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
 },
 saveButton: {
    backgroundColor: '#2E3D4B',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
 },
 saveButtonText: {
    color: '#fff',
    fontSize: 16,
 },
});

export default CompanyProfile;