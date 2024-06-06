import React from 'react';
import ReactTable from './ReactTable';
const data = [
  { status: 'Active', date: '2024-06-01', email: 'john.doe@example.com', representative: 'Alice' },
  { status: 'Suspended', date: '2024-06-02', email: 'jane.doe@example.com', representative: 'Bob' },
  { status: 'Active', date: '2024-06-03', email: 'mary.smith@example.com', representative: 'Charlie' },
  { status: 'Suspended', date: '2024-06-04', email: 'david.jones@example.com', representative: 'Diana' },
  { status: 'Active', date: '2024-06-05', email: 'emily.brown@example.com', representative: 'Edward' },
  { status: 'Suspended', date: '2024-06-06', email: 'olivia.white@example.com', representative: 'Frank' },
  { status: 'Active', date: '2024-06-07', email: 'william.taylor@example.com', representative: 'Grace' },
  { status: 'Suspended', date: '2024-06-08', email: 'emma.anderson@example.com', representative: 'Henry' },
  { status: 'Active', date: '2024-06-09', email: 'noah.thomas@example.com', representative: 'Isabel' },
  { status: 'Suspended', date: '2024-06-10', email: 'sophia.hall@example.com', representative: 'Jack' },
  { status: 'Active', date: '2024-06-11', email: 'michael.wilson@example.com', representative: 'Kate' },
  { status: 'Suspended', date: '2024-06-12', email: 'ava.clark@example.com', representative: 'Liam' },
  { status: 'Active', date: '2024-06-13', email: 'jacob.robinson@example.com', representative: 'Mia' },
  { status: 'Suspended', date: '2024-06-14', email: 'oliver.lewis@example.com', representative: 'Nora' },
  { status: 'Active', date: '2024-06-15', email: 'isabella.walker@example.com', representative: 'Oscar' },
  { status: 'Suspended', date: '2024-06-16', email: 'emma.young@example.com', representative: 'Peter' },
  { status: 'Active', date: '2024-06-17', email: 'lucas.harris@example.com', representative: 'Quinn' },
  { status: 'Suspended', date: '2024-06-18', email: 'mia.martin@example.com', representative: 'Ryan' },
  { status: 'Active', date: '2024-06-19', email: 'charlotte.allen@example.com', representative: 'Sophia' },
  { status: 'Suspended', date: '2024-06-20', email: 'ethan.edwards@example.com', representative: 'Taylor' },
  { status: 'Active', date: '2024-06-21', email: 'amelia.baker@example.com', representative: 'Uma' },
  { status: 'Suspended', date: '2024-06-22', email: 'harper.king@example.com', representative: 'Victor' },
  { status: 'Active', date: '2024-06-23', email: 'benjamin.hill@example.com', representative: 'Wendy' },
  { status: 'Suspended', date: '2024-06-24', email: 'elizabeth.wood@example.com', representative: 'Xander' },
  { status: 'Active', date: '2024-06-25', email: 'daniel.cooper@example.com', representative: 'Yara' },
  { status: 'Suspended', date: '2024-06-26', email: 'madison.ross@example.com', representative: 'Zane' },
  { status: 'Active', date: '2024-06-27', email: 'liam.evans@example.com', representative: 'Ava' },
  { status: 'Suspended', date: '2024-06-28', email: 'ava.hughes@example.com', representative: 'Benjamin' },
  { status: 'Active', date: '2024-06-29', email: 'william.bell@example.com', representative: 'Charlotte' },
  { status: 'Suspended', date: '2024-06-30', email: 'sophia.rossi@example.com', representative: 'Daniel' },
  { status: 'Active', date: '2024-07-01', email: 'james.brown@example.com', representative: 'Emma' },
  { status: 'Suspended', date: '2024-07-02', email: 'olivia.long@example.com', representative: 'Finn' },
  { status: 'Active', date: '2024-07-03', email: 'oliver.evans@example.com', representative: 'Grace' },
  { status: 'Suspended', date: '2024-07-04', email: 'amelia.lopez@example.com', representative: 'Henry' },
  { status: 'Active', date: '2024-07-05', email: 'mia.lee@example.com', representative: 'Isabella' },
  { status: 'Suspended', date: '2024-07-06', email: 'william.nguyen@example.com', representative: 'Jack' },
  { status: 'Active', date: '2024-07-07', email: 'charlotte.yang@example.com', representative: 'Kate' },
  { status: 'Suspended', date: '2024-07-08', email: 'liam.kim@example.com', representative: 'Lily' },
  { status: 'Active', date: '2024-07-09', email: 'ava.wang@example.com', representative: 'Mason' },
  { status: 'Suspended', date: '2024-07-10', email: 'noah.zhao@example.com', representative: 'Natalie' },
  { status: 'Active', date: '2024-07-11', email: 'olivia.zhang@example.com', representative: 'Owen' },
  { status: 'Suspended', date: '2024-07-12', email: 'jackson.li@example.com', representative: 'Penny' },
  { status: 'Active', date: '2024-07-13', email: 'charlotte.zhou@example.com', representative: 'Quentin' },
  { status: 'Suspended', date: '2024-07-14', email: 'michael.xu@example.com', representative: 'Rachel' },
  { status: 'Active', date: '2024-07-15', email: 'sophia.wu@example.com', representative: 'Samuel' },
  { status: 'Suspended', date: '2024-07-16', email: 'liam.sun@example.com', representative: 'Sara' },
  { status: 'Active', date: '2024-07-17', email: 'olivia.ma@example.com', representative: 'Thomas' },
  { status: 'Suspended', date: '2024-07-18', email: 'emma.yu@example.com', representative: 'Tina' },
  { status: 'Active', date: '2024-07-19', email: 'jacob.he@example.com', representative: 'Uri' },
  { status: 'Suspended', date: '2024-07-20', email: 'emma.wang@example.com', representative: 'Vivian' },
  { status: 'Active', date: '2024-07-21', email: 'oliver.huang@example.com', representative: 'Winnie' },
  { status: 'Suspended', date: '2024-07-22', email: 'ava.liao@example.com', representative: 'Xavier' },
  { status: 'Active', date: '2024-07-23', email: 'william.zheng@example.com', representative: 'Yvonne' },
  { status: 'Suspended', date: '2024-07-24', email: 'charlotte.xie@example.com', representative: 'Zara' },
  { status: 'Active', date: '2024-07-25', email: 'olivia.chen@example.com', representative: 'Aaron' },
  { status: 'Suspended', date: '2024-07-26', email: 'mason.xiong@example.com', representative: 'Bella' },
  { status: 'Active', date: '2024-07-27', email: 'emma.lin@example.com', representative: 'Carlos' },
  { status: 'Suspended', date: '2024-07-28', email: 'charlotte.guo@example.com', representative: 'Daisy' },
  { status: 'Active', date: '2024-07-29', email: 'olivia.yuan@example.com', representative: 'Ethan' },
  { status: 'Suspended', date: '2024-07-30', email: 'william.ma@example.com', representative: 'Fiona' },
];


const columns = [
  { Header: 'Status', accessor: 'status' },
  { Header: 'Date', accessor: 'date' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Representative', accessor: 'representative' },
];

const App = () => {
    return (
        <div className="App">
             <h1>Search in table</h1>
      <ReactTable columns={columns} data={data} />
        </div>
    );
};

export default App;