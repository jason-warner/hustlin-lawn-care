import * as React from 'react';
import BottomNav from '../components/BottomNav';
import ServiceCard from '../components/ServiceCard';

const services = () => {

    return (
        <div>
            <h1>Services</h1>



            <ServiceCard
                img='/services/lawn.jpg'
                summary='No yard is too big or small, we mow them all! We ensure you get the best value for your money while putting quality first. '
                details=''
                title='Lawn Mowing'
                key={'Lawn Mowing'}
            />

            <BottomNav />
        </div>
    );
}

export default services;