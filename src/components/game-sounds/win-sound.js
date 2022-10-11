export default function WinSound() {
   let [winner,setWinner]=useState(false);
   let playSound=(e) => {
      e.target.play();
   }
       return (

          <div className="win-sound">
              <audio className="win-sound">
                  <source src="game-sounds/Bell Transition sound effect _ No copyright(MP3_320K).mp3" type="audio/mp3"/>
                  <source src="game-sounds/Bell Transition sound effect _ No copyright(MP3_320K).mp3" type="audio/mpeg"/>
                  <source src="game-sounds/Bell Transition sound effect _ No copyright(MP3_320K).mp3" type="audio/ogg"/>
              </audio>
          </div>
    )
}
