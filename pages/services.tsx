import * as React from 'react';
import BottomNav from '../components/BottomNav';
import ServiceCard from '../components/ServiceCard';
import style from '../styles/Services.module.scss';

const services = () => {

    return (
        <div>
            <div className={style.title}>
                <h1>Services</h1>
            </div>


            <div className={style.gridContainer}>


                <div className={style.servicesGrid}>
                    {serviceCardData.map((data) => (
                        <ServiceCard
                            img={data.img}
                            summary={data.summary}
                            details={data.details}
                            title={data.title}
                            key={data.key}
                        />
                    ))}
                </div>
            </div>

            <BottomNav />
        </div>
    );
}

export default services;

const serviceCardData = [
    {
        img: '/services/lawn.jpg',
        summary: 'There is no yard is too big or small, we mow them all! We ensure you get the best value for your money while putting quality first. ',
        details: '',
        title: 'Lawn Mowing',
        key: 'lawn-mowing'
    },
    {
        img: '/services/lawn.jpg',
        summary: 'There is no yard is too big or small, we mow them all! We ensure you get the best value for your money while putting quality first. ',
        details: '',
        title: 'Lawn Mowing',
        key: 'lawn-mowing'
    },
    {
        img: '/services/lawn.jpg',
        summary: 'There is no yard is too big or small, we mow them all! We ensure you get the best value for your money while putting quality first. ',
        details: '',
        title: 'Lawn Mowing',
        key: 'lawn-mowing'
    },
    {
        img: '/services/lawn.jpg',
        summary: 'There is no yard is too big or small, we mow them all! We ensure you get the best value for your money while putting quality first. ',
        details: '',
        title: 'Lawn Mowing',
        key: 'lawn-mowing'
    },
    {
        img: '/services/lawn.jpg',
        summary: 'There is no yard is too big or small, we mow them all! We ensure you get the best value for your money while putting quality first. ',
        details: '',
        title: 'Lawn Mowing',
        key: 'lawn-mowing'
    },
    {
        img: '/services/lawn.jpg',
        summary: 'There is no yard is too big or small, we mow them all! We ensure you get the best value for your money while putting quality first. ',
        details: '',
        title: 'Lawn Mowing',
        key: 'lawn-mowing'
    },
]