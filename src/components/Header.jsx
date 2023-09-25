import React from "react";
import AppsLogo from "../assets/google-apps-logo.svg";

const Header = () => {
    return (
        <div className="flex justify-end align-middle mx-4 mt-3 h-[40px]">
            <div className="flex gap-4 text-[13px] justify-center leading-9">
                <a className="hover:underline" href="https://www.gmail.com">
                    Gmail
                </a>
                <a className="hover:underline" href="https://images.google.com">
                    Images
                </a>
                <div className="my-auto hover:cursor-pointer duration-[0.3s] hover:bg-gray-200 rounded-full h-[40px] w-[40px]">
                    <img
                        className="mx-auto mt-[7px]"
                        src={AppsLogo}
                        alt="apps-logo"
                    />
                </div>
                <div className="w-[40px] ml-[-9px] pr-[-5px] mt-[-2px] h-[40px] rounded-full hover:bg-gray-200 duration flex justify-center align-middle my-auto">
                    <img
                        className="hover:cursor-pointer rounded-full my-auto w-[32px] h-[32px]"
                        src="https://lh3.googleusercontent.com/ogw/AKPQZvyS7VGj2WCp3mPWyNH0_7cwOGvuZPesLJ9_1mp5=s32-c-mo"
                        alt="user-pic"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
