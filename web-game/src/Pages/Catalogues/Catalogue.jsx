import React from 'react';
import { Link } from 'react-router-dom';
import './Catalogue.css';
import { games } from '../../assets/games/game';

function Catalogue() {
  const genres = [...new Set(games.map(game => game.genre))];
  return (
    <div className="Catalogue">
        {genres.map((genre, index) => (
          <section key={index} className="genre-section">
            <h3>{genre}</h3>
            <div className="games">
              {games.filter(game => game.genre === genre).map(filteredGame => (
                  <Link to={`/product/${filteredGame.id}`}>
                <div key={filteredGame.id} className="game">
                  <img src={filteredGame.image} alt={filteredGame.name} />
                  <p>Base game</p>
                  <h3>{filteredGame.name}</h3>
                  <p>{filteredGame.price}</p>
                </div>
                  </Link> 
              ))}
            </div>
          </section>
        ))}
    </div>
  );
}

export default Catalogue;