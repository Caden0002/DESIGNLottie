import Lottie from 'lottie-react';
import HeroHouse from '../../Lottie/HeroHouse.json'; 
import HeroBackground from '/HeroBackground.png'; // Adjust the path as necessary

const Header = 'Cozy Up This Winter';
const Header2 = 'Explore Our Rentable Homes & Suites';

function Hero(props) {
    return (
        <div className="relative min-h-screen flex" style={{ backgroundImage: `url(${HeroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center">
                <div className="font-PD text-5xl md:text-6xl font-black text-[#00AEC6] mx-6">
                    {Header}
                </div>
                <div className="mt-7 font-PD text-3xl md:text-5xl font-bold text-black mx-6">
                    {Header2}
                </div>
                <div className="mt-7" style={{ width: '800px', height: '400px' }}>
                    <Lottie
                        animationData={HeroHouse} 
                        loop={true}             
                        autoplay={true}          
                        speed={1}              
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
