import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DateIcon from 'react-native-vector-icons/Fontisto';

interface Props {}

const Date: FC<Props> = props => {
  return (
    <View style={styles.dateStyle}>
      <Text style={{fontSize: 16, fontWeight: 'bold', marginRight: 8, color:'black'}}>
        15 March to 15 April 2021
      </Text>
      <DateIcon name="date" size={22} color='black' />
    </View>
  );
};

export default Date;

const styles = StyleSheet.create({
  container: {},
  dateStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 25,
    padding: 11,
    marginBottom:20
  },
});
