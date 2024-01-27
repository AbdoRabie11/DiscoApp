import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ChartItem } from '../Dummy/data';
import AppleIcon from 'react-native-vector-icons/FontAwesome';
import ClothIcon from 'react-native-vector-icons/Entypo';
import TransoprtIcon from 'react-native-vector-icons/MaterialIcons';
interface Props {}

const ChartItems: FC<{ item: ChartItem }> = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 7,
      }}>
      <View style={{flexDirection: 'row', padding: 4, alignItems: 'center'}}>
        {item.name == 'Food' ? (
          <View style={{width: 40}}>
            <AppleIcon name={item.icon} size={40} color='black' />
          </View>
        ) : item.name == 'Clothes' ? (
          <ClothIcon name={item.icon} size={40} color='black' />
        ) : (
          <TransoprtIcon name={item.icon} size={40} color='black' />
        )}

        <Text style={{fontSize: 22, marginLeft: 14, color:'black'}}> {item.name} </Text>
      </View>
      <Text style={{fontSize: 22, color:'black'}}> {item.percent} </Text>
    </View>
  );
};

export default ChartItems;

const styles = StyleSheet.create({
  container: {
  },
});
