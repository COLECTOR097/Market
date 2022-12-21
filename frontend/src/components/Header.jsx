
import React, {useState} from 'react';
import {Link} from "react-router-dom";

import Logo from '../assets/images/header/svg/logo.svg';
import Catalog from '../assets/images/header/svg/catalog.svg';
import Search from '../assets/images/header/svg/search.svg';
import Compass from '../assets/images/header/svg/compass.svg';
import Like from '../assets/images/header/svg/like.svg';
import LikeRed from '../assets/images/header/svg/like-red.svg';
import Profile from '../assets/images/header/svg/profile.svg';
import ProfileHover from '../assets/images/header/svg/profile-hover.svg';

export const Header = () => {
    const [like, setLike] = useState(false);

    return (
        <main className={"header flex flex-wrap items-center gap-5 mt-10"}>
            <Link to={"/"}><img src={Logo} alt={Logo}/></Link>
            <button className={"flex items-center gap-3 text-white font-extrabold bg-[#FF0000] rounded-3xl py-3 px-6"}>
                <img src={Catalog} alt={Catalog} />
                <span>Каталог</span>
            </button>
            <div className={"relative"}>
                <input className={"w-80 border border-[#E1E1E1] rounded-2xl py-3 px-4"} type="text" placeholder={"Начать поиск"}/>
                <img className={"absolute top-3 right-4 cursor-pointer"} src={Search} alt={Search} />
            </div>
            <div className={"flex items-center text-white cursor-pointer"}>
                <div className={"py-2 px-4 bg-[#FFA900B2] rounded-tl-2xl rounded-bl-2xl"}>
                    <img className={"mx-auto"} src={Compass} alt={Compass}/>
                    <span className={"uppercase"}>МСК</span>
                </div>
                <div className={"bg-[#FFA900] rounded-tr-2xl rounded-br-2xl py-[5px] px-4"}>
                    <div className={"text-sm"}>Выберите способ получения</div>
                    <div className={"font-bold text-base"}>Доставка или самовывоз</div>
                </div>
            </div>
            <div className={"border border-[#E1E1E1] rounded-2xl p-4 cursor-pointer hover:bg-[#FFF8EB] " +
                "hover:border-[#FFA900]"}
                 onClick={() => setLike(!like)}>
                <img className={like ? "hidden" : "block"} src={Like} alt={Like}/>
                <img className={!like ? "hidden" : "block"} src={LikeRed} alt={Like}/>
            </div>
            <div className={"group border border-[#E1E1E1] rounded-2xl p-4 cursor-pointer hover:bg-[#FFF8EB] " +
                "hover:border-[#FFA900]"}>
                <img className={"group-hover:hidden"} src={Profile} alt={Like}/>
                <img className={"hidden group-hover:block"} src={ProfileHover} alt={Like}/>
            </div>
        </main>
    );
};