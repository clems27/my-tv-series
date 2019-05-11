import React, {Component} from "react";
import episodes from "./data/episodes.json";
class Heading extends Component{
constructor(props){
  super(props)
  this.state={
    episodes: episodes
  }
}
 
  setLocation(event){
      window.location.href = `#${event.target.value}`
      return event.target.value
    }

    render(){
        return (
          <div className="App-header">
            <h1 className="header__wrapper">
              <img
                className="header__image"
                src={"https://i.postimg.cc/k4PKBfxb/images-9.jpg"}
                alt="Game_of _throne _image _logo"
              />
            </h1>
            <div className="episode__selection">
              Jump to an episode:
              <select
                className="episodeDropdown"
                onChange={this.setLocation}
                  
              >
                {episodes.map(episode => {
                  return (
                    <option
                      key={episode.id}
                      value={`S${episode.season}E${episode.number}`}
                    >
                      S{episode.season}E{episode.number}: {episode.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <h3>All Episode Details</h3>
            <div className="scroll-bar">
              <h5>This is a practice exercise By Clement .O.I</h5>
            </div>
          </div>
        );
    }
}
export default Heading;