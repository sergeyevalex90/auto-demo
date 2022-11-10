import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Configurator from './Configurator/Configurator';

//Data
import CARS from '../../config/Cars';

//Material UI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

//Styles
import './ModelDetails.css';
import ModelDetailsImg from './ModelDetailsImg/ModelDetailsImg';

//Creating table
function createData(name, value) {
  return { name, value };
}

const ModelDetails = (props) => {
  const { t } = useTranslation();
  //Get model data
  const { id } = useParams();
  const model = CARS.find((car) => car.id === parseInt(id));
  let { name, colors, salons, fuel, engine, price } = model;

  //Get color from model
  let defaultColor = colors.filter((color) => {
    return color.default === true;
  });
  defaultColor = defaultColor.shift();

  //States
  const [color, setColor] = useState(defaultColor);
  const [salon, setSalon] = useState(salons[0]);
  const [fuelItem, setFuelItem] = useState(fuel[0].type);
  const [engineItem, setEngineItem] = useState(engine[0]);

  //Handlers
  const changeColorHandler = (color) => {
    setColor(color);
  };
  const changeSalonHandler = (salon) => {
    setSalon(salon);
  };
  const changeFuelHandler = (fuel) => {
    setFuelItem(fuel);
  };
  const changeEngineHandler = (engine) => {
    setEngineItem(engine);
  };

  // Count total price
  const selectedFuel = fuel.find((item) => item.type === fuelItem);
  price =
    price + color.price + salon.price + selectedFuel.price + engineItem.price;

  //Creating table rows with data
  const rows = [
    createData(t('model.transmission'), t('transmission.automatic')),
    createData(t('model.color'), t(`colors.${color['colorName']}`)),
    createData(t('model.salon'), t(`salon.${salon['type']}`)),
    createData(t('model.fuel'), t(`fuel.${fuelItem}`)),
    createData(t('model.engine'), engineItem.volume),
    createData(t('model.price'), price + ' $'),
  ];

  return (
    <div className="wrapper">
      <div className="model-details">
        <ModelDetailsImg image={color.img} name={name} />
        <div className="model-right-info">
          <h1 className="model-title">{name}</h1>
          <div className="model-configuration">
            <Configurator
              model={model}
              onChangeColor={changeColorHandler}
              onChangeSalon={changeSalonHandler}
              onChangeFuel={changeFuelHandler}
              onChangeEngine={changeEngineHandler}
            />
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
