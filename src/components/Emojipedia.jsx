import React from 'react'
import emojipedia from '../constants/emojipedia';
import Card from './Card';

function Detail(emojipedia) {
    return (
        <Card 
        key={emojipedia.id}
        emoji={emojipedia.emoji}
        name={emojipedia.name}
        meaning={emojipedia.meaning}
        />
    );
}

const Emojipedia = () => {
    return (
        <div>
          <h1>
            <span>emojipedia</span>
          </h1>

         { emojipedia.map(Detail)};
          </div>
      );
}

export default Emojipedia;