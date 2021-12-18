import React, { useEffect } from "react";
import "./Main.css";
import instaLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import { useState } from "react/cjs/react.development";

const Main = ({ selectedCard, punkListData }) => {
  const [activeCard, setActiveCard] = useState(punkListData[0]);

  useEffect(() => {
    setActiveCard(punkListData[selectedCard]);
  }, [punkListData, selectedCard]);

  console.log(activeCard);

  return (
    <div className='main'>
      <div className='main__content'>
        <div className='content__highlight'>
          <div className='highlight__container'>
            <img
              className='highlight__selected'
              src={activeCard?.image_original_url}
              alt=''
            />
          </div>
        </div>
        <div className='content__details'>
          <div className='title'>{activeCard?.name}</div>
          <span className='itemnumber'>.#{activeCard?.token_id}</span>
        </div>
        <div className='owner'>
          <div className='owner__image'>
            <img src={activeCard?.owner?.profile_img_url} alt='' />
          </div>
          <div className='owner__details'>
            <div className='owner__name'>
              <div className='owner__address'>
                {activeCard?.owner?.address}
                <div className='owner__handle'>@shortcheese</div>
              </div>
            </div>
            <div className='owner__link'>
              <img src={instaLogo} alt='' />
            </div>
            <div className='owner__link'>
              <img src={twitterLogo} alt='' />
            </div>
            <div className='owner__link'>
              <img src={moreIcon} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
