import * as React from 'react';
import style from '../styles/Carousel.module.scss';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { GalleryCard } from './GalleryCard';

export const Carousel = ({ slides, caption, permalink }: any) => {

    //// constants
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);


    //// fn's
    const handleNavClick = (side: 'left' | 'right') => {
        const handleAdd = () => {
            if (currentSlideIndex >= (slides?.length - 1)) return setCurrentSlideIndex(0);
            else return setCurrentSlideIndex((prev) => prev + 1);
        }
        const handleMinus = () => {
            if (currentSlideIndex <= 0) return setCurrentSlideIndex(slides?.length > 1 ? slides?.length - 1 : 0);
            else return setCurrentSlideIndex((prev) => prev - 1);
        }
        switch (side) {
            case 'left': return handleMinus();
            case 'right': return handleAdd();
        }
    }




    return (
        <div className={style.carouselContainer}>
            <div className={style.navLeftContainer}>
                <NavigateBeforeIcon
                    onClick={() => handleNavClick('left')}
                />
            </div>

            <GalleryCard
                style={{ alignSelf: 'center' }}
                key={slides[currentSlideIndex].id}
                data={{ ...slides[currentSlideIndex], permalink: permalink, caption: caption }}
            />

            <div className={style.navRightContainer}>
                <NavigateNextIcon
                    onClick={() => handleNavClick('right')}
                />
            </div>
        </div>
    )
}