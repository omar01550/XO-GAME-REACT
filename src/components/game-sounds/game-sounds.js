export default function GameSounds() {
    return (
        <div>
            <audio className="click-sound">
                   <source src="game-sounds/Shutter Click sound effect (no copyright )(MP3_320K).mp3" type="audio/mp3"/>
                   <source src="game-sounds/Shutter Click sound effect (no copyright )(MP3_320K).mp3" type="audio/ogg"/>
                   <source src="game-sounds/Shutter Click sound effect (no copyright )(MP3_320K).mp3" type="audio/mpeg"/>
              </audio>



               <audio className="win-sound">
                   <source src="game-sounds/Bell Transition sound effect _ No copyright(MP3_320K).mp3" type="audio/mp3"/>
                   <source src="game-sounds/Bell Transition sound effect _ No copyright(MP3_320K).mp3" type="audio/mpeg"/>
                   <source src="game-sounds/Bell Transition sound effect _ No copyright(MP3_320K).mp3" type="audio/ogg"/>
               </audio>
        </div>
    )
}
