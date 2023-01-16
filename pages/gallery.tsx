import * as React from 'react';
import BottomNav from '../components/BottomNav';
import { GalleryCard } from '../components/GalleryCard';
import style from '../styles/Gallery.module.scss';

const gallery = ({ feed }: any) => {

    return (
        <div className={style.galleryContainer}>
            <div className={style.title}>
                <h1>Gallery</h1>
            </div>

            <div className={style.gridContainer}>
                <div className={style.galleryGrid}>
                    {!!feed?.data.length && feed?.data.map((data: any) => (
                        <GalleryCard key={data.id} data={data} />
                    ))}
                </div>
            </div>
            <BottomNav />
        </div>
    );
}


export const getServerSideProps = async () => {
    const mediaToken = process.env.IG_APP_TOKEN;
    const fields = [
        'caption',
        'children{media_type,media_url,thumbnail_url}',
        'id',
        'media_type',
        'media_url',
        'permalink',
        'thumbnail_url',
        'timestamp'
    ].join(',');
    const apiUrl = `https://graph.instagram.com/me/media?size=l&fields=${fields}&access_token=${mediaToken}`;
    const data = await fetch(apiUrl);
    const feed = await data.json();
    return { props: { feed } };
}

// https://developers.facebook.com/docs/instagram-basic-display-api/guides/getting-profiles-and-media#get-a-user-s-media



export default gallery;