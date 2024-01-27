import React, {FC} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

interface Props {
  onPress(): void;
  title: string;
}

const AppButton: FC<Props> = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={onPress}>
          <Text style={{fontSize: 19, fontWeight: 'bold', color:'black'}}> {title} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {},
});
