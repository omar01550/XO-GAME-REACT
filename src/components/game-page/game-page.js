import {Link} from "react-router-dom";
import {useState} from 'react';

export default function GamePage() {

    let [turn,setTurn]=useState("x");
    let [xScore,setXscore]=useState(0);
    let [oScore,setOscore]=useState(0);
    let [ties,setTies]=useState(0)

    function startGame(e) {
    squClick(e);
    handelTies();

let allSqu=document.querySelectorAll(".squ");

 checkWinner(0,3,6,allSqu);
 checkWinner(0,1,2,allSqu);
 checkWinner(2,5,8,allSqu);
 checkWinner(6,7,8,allSqu);
 checkWinner(1,4,7,allSqu);
 checkWinner(0,4,8,allSqu);
 checkWinner(2,4,6,allSqu);
 checkWinner(3,4,5,allSqu);

}
     function squClick(e) {
       if(e.target.innerHTML === ''){
           switch (turn) {
             case "x":
                e.target.innerHTML = `<h1 class="x">x</h1>`
                setTurn("o")
               break;
               case "o":
                  e.target.innerHTML = `<h1 class="o">o</h1>`
                  setTurn("x")
                 break;
             default:

           }
       }
     }


    function retry() {
        let allSqu=document.querySelectorAll(".squ");
        allSqu.forEach((squ, i) => {
             squ.innerHTML='';
             squ.style.pointerEvents="all";
             squ.classList.remove("win");
        });

        setTurn("x");

    }

    function checkWinner(x,y,z,allSqu) {

         if(allSqu[x].innerHTML === allSqu[y].innerHTML && allSqu[y].innerHTML=== allSqu[z].innerHTML && allSqu[y].innerHTML!==""){

             allSqu.forEach((squ, i) => {
               squ.style.pointerEvents="none";
             });

             [allSqu[x],allSqu[y],allSqu[z]].forEach((ele, i) => {
                  ele.classList.add("win");
             });

             // check ties;


             if(turn === 'x'){
                 setXscore(()=>xScore++)
             }else{
               setOscore(()=>oScore++)
             }
         }
    }

    function handelTies() {
       let allSqu=document.querySelectorAll(".squ");
       let state=true;
       for(let i=0;i<allSqu.length;i++){
          if(allSqu[i].innerHTML == ""){
             state=false;
          }

       }

       if(state){
          setTies(()=>ties+1);
       }
    }


   return (
     <section className="game-page">
           <Link to="/" className="back-btn">back</Link>

              <div className="container">
                   <div className="xo">
                      <span>X</span>
                      <span>O</span>
                   </div>
                   <div className="turn">

                       <button type="button" name="button" className="pointer">
                          <span className="current-player">{turn}</span>
                         turn
                       </button>
                   </div>
                   <div className="retry">
                        <button type="button" name="button" onClick={retry}><i className="fa fa-repeat pointer" aria-hidden="false"></i></button>
                   </div>
                   <div className="squ" onClick={startGame}></div>
                   <div className="squ" onClick={startGame}></div>
                   <div className="squ" onClick={startGame}></div>
                   <div className="squ" onClick={startGame}></div>
                   <div className="squ" onClick={startGame}></div>
                   <div className="squ" onClick={startGame}></div>
                   <div className="squ" onClick={startGame}></div>
                   <div className="squ" onClick={startGame}></div>
                   <div className="squ" onClick={startGame}></div>


                   <div className="your-score result">

                          <div className="">
                            <small>x</small>
                            <span>you</span>
                          </div>
                          <span className="x-score">{xScore}</span>
                   </div>
                   <div className="ties result">

                          <span>ties</span>
                          <span>{ties}</span>

                   </div>
                   <div className="other-score result">


                             <div className="">
                               <small>{oScore}</small>
                               <span>cpu</span>
                             </div>
                             <span className="o-score">{oScore}</span>

                   </div>
              </div>
         </section>
   )
}
