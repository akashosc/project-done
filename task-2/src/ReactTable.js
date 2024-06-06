import React, { useState } from 'react';
import { useTable, useFilters, useGlobalFilter } from 'react-table';
import styled from 'styled-components';

const TableWrapper = styled.div`
  max-height: 600px;
  overflow-y: auto;
  overflow-x: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  text-align: left;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  text-align: left;
  padding: 12px;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

const FilterInput = ({ column }) => {
  const { filterValue, setFilter } = column;
  const [value, setValue] = useState(filterValue || '');

  return (
    <input 
      style={{ marginBottom: 5, marginLeft: 5, padding: 5, borderRadius: 4, border: '1px solid #ccc' }}
      value={value || ''}
      onChange={e => {
        setValue(e.target.value);
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Filter ${column.Header}`}
    />
  );
};

const ReactTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter
  );

  const { globalFilter } = state;

  return (
    <div>
      <div style={{ marginBottom: 10, marginLeft: 5 }}>
        <input
          value={globalFilter || ''}
          onChange={e => setGlobalFilter(e.target.value || undefined)}
          placeholder={`Search...`}
          style={{
            marginBottom: 5,
            marginLeft: 5,
            padding: 8,
            borderRadius: 4,
            border: '1px solid #ccc',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            outline: 'none',
          }}
        />
        <button 
          onClick={() => setGlobalFilter('')} 
          style={{ 
            marginLeft: 10, 
            padding: 8, 
            borderRadius: 4, 
            border: 'none', 
            backgroundColor: '#4CAF50', 
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Clear
        </button>
      
      </div>
      
      <TableWrapper>
        <Table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <Th {...column.getHeaderProps()}>
                    {column.render('Header')}
                    {column.canFilter ? <FilterInput column={column} /> : null}
                  </Th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <Td
                      {...cell.getCellProps()}
                      style={{
                        backgroundColor:
                          cell.column.id === 'status' && cell.value === 'Active' ? '#d4edda' : 'white',
                        color: cell.column.id === 'status' && cell.value === 'Active' ? '#155724' : 'black',
                      }}
                    >
                      {cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </tbody>
        </Table>
      </TableWrapper>
    </div>
  );
};

export default ReactTable;
