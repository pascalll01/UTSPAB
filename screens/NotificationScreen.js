import React, { useState } from 'react';
import {
 StyleSheet,
 Text,
 View,
 Button,
 ScrollView,
} from 'react-native';
import { ListItem } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const App = () => {
 const navigation = useNavigation();
 const [history, setHistory] = useState([
    {
      date: '26-Oktober-2023',
      position: 'Front End Developer',
      company: 'LinkAja jakarta',
      status: 'Tidak cocok',
    },
    {
      date: '23-Agu-2023',
      position: 'Data Scientist',
      company: 'PT Telkom Bandung',
      status: 'Diterima',
    },
    {
      date: '14-Agu-2023',
      position: 'UI/UX Designer',
      company: 'Bukalapak Surabaya',
      status: 'Diterima',
    },
 ]);

 const goToHistory = () => {
    navigation.navigate('History');
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Riwayat Lamaran</Text>
      <Button title="Lihat Riwayat" onPress={goToHistory} />
    </View>
 );
};

const History = ({ route }) => {
 const history = route.params.history;

 return (
    <ScrollView>
      {history.map((item, index) => (
        <ListItem key={index}>
          <Text>{item.date}</Text>
          <Text>{item.position}</Text>
          <Text>{item.company}</Text>
          <Text>{item.status}</Text>
        </ListItem>
      ))}
    </ScrollView>
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
});

export default App;