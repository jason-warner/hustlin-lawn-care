import * as React from 'react';
import BottomNav from '../components/BottomNav';
import { Carousel } from '../components/Carousel';


const gallery = () => {

    return (
        <div>
            <h1>Gallery</h1>
            <Carousel />
            <BottomNav />
        </div>
    );
}

export default gallery;