import { Appearance,StyleSheet, useColorScheme } from 'react-native';

function Settings() {
  
  const colorScheme = useColorScheme(); 

  const themeStyles = Appearance.getColorScheme() === 'dark'
    ? styles.darkTheme 
    : styles.lightTheme;

  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.text}>Adaptive Theme</Text>
      {colorScheme === 'dark' && (
        <StatusBar barStyle="light-content" />
      )}
    </View>
  );
}

const styles = {
  lightTheme: StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff'
    },
    text: {
      color: '#000'  
    }
  }),
  darkTheme: StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    text: {
      color: '#fff'
    }
  })
};

export default Settings;