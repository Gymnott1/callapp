// https://aboutreact.com/access-contact-list-react-native/

// Import React
import React, {useState, useEffect} from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
} from 'react-native';


import Contacts from 'react-native-contacts';
import ListItem from './ListItem';

const ContactScreen = () => {
  let [contacts, setContacts] = useState([]);
  

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS, 
        {
            title: 'Accessing Contacts',
            message: 'This App Wants To Access Your Contacts',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }).then(() => {
          loadContacts();
        }
      );
    } else {
      loadContacts();
    }
  }, []);

  const loadContacts = () => {
    Contacts.getAll()
      .then(contacts => {
        // contacts.sort(
        //   (a, b) => 
        //   a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        // );
        setContacts(contacts);
      })
      .catch(e => {
        // alert('Having problem loading contacts...');
        //console.log('Having problem loading contacts...');
      });
  };

  const search = (text) => {
    const phoneNumberRegex = 
      /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    if (text === '' || text === null) {
      loadContacts();
    } else if (phoneNumberRegex.test(text)) {
      Contacts.getContactsByPhoneNumber(text).then(contacts => {
        contacts.sort(
          (a, b) => 
          a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        setContacts(contacts);
        //console.log('contacts', contacts);
      });
    } else {
      Contacts.getContactsMatchingString(text).then(contacts => {
        contacts.sort(
          (a, b) => 
          a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        setContacts(contacts);
        //console.log('contacts', contacts);
      });
    }
  };

  const openContact = (contact) => {
    //console.log(JSON.stringify(contact));
    Contacts.openExistingContact(contact);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        
        <TextInput
          onChangeText={search}
          placeholder="Search"
          style={styles.searchBar}
        />
        <FlatList
          data={contacts}
          renderItem={(contact) => {
            return (
              <ListItem
                key={contact.item.recordID}
                item={contact.item}
                onPress={openContact}
              />
              
            );
          }}
          keyExtractor={(item) => item.recordID}
        />
      </View>
    </SafeAreaView>
  );
};
export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  
  searchBar: {
    backgroundColor: '#632898',
    color: '#535353',
    paddingHorizontal: 30,
    paddingVertical: Platform.OS === 'android' ? undefined : 15,
  },
});