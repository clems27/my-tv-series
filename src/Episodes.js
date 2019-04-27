import React, { Component } from "react";
import episodes from "./data/episodes.json";
class Episodes extends Component {
  render() {
    return (
      <div>
        {episodes.map(episode => {
          return (
            <div className="episodes__container">
              <h4>
                <a href={episode.url} name={`S${episode.season}E${episode.number}`}>
                  S{episode.season}E{episode.number}: {episode.name}
                </a>
              </h4>
              <a href={episode.image? episode.image.original: null}>
                <img src={episode.image ? episode.image.medium : null} alt="" />
              </a>
              <p className="summary__p">
                {episode.summary
                  ? episode.summary.replace(/<p>/g, "").replace(/<\/p>/g, "")
                  : null}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Episodes;
