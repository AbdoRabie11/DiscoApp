import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}

const AppHeader: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 33, fontWeight: 'bold', color:'black'}}>Budget</Text>
        <View style={styles.circleContainer}>
          <Text
            style={{
              color: 'black',
              fontSize: 22,
            }}>
            1
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {},
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
  },
});
