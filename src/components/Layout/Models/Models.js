import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import modelImg from '../../../assets/img/bmw-small.png';
import modelImg2 from '../../../assets/img/bmw-small-2.png';

import './Models.css';

const Models = (props) => {
  return (
    <div className="wrapper">
      <div className="models">
        <h2 className="models-title title">Most popular models</h2>
        <div className="models-inner">
          <Card sx={{ maxWidth: 345 }} className="model-item">
            <CardMedia
              component="img"
              height="140"
              image={modelImg}
              alt="bmw"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                BMW 5 Series
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The BMW 5 Series is an executive car manufactured and marketed
                by BMW since 1972, succeeding the New Class Sedans, and
                currently in its seventh generation.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }} className="model-item">
            <CardMedia
              component="img"
              height="140"
              image={modelImg2}
              alt="bmw"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                BMW X6
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The 2023 BMW X6 is a sloped-roof luxury midsize SUV for those
                who like the elevated driving position and all-wheel drive, but
                don't want the usual 'big box on wheels' styling
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }} className="model-item">
            <CardMedia
              component="img"
              height="140"
              image={modelImg}
              alt="bmw"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                BMW 5 Series
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The BMW 5 Series is an executive car manufactured and marketed
                by BMW since 1972, succeeding the New Class Sedans, and
                currently in its seventh generation.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }} className="model-item">
            <CardMedia
              component="img"
              height="140"
              image={modelImg2}
              alt="bmw"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                BMW X6
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The 2023 BMW X6 is a sloped-roof luxury midsize SUV for those
                who like the elevated driving position and all-wheel drive, but
                don't want the usual 'big box on wheels' styling
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Models;
