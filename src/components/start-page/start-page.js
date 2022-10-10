import {Link} from "react-router-dom";

export default function StartPage() {
    return (
      <section className="start-page">
             <div className="container">
                  <h1>
                      <span>X</span>
                      <span>O</span>
                  </h1>

                  <div className="chose-player">
                       <p>pick your player</p>
                       <div className="btns">
                           <button type="button" name="button" className="o-btn">X</button>
                           <button type="button" name="button" className="x-btn active-btn">O</button>
                       </div>

                       <div className="play-with">
                            <Link to="/game-page" className="play-width-cpu" data-target="cpu">new game with cpu</Link>
                            <Link to="/game-page" className="play-width-friend" data-target="friend">new game with your friend</Link>
                       </div>
                  </div>

             </div>
         </section>
    )
}
