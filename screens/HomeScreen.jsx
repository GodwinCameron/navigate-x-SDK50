import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'


function HomeScreen({ navigation }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Go to Development"
        onPress={() => navigation.navigate('Development')}
      />
      <Button
        title="Go to Photo Screen"
        onPress={() => navigation.navigate('PhotosScreen')}
      />
      <Button
        title="Go to Private Screen"
        onPress={() => navigation.navigate('PrivateScreen')}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#151718"
  },
  title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#ECEDEE"
  }
})



