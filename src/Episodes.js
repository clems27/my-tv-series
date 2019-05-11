import React, { Component } from "react";
import episodes from "./data/episodes.json";
class Episodes extends Component {
  render() {
    return (
      <div className="main-container">
        {episodes.map(episode => {
          return (
            <div key={episode.id} className="episodes__container">
              <card className="episode__wrapper">
                <h4>
                  <a
                    href={episode.url}
                    name={`S${episode.season}E${episode.number}`}
                  >
                    S{episode.season}E{episode.number}: {episode.name}
                  </a>
                </h4>
                <a
                  href={episode.image ? episode.image.original : null}
                >
                  <img
                    src={episode.image ? episode.image.medium : null}
                    alt=""
                  />
                </a>
                <p className="info__p">
                  Airtime:{episode.airtime}
                  <br />
                  Airdate:{episode.airdate}
                  <br />
                  Runtime:{episode.runtime} minutes
                  <br />
                  Airstamp:{episode.airstamp}
                </p>
                <p className="summary__p">
                  {episode.summary
                    ? episode.summary
                        .replace(/<p>/g, "")
                        .replace(/<\/p>/g, "")
                    : null}
                  <a href={episode._links.self.href}>
                    {episode._links.self.href}
                  </a>
                </p>
              </card>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Episodes;
