import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DataItem} from '../Dummy/data';
import IconPic from 'react-native-vector-icons/Entypo';

interface Props {}

const TransactionItem: FC<{item: DataItem}> = ({item}) => (
  <View
    key={item.name}
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 7,
    }}>
    <View style={{flexDirection: 'row', alignItems: 'center', padding: 4}}>
      <View style={styles.iconContainer}>
        <IconPic name="images" size={33} color='black' />
      </View>
      <View style={{padding: 3}}>
        <Text style={{fontSize: 16, marginLeft: 16, color:'black'}}> {item.name} </Text>
        <Text style={{fontSize: 18, color: 'gray', marginLeft: 16}}>
          {item?.date}
        </Text>
      </View>
    </View>
    <Text style={{fontSize: 18, marginTop: 17, color:'black'}}> + {item.price} </Text>
  </View>
);

export default TransactionItem;

const styles = StyleSheet.create({
  container: {},
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#D1D1D1',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
