import * as React from "react";
import { useEffect, useRef, useState } from "react";
import style from '../styles/Carousel.module.scss';

// https://www.youtube.com/watch?v=kLFSTaCqzdQ


const GalleryCard = ({ feed }: any) => {

  return (
    <>
      <h4>I am the galley component !</h4>
      <ul>
        {!!feed?.data.length && feed?.data.map((data: any, index: number) => (
          <li key={index}>
            <img src={data.media_url} alt="" />
          </li>)
        )}
      </ul>
    </>
  )
};



export { GalleryCard };
