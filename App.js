/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
const App: () => React$Node = () => {
  return (
    <ScrollView>
      <View style={{}}>
        <Image source={{ uri: 'https://lcps.org.uk/wp-content/uploads/2020/05/BM2.jpg' }}
          style={{ width: '100%', height: 200 }}
        />
      </View>
      <View style={{ justifyContent: 'center', marginTop: 30, marginBottom: 30, marginHorizontal: 16 }}>
        <Text style={{ alignSelf: 'center', color: '#000', fontSize: 18, fontWeight: 'bold' }}>
          Welcome To Business World
          </Text>
      </View>
      <Image style={{ height: 150, marginBottom: 30 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4W2Ck-cm0yo7vTDpMoFZRBbML02B-ifmZ1w&usqp=CAU' }}
      />
      <Text style={{ alignSelf: 'center', color: '#000', fontSize: 18, fontWeight: 'bold' }}>Exponential Grows</Text>
      <TouchableOpacity style={{ justifyContent: 'center', backgroundColor: '#46A049', alignItems: 'center', borderColor: '#46A049', padding: 10, borderWidth: 1, width: '45%', alignSelf: 'center', marginTop: 30, borderRadius: 25 }}>
        <View>
          <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
            Login
       </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ justifyContent: 'center', backgroundColor: '#000', alignItems: 'center', borderColor: '#000', marginBottom: 30, padding: 10, borderWidth: 1, width: '95%', marginHorizontal: 16, alignSelf: 'center', marginTop: 30, borderRadius: 25 }}>
        <View>
          <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
            Latest News
       </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default App;
