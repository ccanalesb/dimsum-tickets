import React from 'react';
import { DSDataGrid } from '@elliemae/ds-datagrids';

const columns = [
  {
    property: "name",
    label: "Name",
    editable: true,
    sortable: true,
    resizable: true
  },
  {
    property: "owner",
    label: "Owner",
    editable: true,
    resizable: true,
    searchable: true,
  },
]

const rows = [
  {
    id: 6,
    name: 'owner as string',
    owner: 'owner'
  },
  {
    id: 7,
    name: 'owner as empty string',
    owner: ''
  },
  {
    id: 8,
    name: 'owner as null',
    owner: null,
  },
  {
    id: 9,
    name: 'owner as undefined',
    owner: undefined,
  },
  {
    id: 10,
    name: 'owner not set',
  },
];

export default () => {
  return (
    <DSDataGrid
      columns={columns}
      rows={rows}
      searchFilters
      fluidHeight
      sortable
      editable
      resizeableColumns
    />
  );
};