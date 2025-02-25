import React from 'react';
import Card from './components/Card';

function App() {
    const name = "Авелина";

    return (
        <div
            className="flex flex-col justify-center items-center min-h-screen space-y-8 p-10 bg-gradient-animated"
            style={{cursor: 'default', fontSize: 'clamp(0.8rem, 3vw, 1.75rem)'}}
        >
            <div className="text-center text-3xl font-semibold"
                 style={{
                     fontSize: 'clamp(1rem, 4vw, 2rem)'
                 }}
            >
                <p className="text-yellow-300 font-extrabold text-shadow-lg">Для кого: <span className="text-blue-300">{name}</span></p>
                <p className="text-green-300 font-extrabold text-shadow-lg">От кого: <span className="text-pink-200">Марат 💌</span></p>
            </div>

            <div className="w-full max-w-lg">
                <Card
                    title="🌸 С 8 марта! 🌸"
                    text={`Дорогая ${name}, поздравляю тебя с этим прекрасным днем! Пусть твоя жизнь будет наполнена счастьем, любовью и яркими моментами. Желаю тебе здоровья, вдохновения и счастья на каждом шагу! Я тебя очень люблю! 💐🌷`}
                    colorClass="text-pink-700 font-semibold text-shadow-md"
                />

                <Card
                    title="🌹 Приглашение на свидание 🌹"
                    text={`Я хочу провести этот вечер с тобой. Что скажешь? 🌟`}
                    colorClass="text-purple-700 font-semibold text-shadow-md"
                />
            </div>
        </div>
    );
}

export default App;
