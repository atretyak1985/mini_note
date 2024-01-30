import React from 'react';
import { Link } from 'react-router-dom';
import {Note} from "../../components/index";
import {BackButtonSvg, DeleteButtonSvg, Hero2Svg} from "../../@assets/svg/index";

const SecondPage: React.FC = () => {
    const noteData = {
        title: 'The lost song',
        date: 'Saturday, 4th of March',
        content: 'I had a plan, but never finished it, and I\'ve been searching for the thought and I\'ve been...',
        links: [
            { name: 'The Cat Empire Lyrics', isActive: true },
            { name: 'Angus & Julia Stone Lyrics', isActive: false },
            { name: 'Bob Dylan Lyrics', isActive: false },
        ],
    };


    return (
        <div className="flex-col m-4">
            <div className="w-80 flex items-center">
                <Link to="/" className="flex-none cursor-pointer">
                    <BackButtonSvg/>
                </Link>
                <div className="grow"/>
                <Link to="/third" className="flex-none cursor-pointer">
                    <DeleteButtonSvg/>
                </Link>
            </div>

            <div className="flex w-80 h-16">
                <Note {...noteData} />
            </div>

        </div>
    );
};

export default SecondPage;
