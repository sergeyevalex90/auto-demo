//Material UI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

//Styles
import './Model.css';

//Creating table
function createData(name, value) {
  return { name, value };
}

const Model = (props) => {
  //Get color from model
  let color = props.model.colors.filter((color) => {
    return color.default === true;
  });
  color = color.shift();

  //Creating table rows with data
  const rows = [
    createData('Transmission', props.model.transmission),
    createData('Color', color.colorName),
    createData('Salon', props.model.salons[0].type),
    createData('Fuel', props.model.fuel[0].type),
    createData('Engine', props.model.engine[0].volume),
    createData('Price', props.model.price + ' $'),
  ];

  return (
    <Box component="div" className="model-item">
      <Card sx={{ maxWidth: 350 }} className="model-inner">
        <Link className="model-link-img" href={`/models/${props.model.id}`}>
          <CardMedia component="img" height="140" image={color.img} alt="bmw" />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.model.name}
          </Typography>
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
        </CardContent>
        <CardActions>
          <Button size="small" href={`/models/${props.model.id}`}>
            Build and Price
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Model;
