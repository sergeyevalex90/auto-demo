import React from 'react';
import { useTranslation } from 'react-i18next';

//Material UI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

//Styles
import './ModelTable.css';

//Creating table
function createData(name, value) {
  return { name, value };
}

const ModelTable = (props) => {
  const { t } = useTranslation();

  const rows = [
    createData(t('model.transmission'), t('transmission.automatic')),
    createData(t('model.color'), t(`colors.${props.color['colorName']}`)),
    createData(t('model.salon'), t(`salon.${props.model.salons[0]['type']}`)),
    createData(t('model.fuel'), t(`fuel.${props.model.fuel[0]['type']}`)),
    createData(t('model.engine'), props.model.engine[0].volume),
    createData(t('model.price'), props.model.price + ' $'),
  ];
  return (
    <Table
      className="model-table-data"
      aria-label="simple table"
      padding="none"
    >
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
            }}
          >
            <TableCell className="model-data-key">{row.name}</TableCell>
            <TableCell>{row.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ModelTable;
