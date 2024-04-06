import React from 'react'
import emojipedia from '../constants/emojipedia';
import Card from './Card';

function Detail(emojiTerm) {
    return (
        <Card
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            meaning={emojiTerm.meaning}
        />
    );
}

const Emojipedia = () => {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

                <dl className="dictionary">
                    {emojipedia.map(Detail)};
                    </dl>
        
        </div >
      );
}

export default Emojipedia;