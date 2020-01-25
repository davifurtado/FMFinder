import React from 'react';
import ArtistCard from './artist-cards.component';

const CardList = ({ artists }) => {
    return (
        <div>
            {
                artists.map((artist, i) => {
                    return (
                        <div>
                            <ArtistCard
                                name={artist.name}
                                listeners={artist.listeners}
                                key={i}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardList