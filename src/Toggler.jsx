import React from 'react';
import useToggle from './hooks/useToggle';

function Toggler() {
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isBanana, toggleIsBanana] = useToggle(false);
    const [isHeartbroken, toggleIsHeartbroken] = useToggle(false);
    const [isAngry, toggleIsAngry] = useToggle();

    return (
        <div>
            <h1 onClick={toggleIsHappy}>{isHappy ? "😊" : "☹️" }</h1>
            <h1 onClick={toggleIsBanana}>{isBanana ? "🍌" : "🍇" }</h1>
            <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? "💔" : "❤️" }</h1>
            <h1 onClick={toggleIsAngry}>{isAngry ? "😠" : "😑" }</h1>
        </div>
    );
}

export default Toggler;