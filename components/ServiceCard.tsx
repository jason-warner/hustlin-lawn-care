import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

export default function ServiceCard({ title, summary, details, img }: IServiceCard) {

    const [isClicked, setIsClicked] = React.useState(false);


    const handleCardClick = () => {
        setIsClicked(!isClicked);
    }


    return (
        <Card sx={{ maxWidth: 345, boxShadow: 12, minHeight: '30vh' }}>
            
            <CardActionArea href={`mailto:alex@hustlinlawncare.com?subject=Quote for ${title}&body=Hello, \n I would like a quote for your ${title.toLowerCase()} service. \nMy address and phone number are...`} onClick={handleCardClick}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt={title}
                    />
                <CardContent sx={{ height: '100%' }}>
                    <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {summary}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}

export interface IServiceCard {
    title: string
    summary: string
    details: string
    img: string
}