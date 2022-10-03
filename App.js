import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import art from './Images/art.png';
import mile from './Images/mile.png';
import pier from './Images/pier.png';
import water from './Images/water.png';
import willis from './Images/willis.png';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

function Art({ }) {
  return (
    <View style={styles.container}>
    <Image style={styles.images} source={art} />
    </View>
  );
}

function Willis({ }) {
  return (
    <View style={styles.container}>
    <Image style={styles.images} source={willis} />
    </View>
  );
}

function Water({ }) {
  return (
    <View style={styles.container}>
    <Image style={styles.images} source={water} />
    </View>
  );
}

function Mile({ }) {
  return (
    <View style={styles.container}>
    <Image style={styles.images} source={mile} />
    </View>
  );
}

function Pier({ }) {
  return (
    <View style={styles.container}>
    <Image style={styles.images} source={pier} />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Art Institute of Chicago">
        <Drawer.Screen name="Art Institute of Chicago" component={Art} />
        <Drawer.Screen name="Magnificent Mile" component={Mile} />
        <Drawer.Screen name="Navy Pier" component={Pier} />
        <Drawer.Screen name="Water Tower" component={Water} />
        <Drawer.Screen name="Willis Tower" component={Willis} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  images: {
    height: 480,
    width: 320
  },

});
