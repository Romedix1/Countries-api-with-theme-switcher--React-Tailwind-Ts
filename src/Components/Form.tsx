import React, { FormEvent } from 'react';
import ListElements from './DropDownList'

interface propsInterface {
    theme: string,
    currentRegion: string,
    setCurrentRegion:  any,
    setInputText: any,
}

export default function Form(props: propsInterface) {

    // DropDown list status
    const [dropDownListStatus, setDropDownListStatus] = React.useState(false)

    // Toogle dropDown list status
    function ToogleDropDownList() {
        setDropDownListStatus(prevStatus => !prevStatus)
    }

    // Update input text value
    function UpdateInputText(event: any) {
        props.setInputText(event.target.value)
    }
    
    return (
        <form className='mt-6 grid place-items-start w-11/12 sm:flex sm:items-center sm:justify-between'>
            <div className='flex drop-shadow-lg rounded-md w-full sm:w-7/12 xl:w-4/12'>
                    <button className='bg-White dark:bg-DarkBlue  pl-4 rounded-l-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-6 bg-White dark:bg-DarkBlue" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="#808080" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="#808080" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
                    </button>
                    <input onChange={UpdateInputText} placeholder='Search for a country...' type='text' className='bg-White dark:bg-DarkBlue dark:text-White dark:placeholder:text-White py-3 w-full pr-6 pl-3 rounded-r-md outline-none border-none'/>
            </div>

            <div>
                <div onClick={() => ToogleDropDownList()} className='relative flex items-center justify-between bg-White dark:bg-DarkBlue dark:text-White mt-4 py-2 pl-4 text-VeryDarkBlueLight font-semibold rounded-md cursor-pointer sm:mt-0'>
                    {props.currentRegion=== "" ? <p>Filter by Region</p> : <p>{props.currentRegion}</p>}
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-7 ml-10 mr-2' x="0" y="0" version="1.1" viewBox="0 0 29 29"><path fill="none" stroke={props.theme === "dark" ? "#fff" : "#000"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="m20.5 11.5-6 6-6-6"></path></svg>
                </div>
                
                {dropDownListStatus && <ul className='dropDown-list bg-White dark:bg-DarkBlue pt-4 pb-2 mt-2 rounded-lg absolute'>
                    <ListElements setCurrentRegion={props.setCurrentRegion} setDropDownListStatus={setDropDownListStatus}/>
                </ul>}
            </div>
        </form>

    )
}