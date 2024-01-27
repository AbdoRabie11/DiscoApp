import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-animatable';
import IconPic from 'react-native-vector-icons/Entypo';
import AppleIcon from 'react-native-vector-icons/FontAwesome';
import ClothIcon from 'react-native-vector-icons/Entypo';
import TransoprtIcon from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../component/AppButton';

interface Props {}

interface ReusableItemProps {
  item: {
    name: string;
    percent?: string;
    icon: string;
    date?: string;
    price?: string;
  };
  isTransaction?: boolean; // Indicate whether it's a transaction item
}

const MainItem: React.FC<ReusableItemProps> = ({item, isTransaction}) => {
  return (
    <View style={styles.container}>
      {isTransaction && (
        <View style={styles.iconContainer}>
          <IconPic name="images" size={33} />
        </View>
      )}
      {item.icon && (
        <>
          {item.name == 'Food' ? (
            <View style={{width: 40}}>
              <AppleIcon name={item.icon} size={40} />
            </View>
          ) : item.name == 'Clothes' ? (
            <ClothIcon name={item.icon} size={40} />
          ) : (
            <TransoprtIcon name={item.icon} size={40} />
          )}
        </>
      )}
       <Text style={{ fontSize: 22, marginLeft: 14 }}>{item.name}</Text>
      {isTransaction && <Text style={{ fontSize: 18, marginTop: 17 , color:'black'}}>+ {item.price}</Text>}
      {item.percent && <Text style={{ fontSize: 22, color:'black' }}>{item.percent}</Text>}
      {item.date && (
        <Text style={{ fontSize: 18, color: 'gray', marginLeft: 16 }}>{item.date}</Text>
      )}
    </View>
  );
};

export default MainItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 7,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#D1D1D1',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
