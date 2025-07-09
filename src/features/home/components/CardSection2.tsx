import React from 'react';
interface Prop {
    title: string;
    image: string;
    setOpen: () => void;
}
const CardSection2: React.FC<Prop> = ({ title, image, setOpen }) => {
    return (
        <div style={{ zIndex: 9999 }} className='card w-full h-[400px] relative rounded-xl overflow-hidden'>
            <img src={image} className='w-full h-full' alt="" />
            <button onClick={setOpen} className='absolute bottom-5 rounded-md overflow-hidden hover:scale-105 transition-all hover:bg-green-500 cursor-pointer  left-6/12 translate-x-[-50%] text-center text-white font-bold p-3 bg-green-600 w-10/12'>
                <div className="absolute top-0 left-0 w-full h-full bg-linear-85  from-green-800 "></div>
                <span className='relative'>{title}</span>
            </button>
        </div>
    );
};

export default CardSection2;