import { Button, StyleSheet, View, Text } from 'react-native'
import React from 'react'

function DevelopmentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Development</Text>
      <Button
        title="Continue the development rabbit hole..."
        onPress={() => navigation.push('Development')}
      />
    </View>
  )
}

export default DevelopmentScreen


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