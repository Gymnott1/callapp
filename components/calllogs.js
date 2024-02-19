import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
  } from 'react-native';
import {callNumber} from "./callnumber";
import { PermissionsAndroid } from 'react-native';
import CallLogs from 'react-native-call-log';



const Logscreen = () => {
    const [callLogs, setCallLogs] = useState([]);
    
useEffect(() => {
    (async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
          {
            title: 'Call Log Example',
            message: 'Access your call logs',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
  
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Load call logs
          CallLogs.load(10).then((logs) => {
            setCallLogs(logs);
          } );
        } else {
          console.log('Call Log permission denied');
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  
    

  return(
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.text}>hello calllogs screen</Text>

      <View>
        {callLogs.map((log, index) => (
            <Text  key={index} style={styles.logs}>
                {log.name} ({log.phoneNumber}): {log.duration} seconds
            </Text>
        ))}
      </View>
       <View>
     
        <Text style={styles.text}>click to make phone call</Text>
       </View>

    </View> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 0,
        justifyContent: 'center',
        margin: 4,
        padding: 10,
        color: '#737373',
    },
    logs: {
        display: "flex",
        color: '#737373',
        flexDirection: "column",
        padding: 10,
    },
    text: {
        margin: 0,
        color: '#737373',
    }
})

export default Logscreen;
