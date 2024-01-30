import React from 'react';

type NoteProps = {
    title: string;
    date: string;
    content: string;
    links: Array<{ name: string; isActive: boolean }>;
};

const Note: React.FC<NoteProps> = ({ title, date, content, links }) => {
    return (
        <div className="bg-white p-4 max-w-sm">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-500 text-sm mb-4">{date}</p>
            <p className="text-gray-700 mb-4">{content}</p>
            <div className="space-y-2">
                {links.map((link, index) => (
                    <div key={index} className="flex items-center">
                        <input
                            type="radio"
                            name="link"
                            id={`link-${index}`}
                            className={`form-radio h-4 w-4 ${
                                link.isActive ? 'text-blue-600' : 'text-gray-300'
                            }`}
                        />
                        <label htmlFor={`link-${index}`} className="ml-2 text-sm font-medium text-gray-700">
                            {link.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Note;
