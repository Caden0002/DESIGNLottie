import React from 'react';
import Lottie from 'lottie-react';
import LottieStar from '../../Lottie/LottieStar.json'; 

function Page1(props) {
    return (
        <div className={`relative min-h-screen bg-black mx-auto flex justify-center items-center`}>

            <div className="w-48 h-48">
                <Lottie
                    animationData={LottieStar} // JSON animation data
                    loop={true}               // Optional: Whether animation should loop (default is true)
                    autoplay={true}           // Optional: Whether animation should start playing automatically (default is true)
                    speed={1}               // Optional: Speed of the animation playback (default is 1)
                />
            </div>

        </div>
    );
}

export default Page1;
