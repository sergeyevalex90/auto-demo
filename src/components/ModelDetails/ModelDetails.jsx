import { useParams } from 'react-router-dom';
import CARS from '../../config/Cars';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import './ModelDetails.css';
import Configurator from './Configurator/Configurator';

function createData(name, value) {
  return { name, value };
}

const ModelDetails = (props) => {
  const { id } = useParams();
  const model = CARS.find((car) => car.id === parseInt(id));
  const { name, transmission, color, salon, fuel, engine, price, img } = model;

  const rows = [
    createData('Transmission', transmission),
    createData('Color', color),
    createData('Salon', salon),
    createData('Fuel', fuel),
    createData('Engine', engine),
    createData('Price', price),
  ];

  return (
    <div className="wrapper">
      <div className="model-details">
        <div className="model-left-img">
          <img src={img} />
        </div>
        <div className="model-right-info">
          <h1 className="model-title">{name}</h1>
          <div className="model-configuration">
            <Configurator />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
