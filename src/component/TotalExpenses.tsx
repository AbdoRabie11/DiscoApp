import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  total:string
}

const TotalExpenses: FC<Props> = ({total}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color:'black'}}>Total Expenses</Text>
        <Text style={{fontSize: 27, fontWeight: '500', color:'black'}}>{total}</Text>
      </View>
    </View>
  );
};

export default TotalExpenses;

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    padding:12
  },
});
