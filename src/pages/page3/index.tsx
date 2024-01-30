import React from 'react';
import { Link } from 'react-router-dom';
import {BackButtonSvg, Hero2Svg} from "../../@assets/svg/index";

const ThirdPage: React.FC = () => {
    return (
        <div className="m-4">
            <div className="w-80 h-16 left-[25px] top-[700px] absolute">
                <div
                    className="left-[106px] top-[20px] absolute text-center text-rose-500 text-base font-semibold font-['Roboto'] leading-snug cursor-pointer">Delete
                    this note
                </div>
            </div>
            <div className="left-[30px] top-[464px] absolute flex-col justify-start items-center gap-10 inline-flex">
                <div className="flex-col justify-start items-center gap-5 flex">
                    <div className="text-center text-black text-5xl font-normal font-['Otama.ep'] leading-10">You
                        sure<br/>about this?
                    </div>
                    <div
                        className="w-80 h-12 text-center text-stone-500 text-base font-normal font-['Roboto'] leading-snug">If
                        you delete this note, threat not, you can still find it in the bin.
                    </div>
                </div>
            </div>
            <div className="w-80 h-48 left-[20px] top-[204px] absolute">
                <div className="w-80 h-48 left-0 top-0 absolute">
                    <Hero2Svg/>
                </div>
            </div>
            <Link to="/second" className="origin-top-left w-11 h-11 absolute cursor-pointe">
                <BackButtonSvg/>
            </Link>
        </div>
    );
};

export default ThirdPage;
