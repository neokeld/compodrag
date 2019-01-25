import React from 'react';
import { Cell, Column, Table } from "@blueprintjs/table";

const cellRenderer = (rowIndex) => <Cell>{`${rowIndex * 10}€`}</Cell>;

export const TableExample = () => (
<Table numRows={10}>
  <Column name="Euros" cellRenderer={cellRenderer}/>
</Table>
);

