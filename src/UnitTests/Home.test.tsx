import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {calculateTotal, data} from '../Dummy/data';
import HomeScreen from '../Screens/HomeScreen';

// describe('statusFilter', () => {
//   it('should filter data', () => {
//     const mockSetDataList = jest.fn();
//     const mockSetStatus = jest.fn();

//     const {getByTestId} = render(
//       <HomeScreen
//         data={data}
//         setDataList={mockSetDataList}
//         setStatus={mockSetStatus}
//       />,
//     );

//     fireEvent.press(getByTestId('your-filter-button')); // Adjust the identifier as needed

//     // Ensure that the statusFilter function is called with the expected argument
//     expect(mockSetDataList).toHaveBeenCalled();
//     const statusFilterArg = mockSetDataList.mock.calls[0][0]; // Get the argument of the first call
//     expect(statusFilterArg).toBe('Work'); // Adjust the expected status value

//     // Ensure that setStatus is called with the expected argument
//     expect(mockSetStatus).toHaveBeenCalledWith('Work'); // Adjust the expected status value
//   });
// });

const testData = [
  {name: 'Item 1', price: '20$'},
  {name: 'Item 2', price: '30$'},
  // Add more test data as needed
];


describe('calculateTotal', () => {
  test('Return the Total Numbers', () => {
    expect(calculateTotal(testData)).toBe('50 $');
  });
});



// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });