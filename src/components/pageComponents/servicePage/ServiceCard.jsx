import React from 'react';
import { IconContext } from 'react-icons';

const ServiceData = ({ Icon, title }) => {
    return (
        <div className="w-full shadow-xl flex flex-col p-10 my-4 rounded-lg hover:scale-110 duration-150 relative">
            <div className="flex h-[180px] flex-col justify-between items-center rounded-md">
                {Icon && (
                    <div className='flex justify-center items-center mb-4'>
                        <IconContext.Provider value={{ size: '3em' }}>
                        <Icon />
                        </IconContext.Provider>
                    </div>
                )}
                <div className="space-y-2 text-center">
                    <h3 className="font-bold">{title}</h3>
                </div>
            </div>
        </div>
    );
};

export default ServiceData;