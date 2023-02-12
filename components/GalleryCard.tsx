import * as React from "react";
import style from '../styles/Carousel.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Carousel } from "./Carousel";


const GalleryCard = ({ data }: any) => {
  const [isCarousel, setIsCarousel] = React.useState(false);

  const componentType = () => {
    switch (data.media_type) {
      case 'IMAGE': return 'img';
      case 'VIDEO': return 'video';
      case 'CAROUSEL_ALBUM': setIsCarousel(true);
      default: return 'img';
    }
  }

  return (
    <>
      {!isCarousel
        ? <Card
          className={style.cardContainer}
          sx={{
            maxWidth: 345,
            justifySelf: 'center',
            height: 'min-content',
            alignSelf: 'center'
          }}>
          <CardActionArea href={data.permalink}>
            <CardMedia
              key={data.id}
              controls={!!(componentType() === 'video')}
              component={componentType()}
              height={'fit-content'}
              image={data.media_url}
              alt={data.caption}
            />
            {!!data.caption &&
              <CardContent sx={{ height: 'min-content' }}>
                <Typography variant="body2" color="text.secondary">
                  {data.caption}
                </Typography>
              </CardContent>
            }
          </CardActionArea>
        </Card>
        : <Carousel
          caption={data.caption}
          permalink={data.permalink}
          key={data.id}
          slides={data.children.data}
        />
      }
    </>

  )
};



export { GalleryCard };
