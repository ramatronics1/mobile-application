import React from 'react';
import { View, Text, Button, StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Welcome = ({}) => {
    const navigation= useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../symbol.png')} style={styles.logoImage} />
      <Text style={styles.logoText}>CampusEats</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
      <Button
        title="About"
        onPress={() => navigation.navigate('About')}
        color="#ffa31a"
      />
        </View>
        <View style={styles.buttonWrapper}>
      <Button
        title="Explore"
        onPress={() => navigation.navigate('HotelDisplay')}
        color="#ffa31a"
      />
      </View>
    </View>
    <Text style={styles.footerText}>© 2023 CampusEats. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerText: {
    marginTop: 20,
    fontSize: 12,
    color: '#808080',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1b1b1b', // Primary Color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF', // Secondary Color
  },
  buttonContainer: {
    marginTop: 10,
    width: '80%',
    backgroundColor: '#808080',
    borderRadius: 10,
    padding: 50,
  },
  buttonWrapper: {
    marginBottom: 10,
   
  },
  logoImage: {
    width: 200, // Adjust the width as per your preference
    height: 200, // Adjust the height as per your preference
    marginBottom: 10,
    borderRadius:1200,
  },
  logoText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white', // Secondary Color
    marginBottom: 30,
  },
});

export default Welcome;