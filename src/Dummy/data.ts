export interface DataItem {
  name: string;
  price?: string;
  status?: string;
  icon?: string;
  percent: string;
  date?: string;
}

export type Icon = 'apple' | 'baidu' | 'emoji-transportation';

export interface ChartItem extends DataItem {
  percent: string;
  icon: Icon;
}

export const listTab = [
  {stattus: 'All'},
  {stattus: 'Personal'},
  {stattus: 'Work'},
];

export const data = [
  {
    name: 'Uber',
    status: 'Work',
    price: '40$',
    date: '22/4/2024',
  },
  {
    name: 'Food',
    status: 'Personal',
    price: '60$',
    date: '10/4/2024',
  },
  {
    name: 'Courses',
    status: 'Work',
    price: '70$',
    date: '3/4/2024',
  },
  {
    name: 'Clothes',
    status: 'Personal',
    price: '90$',
    date: '19/4/2024',
  },
  {
    name: 'Books',
    status: 'Personal',
    price: '20$',
    date: '5/4/2024',
  },
];

export const charts: ChartItem[] = [
  {
    name: 'Food',
    percent: '40%',
    icon: 'apple',
  },
  {
    name: 'Clothes',
    percent: '30%',
    icon: 'baidu',
  },
  {
    name: 'Transportaion',
    percent: '40%',
    icon: 'emoji-transportation',
  },
];

export const calculateTotal = (data: any) => {
  const total = data.reduce((acc: any, curr: any) => {
    const numericPrice = Number(curr.price.replace('$', ''));
    return acc + numericPrice;
  }, 0);
  return `${total} $`;
};
