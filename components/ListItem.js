// Access Device’s Contact List in React Native App
// https://aboutreact.com/access-contact-list-react-native/

import React, {memo} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 


import PropTypes from 'prop-types';
import Avatar from './Avatar';

const getAvatarInitials = (textString) => {
  if (!textString) return '';
  const text = textString.trim();
  const textSplit = text.split(' ');
  if (textSplit.length <= 1) return text.charAt(0);
  const initials =
    textSplit[0].charAt(0) + textSplit[textSplit.length - 1].charAt(0);
  return initials;
};
const icons = require('../assets/speak.png');

const ListItem = (props) => {
  const shouldComponentUpdate = () => {
    return false;
  };
  const {item, onPress} = props;
  return (
    <View>
      <TouchableOpacity onPress={() => onPress(item)}>
        <View style={styles.itemContainer}>
          <View style={styles.leftElementContainer}>
            <Avatar
              img={
                item.hasThumbnail ?
                  {uri: item.thumbnailPath} : undefined
              }
              placeholder={getAvatarInitials(
                `${item.givenName} ${item.familyName}`,
              )}
              width={40}
              height={40}
            />
          </View>
          <View style={styles.rightSectionContainer}>
            <View style={styles.mainTitleContainer}>
              <Text
                style={
                  styles.titleStyle
                }>{`${item.givenName} ${item.familyName}`}</Text>
                
            </View>
          </View>
          <Image 
            source= {icons}
            
            style={{ justifyContent: 'center',
            alignItems: 'center',
            flex: 2,
            paddingRight: 13,
            color: '#515151',
            margin: 10,
            width: 30,
            height: 30,
            borderRadius: 30,
            marginRight: 10,}}
            
          />  
        
        </View>
        
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    minHeight: 44,
    height: 63,
    color: '#515151',

  },
  leftElementContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    paddingLeft: 13,
    color: '#515151',
  },
  rightSectionContainer: {
    marginLeft: 18,
    flexDirection: 'row',
    flex: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#515151',
    color: '#515151',
  },
  mainTitleContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    color: '#515151',
  },
  titleStyle: {
    fontSize: 16,
    color: '#515151',
  },
  callT: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    paddingRight: 13,
    color: '#515151',
    fontSize: 16,
    margin: 10,
    padding: 10,
  },

});

export default memo(ListItem);

ListItem.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
};