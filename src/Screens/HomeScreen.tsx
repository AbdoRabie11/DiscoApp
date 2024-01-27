import React, {FC, ReactNode, useState} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Platform
} from 'react-native';
import TotalExpenses from '../component/TotalExpenses';
import AppHeader from '../component/AppHeader';
import IconPic from 'react-native-vector-icons/Entypo';
import AppleIcon from 'react-native-vector-icons/FontAwesome';
import ClothIcon from 'react-native-vector-icons/Entypo';
import TransoprtIcon from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../component/AppButton';
import {
  ChartItem,
  DataItem,
  calculateTotal,
  charts,
  data,
  listTab,
} from '../Dummy/data';
import ListTabButtons from '../component/ListTabButtons';
import TransactionItem from '../component/TransactionItem';
import MainItem from '../component/MainItem';
import DateIcon from 'react-native-vector-icons/Fontisto';
import Date from '../component/Date';
import ChartItems from '../component/ChartItems';
interface Props {}

const HomeScreen: FC<Props> = props => {
  const [status, setStatus] = useState('All');
  const [dataList, setDataList] = useState(data) as any;

  const statusFilter = (status: string) => {
    if (status !== 'All') {
      const filtered = data.filter((item: any) => item.status == status);
      setDataList(filtered);
    } else {
      setDataList(data);
    }
    setStatus(status);
  };

  const totalPrice = calculateTotal(dataList);

  const renderTransactionsItem = ({item}: {item: DataItem}) => {
    console.log(item.date);
    return (
      <TransactionItem item={item} />
      //  <MainItem item={item} isTransaction />
    );
  };

  const renderCharts = ({item}: {item: ChartItem}) => {
    return <ChartItems item={item} />;
  };

  return (
    <View style={styles.container}>
      <AppHeader />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={Platform.OS == 'android' ? {marginBottom:100} : null}
        >
        <ListTabButtons statusFilter={statusFilter} status={status} />
        <Date />
        <TotalExpenses total={totalPrice} />

        <FlatList
          data={charts}
          renderItem={renderCharts}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
        <View style={{marginBottom: 20, padding: 5}} />
        <Text style={{fontSize: 30, color:'black'}}>Transactions</Text>
        <FlatList
          data={dataList}
          keyExtractor={(e, i) => i.toString()}
          renderItem={renderTransactionsItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
        <AppButton
          title="View all"
          onPress={() => {
            console.log('pressed');
          }}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 14,
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
