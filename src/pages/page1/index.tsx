import React from 'react';
import { Link } from 'react-router-dom';
import {HeroSvg, NextButtonSvg} from "../../@assets/svg/index";

const FirstPage: React.FC = () => {
    return (
        <div className="flex-col m-4">
            <HeroSvg/>

            <div className="flex-col justify-center items-center gap-10 inline-flex pt-8">
                <div className="flex-col justify-center items-center gap-5 flex">
                    <div className="text-center text-black text-5xl font-normal font-['Otama.ep'] leading-10">All
                        thoughts.<br/>One place.
                    </div>
                    <div
                        className="w-80 h-12 text-center text-stone-500 text-base font-normal font-['Roboto'] leading-snug">Dive
                        right in and clear that mind of yours by writing your thoughts down.
                    </div>
                </div>
                <Link to="/second" className="cursor-pointer">
                    <NextButtonSvg/>
                </Link>
            </div>
        </div>
    );
};

export default FirstPage;
