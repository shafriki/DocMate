import React from 'react';
import Marquee from 'react-fast-marquee';

const Community = () => {
    return (
        <div className="max-w-screen-xl md:mx-auto my-16 mx-4">

            {/* Header */}
            <h1 className="text-center text-2xl md:text-4xl font-bold text-[#34495E] mb-12">
                Join Our Marathon Achievers
            </h1>

            {/* Marquee Content */}
            <div className="flex items-center overflow-hidden">
                <Marquee className="cursor-pointer">
                    {/* Image containers with padding and margin for spacing */}
                    <div className="h-16 md:h-28 w-32 md:w-40 mr-5 flex-shrink-0">
                        <img
                            src="https://i.ibb.co.com/cK3xXQS4/two.png"
                            alt="Marathon Achiever 1"
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="h-16 md:h-28 w-32 md:w-40 mr-5 flex-shrink-0">
                        <img
                            src="https://i.ibb.co.com/NdBtxRjy/three.png"
                            alt="Marathon Achiever 2"
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="h-16 md:h-28 w-32 md:w-40 mr-5 flex-shrink-0">
                        <img
                            src="https://i.ibb.co.com/0pmZP6Nm/ten.jpg"
                            alt="Marathon Achiever 3"
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="h-16 md:h-28 w-32 md:w-40 mr-5 flex-shrink-0">
                        <img
                            src="https://i.ibb.co.com/VWLm75vm/six.png"
                            alt="Marathon Achiever 4"
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="h-16 md:h-28 w-32 md:w-40 mr-5 flex-shrink-0">
                        <img
                            src="https://i.ibb.co.com/dwkC100s/seven.png"
                            alt="Marathon Achiever 5"
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="h-16 md:h-28 w-32 md:w-40 mr-5 flex-shrink-0">
                        <img
                            src="https://i.ibb.co.com/JRSDSWkq/one.jpg"
                            alt="Marathon Achiever 6"
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="h-16 md:h-28 w-32 md:w-40 mr-5 flex-shrink-0">
                        <img
                            src="https://i.ibb.co.com/v6pVWBvK/nine.jpg"
                            alt="Marathon Achiever 7"
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="h-16 md:h-28 w-32 md:w-40 mr-5 flex-shrink-0">
                        <img
                            src="https://i.ibb.co.com/fGCqgf8H/five.png"
                            alt="Marathon Achiever 8"
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="h-16 md:h-28 w-32 md:w-40 mr-5 flex-shrink-0">
                        <img
                            src="https://i.ibb.co.com/N64VtvyN/eight.jpg"
                            alt="Marathon Achiever 9"
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="h-16 md:h-28 w-32 md:w-40 mr-5 flex-shrink-0">
                        <img
                            src="https://i.ibb.co.com/x8cvsHWQ/four.jpg"
                            alt="Marathon Achiever 10"
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Community;
