import { Linking, Platform } from 'react-native';

const phoneNumber = '123456789'; // Replace with the desired phone number

const callNumber = (number) => {
  let phoneNumber = '';
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${number}`;
  } else {
    phoneNumber = `tel:${number}`;
  }

  Linking.canOpenURL(phoneNumber)
    .then((supported) => {
      if (!supported) {
        console.log('Phone number is not available');
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch((err) => console.log(err));
};

// Call the number when needed
callNumber(phoneNumber);
