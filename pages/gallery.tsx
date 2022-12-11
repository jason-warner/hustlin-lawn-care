import * as React from 'react';
import BottomNav from '../components/BottomNav';
import { GalleryCard } from '../components/GalleryCard';

const gallery = ({ feed }: any) => {

    return (
        <div>
            <h1>Gallery</h1>
            <GalleryCard feed={feed} />
            <BottomNav />
        </div>
    );
}


export const getStaticProps = async () => {
    const mediaToken = process.env.IG_APP_TOKEN;
    const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${mediaToken}`;
    const data = await fetch(apiUrl);
    const feed = await data.json();
    return { props: { feed } };
}




export default gallery;