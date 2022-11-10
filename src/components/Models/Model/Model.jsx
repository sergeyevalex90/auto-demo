import { useTranslation } from 'react-i18next';
import ModelTable from '../ModelTable/ModelTable';

//Material UI
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

const Model = (props) => {
  const { t } = useTranslation();

  //Get color from model
  let color = props.model.colors.filter((color) => {
    return color.default === true;
  });
  color = color.shift();

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
          <ModelTable color={color} model={props.model} />
        </CardContent>
        <CardActions>
          <Button size="small" href={`/models/${props.model.id}`}>
            {t('model.build')}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Model;
