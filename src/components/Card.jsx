import React from 'react';

const Card = ({ title, text, colorClass }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-lg mx-auto my-10 transition-all hover:scale-105 hover:shadow-2xl">
            <h2 className={`font-semibold ${colorClass} mb-4 text-shadow-lg text-center`}>
                {title}
            </h2>
            <p className="text-gray-700 leading-relaxed"
               style={{
                   fontSize: 'clamp(0.5rem, 2vw, 1.1rem)'
               }}
            >
                {text}
            </p>
        </div>
    );
};

export default Card;
