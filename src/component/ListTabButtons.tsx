import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {listTab} from '../Dummy/data';
import {TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

interface Props {
  statusFilter(item: string): void;
  status: string;
}

const ListTabButtons: FC<Props> = ({status, statusFilter}) => {
  return (
    <Animatable.View
      style={styles.listTab}
      animation="bounceIn"
      duration={1000}>
      {listTab.map(item => {
        return (
          <TouchableOpacity
            onPress={() => statusFilter(item.stattus)}
            style={[styles.btnTab , {borderBottomColor:item.stattus == status ? '#0052CC' : '#ffff'}]}>
            <Animatable.Text
              animation="bounceIn"
              duration={1000}
              style={[
                styles.btnTabText,
                status == item.stattus && styles.btnTextActive,
              ]}>
              {item.stattus}
            </Animatable.Text>
            {/* <View
              style={[
                styles.btnTabActive,
                {backgroundColor: item.stattus == status ? '#0052CC' : '#ffff'},
              ]}
            /> */}
          </TouchableOpacity>
        );
      })}
    </Animatable.View>
  );
};

// {item.stattus == status && (
//   <Animatable.View
//     animation="bounceIn"
//     duration={1000}
//     style={styles.btnTabActive}
//   />
// )}

export default ListTabButtons;

const styles = StyleSheet.create({
  container: {},
  listTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginTop: 15,
  },
  btnTab: {
    // borderBlockColor:'#0052CC',
    borderBottomWidth: 2,
    padding:3
  },
  btnTabText: {
    fontSize: 17,
    color:'black'
  },
  btnTabActive: {
    width: 26,
    height: 3,
    marginTop: 15,
    alignSelf: 'center',
  },
  btnTextActive: {
    color: '#0052CC',
    fontSize: 17,
  },
});
