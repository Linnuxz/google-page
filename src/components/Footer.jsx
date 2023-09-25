import React from "react";

const Footer = () => {
    return (
        <div className="fixed left-0 bottom-0 w-[100%] h-[95px] bg-[#f2f2f2]">
            <div className="mx-7">
                <div className="mt-3 mb-3">
                    <h3 className="text-[#70757a] text-[15px]">Georgia</h3>
                </div>
                <hr />
                <div className="flex justify-between text-[14px] text-[#70757a] mt-3 mx-1">
                    <div>
                        <ul className="flex gap-7">
                            <li className="hover:underline">
                                <a href="#">About</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Advertising</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Business</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">How Search works</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex gap-7">
                            <li className="hover:underline">
                                <a href="#">Privacy</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Terms</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Settings</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
