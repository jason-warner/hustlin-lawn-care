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
                            img={{ img1: data.img1, img2: data.img2 }}
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
        img1: '/services/lawn1.jpg',
        img2: '/services/lawn2.jpg',
        summary: 'There is no yard is too big or small, we mow them all! We ensure you get the best value for your money while putting quality first. ',
        details: '',
        title: 'Residential Lawn Care',
        key: 'residential-lawn-care'
    },
    {
        img1: '/services/commercial1.jpg',
        img2: '/services/commercial2.jpg',
        summary: 'There is no yard is too big or small, we mow them all! We ensure you get the best value for your money while putting quality first. ',
        details: '',
        title: 'Commercial Lawn Care',
        key: 'commercial-lawn-care'
    },
    {
        img1: '/services/edging1.jpg',
        img2: '/services/edging2.jpg',
        summary: 'There is no yard is too big or small, we mow them all! We ensure you get the best value for your money while putting quality first. ',
        details: '',
        title: 'Edging',
        key: 'edging'
    },
    {
        img1: '/services/hedgeTrimming1.jpg',
        img2: '/services/hedgeTrimming2.jpg',
        summary: 'There is no yard is too big or small, we mow them all! We ensure you get the best value for your money while putting quality first. ',
        details: '',
        title: 'Hedge Trimming',
        key: 'hedge-trimming'
    },
    {
        img1: '/services/leafRemoval1.jpg',
        img2: '/services/leafRemoval2.jpg',
        summary: 'There is no yard is too big or small, we mow them all! We ensure you get the best value for your money while putting quality first. ',
        details: '',
        title: 'Leaf Removal',
        key: 'leaf-removal'
    },
    {
        img1: '/services/fall-spring-cleanup1.jpg',
        img2: '/services/fall-spring-cleanup2.jpg',
        summary: 'There is no yard is too big or small, we mow them all! We ensure you get the best value for your money while putting quality first. ',
        details: '',
        title: 'Fall/Spring Cleanup',
        key: 'fall-spring-cleanup'
    },
    {
        img1: '/services/landscaping1.jpg',
        img2: '/services/landscaping2.jpg',
        summary: 'There is no yard is too big or small, we mow them all! We ensure you get the best value for your money while putting quality first. ',
        details: '',
        title: 'Small Landscaping',
        key: 'small-landscaping'
    },
    {
        img1: '/services/flowerBed1.jpg',
        img2: '/services/flowerBed2.jpg',
        summary: 'There is no yard is too big or small, we mow them all! We ensure you get the best value for your money while putting quality first. ',
        details: '',
        title: 'Flower Beds',
        key: 'flower-beds'
    },
]