import React from "react";

export default function Nav(props: any) {
    return (
        <nav className="shadow-lg py-6 px-6 flex justify-between items-center dark:bg-DarkBlue relative z-20">
            <h1 className="text-lg font-extrabold dark:text-white">Where is the world?</h1>

            <div className="flex items-center cursor-pointer" onClick={() => props.changeTheme()}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 mr-2 ionicon`} viewBox="0 0 512 512"><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="#ffffff" stroke={`${props.theme==="light" ? "#000000" : "#ffffff"}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                <p className="font-extrabold dark:text-white">Dark Mode</p>
            </div>
        </nav>
    )
}