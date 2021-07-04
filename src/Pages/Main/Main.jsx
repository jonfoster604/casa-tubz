import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Main.scss';
const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: { platform: 'browser', 'sort-by': 'release-date' },
  headers: {
    'x-rapidapi-key': '34bbff0987msha318d9d42be41b9p1efdabjsn84d303ad83b6',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
  },
};
export class Main extends Component {
  state = {
    activeGame: [],
    games: [],
  };
  componentDidMount() {
    this.getGames();
  }

  getGames = () => {
    axios
      .request(options)
      .then((res) => {
        // console.log(res.data);
        // console.log(this.state)
        this.setState({ games: res.data });
        // console.log(this.state);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  render() {
    return (
      <main id="main-container">
        <div className="content">
          <div className="content--card" id="topCard"></div>
          {this.state.games.length === 0 ? (
            <div>Loading....</div>
          ) : (
            this.state.games.map((el, id) => {
                const path=`/games/${el.id}`;
              return (
                  <div key={id} className="content--card">
                 <Link to={path}>
                      <img
                    className="content--card-image"
                    src={el.thumbnail}
                    alt={el.title}
                  />
                     </Link>
                  <div className="content--card-title">
                    <Link to={{
                        pathname:'/games/'+el.id

                    }
                    }>

                    <h3>{el.title}</h3>
                    </Link>
                  </div>
                  <div className="content-card-description">
                    <p>{el.short_description}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>
    );
  }
}

export default Main;
