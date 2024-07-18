import Lottie from 'lottie-react';
import AboutScenic from '../../Lottie/AboutScenic.json'; 
import AboutCozy from '../../Lottie/AboutCozy.json'; 
import AboutComfort from '../../Lottie/AboutComfort.json'; 

const Header1 = 'Cozy Ambiance';
const Subheader1 = 'Experience the ultimate in coziness with our meticulously curated homes, featuring crackling fireplaces and snug interiors that make every stay a delight.';

const Header2 = 'Scenic Views';
const Subheader2 = 'Immerse yourself in breathtaking winter landscapes right outside your window. Enjoy stunning views of snow-capped mountains or serene winter wonderlands, perfect for relaxation and rejuvenation.';

const Header3 = 'Modern Comforts';
const Subheader3 = 'Indulge in modern amenities that enhance your stay, including fully equipped kitchens, luxurious bedding, and entertainment options, ensuring a seamless blend of comfort and convenience.';

function About(props) {
    return (
        <div className="relative h-full flex bg-[#F5FCFC]">
            <div className="container max-w-screen-xl mx-auto flex flex-wrap md:flex-none justify-center items-center py-20">
                {/* Column 1 */}
                <div className="flex flex-col items-center flex-1 mx-4">
                    <Lottie animationData={AboutCozy} style={{ width: '300px', height: '300px' }} />
                    <h2 className="font-PD text-2xl mt-6">{Header1}</h2>
                    <p className="text-xs mt-6 w-2/3 text-center">{Subheader1}</p>
                </div>
                
                {/* Column 2 */}
                <div className="flex flex-col items-center flex-1 mx-4">
                    <Lottie animationData={AboutScenic} style={{ width: '300px', height: '300px' }} />
                    <h2 className="font-PD text-2xl mt-6">{Header2}</h2>
                    <p className="text-xs mt-6 w-2/3 text-center">{Subheader2}</p>
                </div>
                
                {/* Column 3 */}
                <div className="flex flex-col items-center flex-1 mx-4 mt-12 md:mt-0">
                    <Lottie animationData={AboutComfort} style={{ width: '300px', height: '300px' }} />
                    <h2 className="font-PD text-2xl mt-6">{Header3}</h2>
                    <p className="text-xs mt-6 w-2/3 text-center">{Subheader3}</p>
                </div>
            </div>
        </div>
    );
}

export default About;
