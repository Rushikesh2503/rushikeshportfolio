import React from 'react';
import Typewriter from 'typewriter-effect';


const AnimatedText = () => {
    return (
        <div style={{padding:"20px 0", height:"30px",color:"blanchedalmond"}}>
        <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString("Hello👋").pauseFor(2000).deleteAll().typeString("नमस्ते 🙏")
                .pauseFor(2000).deleteAll().typeString("नमस्कार 🙏")
                    
                .start()
            }}
            />
            </div>
    )
}

export default AnimatedText
