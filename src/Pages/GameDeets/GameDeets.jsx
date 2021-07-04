import React, { Component } from 'react';
import axios from 'axios';
import './GameDeets.scss';
export class GameDeets extends Component {
  state = {
    activeGame: [],
  };

  componentDidMount() {
    this.getGame();
  }

  getGame = () => {
    axios
      .request({
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: { id: this.props.match.params.gameID },
        headers: {
          'x-rapidapi-key':
            '34bbff0987msha318d9d42be41b9p1efdabjsn84d303ad83b6',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        },
      })
      .then((res) => {
        this.setState({ activeGame: res.data });
        console.log(this.state.activeGame);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  render() {
    return (
      <main id="main-container">
          {this.state.activeGame.length === 0 ? (
              <div>Loading</div>
              ) : (<>
                      <div className="content--card" id="topCard">

              <img
                src={this.state.activeGame.thumbnail}
                alt={this.state.activeGame.title}
                />
                </div>
                  <div className="content">
                  <div className="content--card" id="activeGame">
              <div className="content--card-title"><h3>{this.state.activeGame.title}</h3></div>
              <div className="content--card-info">
                  <ul>
                      <li>Developer: {this.state.activeGame.developer}</li>
                      <li>Publisher: {this.state.activeGame.publisher}</li>
                      <li>Release: {this.state.activeGame.release_date}</li>
                      <li>Genre: {this.state.activeGame.genre}</li>
                      <li>Platform: {this.state.activeGame.platform}</li>
                      <li><a href={this.state.activeGame.game_url} target="_blank" rel="noreferrer"><button>Play Now!</button></a></li>
                  </ul>
              </div>
              <div className="content-card-description">
                  <p>{this.state.activeGame.description}</p>
              </div>
            </div>
        </div></>
          )}
      </main>
    );
  }
}

export default GameDeets;
