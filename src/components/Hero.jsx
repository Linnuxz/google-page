import React, { useState } from "react";
import Google from "../assets/google.png";
import Mglass from "../assets/lupa.svg";
import Mic from "../assets/microphone.svg";
import Camera from "../assets/camera.svg";

const Hero = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isHovering1, setIsHovering1] = useState(false);

    return (
        <div className="flex flex-col align-middle mx-auto mt-[40px]">
            <img src={Google} alt="google-logo" className="w-[272px] mx-auto" />
            <div className="pt-[26px] mx-auto">
                <div className="inline-flex mx-[40px] md:w-[584px] w-[400px]">
                    <input
                        className="block outline-none border hover:shadow-box transition-[0.15s] focus:shadow-box rounded-full border-[rgb(223, 225, 229))] h-[48px] w-[100%] box-border pl-[46px]"
                        type="text"
                    />
                    <div className="absolute mt-[14px] ml-[15px]">
                        <img
                            src={Mglass}
                            alt="magnifying-glass"
                            className="w-[20px]"
                        />
                    </div>
                    <div className="relative flex align-middle gap-4 mr-3 mt-[11px]">
                        <button
                            className="absolute w-[24px] right-[55px]"
                            onMouseOver={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <img src={Mic} alt="voice-search" />
                        </button>
                        <div
                            className={`absolute text-['arial'] font-bold border-[1px] border-solid border-[rgb(255,255,255)] text-[11px] w-[100px] pt-[5px] mt-[40px] h-[29px] right-[16px] text-center bg-[rgb(45,45,45)] text-white rounded-sm ${
                                isHovering ? "block" : "hidden"
                            }`}
                        >
                            <div className="absolute bg-[rgb(45,45,45)] mt-[-9px] ml-[45px] w-[7px] h-[7px] rotate-45"></div>
                            <div>Search by voice</div>
                        </div>
                        <button
                            className="absolute w-[24px] right-[15px]"
                            onMouseOver={() => setIsHovering1(true)}
                            onMouseLeave={() => setIsHovering1(false)}
                        >
                            <img src={Camera} alt="voice-search" />
                        </button>
                        <div
                            className={`absolute text-['arial'] font-bold border-[1px] border-solid border-[rgb(255,255,255)] text-[11px] w-[100px] pt-[5px] mt-[40px] h-[29px] right-[-20px] text-center bg-[rgb(45,45,45)] text-white rounded-sm ${
                                isHovering1 ? "block" : "hidden"
                            }`}
                        >
                            <div className="absolute bg-[rgb(45,45,45)] mt-[-9px] ml-[45px] w-[7px] h-[7px] rotate-45"></div>
                            <div className="px-[2px]">Search by image</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col text-center justify-center align-middle gap-3 mt-4 text-[14px] font-['arial'] text-[#3c4043] pt-[12px]">
                <div className="flex align-middle justify-center mb-[11px] gap-3">
                    <button className="w-[132px] h-[36px] bg-[#f8f9fa] rounded-md hover:shadow-buttonbox hover:border-[1px] border-solid border-[#dadce0]">
                        Google Search
                    </button>
                    <button className="w-[145px] h-[36px] bg-[#f8f9fa] rounded-md hover:shadow-buttonbox hover:border-[1px] border-solid border-[#dadce0]">
                        I'm Feeling Lucky
                    </button>
                </div>
                <p className="text-[13px] leading-[28px]">
                    Google offered in:
                    <span className="text-[#1a0dab] hover:cursor-pointer hover:underline">
                        {" "}
                        ქართული
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Hero;
