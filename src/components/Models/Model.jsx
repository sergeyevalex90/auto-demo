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
import './Model.css';

function createData(name, value) {
  return { name, value };
}

const Model = (props) => {
  //console.log(props.model);
  const rows = [
    createData('Transmission', props.model.transmission),
    createData('Color', props.model.color),
    createData('Salon', props.model.salon),
    createData('Fuel', props.model.fuel),
    createData('Engine', props.model.engine),
    createData('Price', props.model.price),
  ];

  return (
    <Box component="div" className="model-item">
      <Card sx={{ maxWidth: 350 }} className="model-inner">
        <CardMedia
          component="img"
          height="140"
          image={props.model.img}
          alt="bmw"
        />
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
            View more
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Model;
